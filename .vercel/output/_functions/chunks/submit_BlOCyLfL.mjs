import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { z } from "zod";
import nodemailer from "nodemailer";
//#region src/lib/mail/templates/client-admin.ts
var LOGO_URL$3 = `https://mood.pe/assets/Logo_mood.svg`;
var getClientAdminTemplate = (data) => {
	return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; margin: 0; width: 100%;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);">
        <tr>
          <td style="padding: 40px 32px;">
            <div style="margin-bottom: 32px;">
              <img src="${LOGO_URL$3}" alt="Mood Agencia" style="max-height: 32px; display: block; border: 0;" />
            </div>
            
            <h1 style="color: #0f172a; font-size: 20px; font-weight: 600; margin: 0 0 8px 0;">Nuevo Lead Comercial</h1>
            <p style="color: #64748b; font-size: 14px; margin: 0 0 24px 0;">Se ha recibido un nuevo contacto desde el sitio web.</p>
            
            <!-- Data Table (Shadcn UI style) -->
            <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border: 1px solid #e2e8f0; border-radius: 10px; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #475569; font-size: 13px; font-weight: 600; width: 30%;">Nombre</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">${data.nombre}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #475569; font-size: 13px; font-weight: 600;">Correo</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">
                  <a href="mailto:${data.correo}" style="color: #0f172a; text-decoration: underline;">${data.correo}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #475569; font-size: 13px; font-weight: 600;">Teléfono</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">${data.telefono}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; background-color: #f8fafc; color: #475569; font-size: 13px; font-weight: 600; vertical-align: top;">Mensaje</td>
                <td style="padding: 12px 16px; color: #0f172a; font-size: 14px; line-height: 1.5;">${data.mensaje}</td>
              </tr>
            </table>

          </td>
        </tr>
      </table>
    </div>
  `;
};
//#endregion
//#region src/lib/mail/templates/client-user.ts
var LOGO_URL$2 = `https://mood.pe/assets/Logo_mood.svg`;
var getClientUserTemplate = (name) => {
	return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; margin: 0; width: 100%;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);">
        <tr>
          <td style="padding: 40px 32px;">
            <!-- Header / Logo -->
            <div style="margin-bottom: 32px;">
              <img src="${LOGO_URL$2}" alt="Mood Agencia" style="max-height: 40px; display: block; border: 0;" />
            </div>
            
            <!-- Main Content -->
            <h1 style="color: #0f172a; font-size: 20px; font-weight: 600; margin: 0 0 16px 0;">¡Hola, ${name}!</h1>
            <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0 0 16px 0;">
              Hemos recibido tu mensaje correctamente. Nuestro equipo está revisando tu solicitud y nos pondremos en contacto contigo lo antes posible para ayudarte a llevar tu marca al siguiente nivel.
            </p>
            <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0;">
              Gracias por pensar en <strong>Mood Agencia</strong>.
            </p>

            <!-- Divider -->
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;" />
            
            <!-- Footer -->
            <p style="color: #64748b; font-size: 12px; line-height: 1.5; margin: 0; text-align: center;">
              Este es un mensaje generado automáticamente.<br>Por favor, no respondas a este correo.
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;
};
//#endregion
//#region src/lib/mail/templates/work-admin.ts
var LOGO_URL$1 = `https://mood.pe/assets/Logo_mood.svg`;
var getWorkAdminTemplate = (data) => {
	return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; margin: 0; width: 100%;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);">
        <tr>
          <td style="padding: 40px 32px;">
            <div style="margin-bottom: 32px;">
              <img src="${LOGO_URL$1}" alt="Mood Agencia" style="max-height: 32px; display: block; border: 0;" />
            </div>
            
            <h1 style="color: #0f172a; font-size: 20px; font-weight: 600; margin: 0 0 8px 0;">Postulación de Talento</h1>
            <p style="color: #64748b; font-size: 14px; margin: 0 0 24px 0;">
              Se ha recibido un nuevo currículum desde el sitio web. <strong>El HV se encuentra adjunto a este correo.</strong>
            </p>
            
            <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border: 1px solid #e2e8f0; border-radius: 10px; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #475569; font-size: 13px; font-weight: 600; width: 30%;">Candidato</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">${data.nombre}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #475569; font-size: 13px; font-weight: 600;">Correo</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">
                  <a href="mailto:${data.correo}" style="color: #0f172a; text-decoration: underline;">${data.correo}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc; color: #475569; font-size: 13px; font-weight: 600;">Teléfono</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">${data.telefono}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; background-color: #f8fafc; color: #475569; font-size: 13px; font-weight: 600; vertical-align: top;">Detalles adicionales</td>
                <td style="padding: 12px 16px; color: #0f172a; font-size: 14px; line-height: 1.5;">${data.mensaje}</td>
              </tr>
            </table>

          </td>
        </tr>
      </table>
    </div>
  `;
};
//#endregion
//#region src/lib/mail/templates/work-user.ts
var LOGO_URL = `https://mood.pe/assets/Logo_mood.svg`;
var getWorkUserTemplate = (name) => {
	return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; margin: 0; width: 100%;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);">
        <tr>
          <td style="padding: 40px 32px;">
            <div style="margin-bottom: 32px;">
              <img src="${LOGO_URL}" alt="Mood Agencia" style="max-height: 40px; display: block; border: 0;" />
            </div>
            
            <h1 style="color: #0f172a; font-size: 20px; font-weight: 600; margin: 0 0 16px 0;">¡Hola, ${name}!</h1>
            <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0 0 16px 0;">
              Hemos recibido tu postulación y tu HV con éxito. Nos emociona saber que te interesa formar parte del equipo de <strong>Mood Agencia</strong>.
            </p>
            <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0 0 16px 0;">
              Estaremos revisando tu perfil a detalle. Si hace "match" con lo que estamos buscando actualmente, nos pondremos en contacto contigo muy pronto para dar el siguiente paso.
            </p>
            <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0;">¡Mucho éxito!</p>

            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;" />
            
            <p style="color: #64748b; font-size: 12px; line-height: 1.5; margin: 0; text-align: center;">
              Este es un mensaje generado automáticamente.<br>Por favor, no respondas a este correo.
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;
};
//#endregion
//#region src/lib/mail/transporter.ts
var SMTP_HOST = "smtp.gmail.com";
var SMTP_PORT = "465";
var transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: Number(SMTP_PORT) || 465,
	secure: Number(SMTP_PORT) === 465,
	auth: {
		user: "tecnologia@mood.pe",
		pass: "ancf gpre pimb ntuq"
	}
});
//#endregion
//#region src/lib/mail/mailer.ts
var EMAIL_FROM = "Mood Colombia <tu_correo@tudominio.com>";
var EMAIL_TO_NOTIFICATION = "cbraco@gruposp.pe";
var sendClientEmails = async (data) => {
	const adminMail = transporter.sendMail({
		from: EMAIL_FROM,
		to: EMAIL_TO_NOTIFICATION,
		subject: `🚨 Nuevo Lead Comercial: ${data.nombre}`,
		html: getClientAdminTemplate(data)
	});
	const userMail = transporter.sendMail({
		from: EMAIL_FROM,
		to: data.correo,
		subject: `¡Gracias por contactar con Mood Agencia!`,
		html: getClientUserTemplate(data.nombre)
	});
	await Promise.all([adminMail, userMail]);
};
var sendWorkEmails = async (data, file) => {
	const adminMail = transporter.sendMail({
		from: EMAIL_FROM,
		to: EMAIL_TO_NOTIFICATION,
		subject: `💼 Nueva Postulación: ${data.nombre}`,
		html: getWorkAdminTemplate(data),
		attachments: [{
			filename: file.filename,
			content: file.content,
			contentType: file.contentType
		}]
	});
	const userMail = transporter.sendMail({
		from: EMAIL_FROM,
		to: data.correo,
		subject: `Hemos recibido tu postulación - Mood Agencia`,
		html: getWorkUserTemplate(data.nombre)
	});
	await Promise.all([adminMail, userMail]);
};
//#endregion
//#region src/utils/rate-limit.ts
var limits = /* @__PURE__ */ new Map();
/**
* Verifica si una IP ha excedido el límite de solicitudes.
* @param ip - Dirección IP del cliente
* @param limit - Número máximo de solicitudes permitidas por ventana
* @param windowMs - Tiempo de la ventana en milisegundos
* @returns boolean - `true` si la solicitud está permitida, `false` si debe bloquearse
*/
var rateLimit = (ip, limit = 3, windowMs = 6e4) => {
	const now = Date.now();
	const userLimit = limits.get(ip);
	if (!userLimit) {
		limits.set(ip, {
			count: 1,
			resetTime: now + windowMs
		});
		return true;
	}
	if (now > userLimit.resetTime) {
		limits.set(ip, {
			count: 1,
			resetTime: now + windowMs
		});
		return true;
	}
	if (userLimit.count >= limit) return false;
	userLimit.count += 1;
	return true;
};
//#endregion
//#region src/pages/api/forms/submit.ts
var submit_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var escapeHTML = (str) => str.replace(/[&<>'"]/g, (tag) => ({
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"'": "&#39;",
	"\"": "&quot;"
})[tag] || tag);
var formSchema = z.object({
	nombre: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres.").max(50, "El nombre es demasiado largo.").regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/, "Solo se permiten letras y espacios.").transform(escapeHTML),
	correo: z.string().trim().email("Formato de correo inválido.").transform(escapeHTML),
	telefono: z.string().trim().min(6, "El teléfono es muy corto.").max(20, "El teléfono es muy largo.").regex(/^\+?[\d\s\-]+$/, "El teléfono solo puede contener números, espacios y el signo +.").transform(escapeHTML),
	mensaje: z.string().trim().max(2e3, "El mensaje es demasiado largo.").optional().default("Sin mensaje adicional.").transform(escapeHTML)
}).strict();
var MAX_FILE_SIZE = 5242880;
var ACCEPTED_MIME_TYPES = [
	"application/pdf",
	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];
var POST = async ({ request }) => {
	try {
		if (!rateLimit(request.headers.get("x-forwarded-for") || "unknown-ip", 3, 6e4)) return new Response(JSON.stringify({
			success: false,
			message: "Demasiadas solicitudes. Espera un momento."
		}), { status: 429 });
		const formData = await request.formData();
		const formType = formData.get("formType");
		if (formData.get("bot_check")) return new Response(JSON.stringify({
			success: false,
			message: "Petición rechazada."
		}), { status: 400 });
		const rawData = {
			nombre: formData.get("nombre"),
			correo: formData.get("correo"),
			telefono: formData.get("telefono"),
			mensaje: formData.get("mensaje")
		};
		const validatedData = formSchema.parse(rawData);
		if (formType === "contacto") {
			await sendClientEmails(validatedData);
			return new Response(JSON.stringify({
				success: true,
				message: "Mensaje enviado."
			}), { status: 200 });
		}
		if (formType === "trabaja") {
			const file = formData.get("archivo");
			if (!file || file.size === 0) return new Response(JSON.stringify({
				success: false,
				message: "El archivo es obligatorio."
			}), { status: 400 });
			if (file.size > MAX_FILE_SIZE) return new Response(JSON.stringify({
				success: false,
				message: "El archivo excede los 5MB permitidos."
			}), { status: 400 });
			if (!ACCEPTED_MIME_TYPES.includes(file.type)) return new Response(JSON.stringify({
				success: false,
				message: "Formato no permitido (Solo PDF, DOC, DOCX)."
			}), { status: 400 });
			const arrayBuffer = await file.arrayBuffer();
			const buffer = Buffer.from(arrayBuffer);
			await sendWorkEmails(validatedData, {
				filename: file.name,
				content: buffer,
				contentType: file.type
			});
			return new Response(JSON.stringify({
				success: true,
				message: "Postulación enviada."
			}), { status: 200 });
		}
		return new Response(JSON.stringify({
			success: false,
			message: "Tipo de formulario inválido."
		}), { status: 400 });
	} catch (error) {
		console.error("❌ Error en el Endpoint de Formularios:", error);
		return new Response(JSON.stringify({
			success: false,
			message: "Ocurrió un error inesperado al procesar tu solicitud."
		}), { status: 500 });
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/forms/submit@_@ts
var page = () => submit_exports;
//#endregion
export { page };
