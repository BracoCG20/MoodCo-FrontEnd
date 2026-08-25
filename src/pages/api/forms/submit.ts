import type { APIRoute } from 'astro';
import { z } from 'zod';
import { sendClientEmails, sendWorkEmails } from '../../../lib/mail/mailer';
import { rateLimit } from '../../../utils/rate-limit';

// Función para sanitizar HTML (Convierte <script> en &lt;script&gt;)
const escapeHTML = (str: string) =>
  str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      })[tag] || tag,
  );

// 1. ESQUEMA DE VALIDACIÓN ESTRICTA
// .strict() asegura que la solicitud sea rechazada inmediatamente si llega un campo no definido aquí.
const formSchema = z
  .object({
    nombre: z
      .string()
      .trim()
      .min(2, 'El nombre debe tener al menos 2 caracteres.')
      .max(50, 'El nombre es demasiado largo.')
      .regex(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
        'Solo se permiten letras y espacios.',
      )
      .transform(escapeHTML), // Sanitización
    correo: z
      .string()
      .trim()
      .email('Formato de correo inválido.')
      .transform(escapeHTML),
    telefono: z
      .string()
      .trim()
      .min(6, 'El teléfono es muy corto.')
      .max(20, 'El teléfono es muy largo.')
      .regex(
        /^\+?[\d\s\-]+$/,
        'El teléfono solo puede contener números, espacios y el signo +.',
      )
      .transform(escapeHTML),
    mensaje: z
      .string()
      .trim()
      .max(2000, 'El mensaje es demasiado largo.')
      .optional()
      .default('Sin mensaje adicional.')
      .transform(escapeHTML),
  })
  .strict();

// Configuración estricta para el archivo adjunto (Máximo 5MB y formatos permitidos)
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
];

export const POST: APIRoute = async ({ request }) => {
  try {
    // 2. Protección Rate Limit (Máximo 3 peticiones por IP cada 1 minuto)
    const ip = request.headers.get('x-forwarded-for') || 'unknown-ip';
    if (!rateLimit(ip, 3, 60000)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Demasiadas solicitudes. Espera un momento.',
        }),
        { status: 429 },
      );
    }

    // 3. Procesar FormData (Nativo de la plataforma Web, soporta archivos)
    const formData = await request.formData();
    const formType = formData.get('formType');
    const botCheck = formData.get('bot_check');

    // 4. Protección contra Bots (Honeypot)
    if (botCheck) {
      // Si el campo invisible se llenó, es un bot. Retornamos 400 silenciando el error.
      return new Response(
        JSON.stringify({ success: false, message: 'Petición rechazada.' }),
        { status: 400 },
      );
    }

    // 5. Extraer y Validar Datos base
    const rawData = {
      nombre: formData.get('nombre') as string,
      correo: formData.get('correo') as string,
      telefono: formData.get('telefono') as string,
      mensaje: formData.get('mensaje') as string,
    };

    // Sanitización automática: Zod limpiará cualquier campo extra que intente inyectar el usuario
    const validatedData = formSchema.parse(rawData);

    // ==============================================================
    // 6A. LÓGICA PARA FORMULARIO: CAPTACIÓN DE CLIENTES
    // ==============================================================
    if (formType === 'contacto') {
      await sendClientEmails(validatedData);
      return new Response(
        JSON.stringify({ success: true, message: 'Mensaje enviado.' }),
        { status: 200 },
      );
    }

    // ==============================================================
    // 6B. LÓGICA PARA FORMULARIO: TRABAJA CON NOSOTROS (Con Archivo)
    // ==============================================================
    if (formType === 'trabaja') {
      const file = formData.get('archivo') as File;

      // Validación rigurosa del archivo en el servidor
      if (!file || file.size === 0) {
        return new Response(
          JSON.stringify({
            success: false,
            message: 'El archivo es obligatorio.',
          }),
          { status: 400 },
        );
      }
      if (file.size > MAX_FILE_SIZE) {
        return new Response(
          JSON.stringify({
            success: false,
            message: 'El archivo excede los 5MB permitidos.',
          }),
          { status: 400 },
        );
      }
      if (!ACCEPTED_MIME_TYPES.includes(file.type)) {
        return new Response(
          JSON.stringify({
            success: false,
            message: 'Formato no permitido (Solo PDF, DOC, DOCX).',
          }),
          { status: 400 },
        );
      }

      // Convertimos el archivo Web API (File) a un Buffer nativo de NodeJS para Nodemailer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const fileAttachment = {
        filename: file.name,
        content: buffer,
        contentType: file.type,
      };

      await sendWorkEmails(validatedData, fileAttachment);
      return new Response(
        JSON.stringify({ success: true, message: 'Postulación enviada.' }),
        { status: 200 },
      );
    }

    // Si manipularon el HTML y enviaron un formType desconocido
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Tipo de formulario inválido.',
      }),
      { status: 400 },
    );
  } catch (error) {
    console.error('❌ Error en el Endpoint de Formularios:', error);
    // Manejo seguro de errores sin exponer la falla del servidor
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Ocurrió un error inesperado al procesar tu solicitud.',
      }),
      { status: 500 },
    );
  }
};
