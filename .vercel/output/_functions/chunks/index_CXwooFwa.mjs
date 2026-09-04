import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { C as createAstro, a as Fragment, b as unescapeHTML, c as renderSlot, d as renderTemplate, f as maybeRenderHead, h as createRenderInstruction, i as renderComponent, m as addAttribute, p as renderHead } from "./server_D2u9uoeC.mjs";
import { t as createComponent } from "./compiler_BvAQtPDj.mjs";
//#region node_modules/.pnpm/astro@7.2.4_@emnapi+core@1._d5020a5348550caf2d1e283882743078/node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/assets/logos/Kare.png
var Kare_exports = /* @__PURE__ */ __exportAll({ default: () => Kare_default });
var Kare_default = new Proxy({
	"src": "/_astro/Kare.CI2ORJbc.png",
	"width": 220,
	"height": 40,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/logos/Kare.png";
	return target[name];
} });
//#endregion
//#region src/assets/logos/aua.png
var aua_exports = /* @__PURE__ */ __exportAll({ default: () => aua_default });
var aua_default = new Proxy({
	"src": "/_astro/aua.Bhtgf754.png",
	"width": 195,
	"height": 97,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/logos/aua.png";
	return target[name];
} });
//#endregion
//#region src/assets/logos/autoPartesYa.png
var autoPartesYa_exports = /* @__PURE__ */ __exportAll({ default: () => autoPartesYa_default });
var autoPartesYa_default = new Proxy({
	"src": "/_astro/autoPartesYa.9V0tTrvC.png",
	"width": 424,
	"height": 90,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/logos/autoPartesYa.png";
	return target[name];
} });
//#endregion
//#region src/assets/logos/boConcept.png
var boConcept_exports = /* @__PURE__ */ __exportAll({ default: () => boConcept_default });
var boConcept_default = new Proxy({
	"src": "/_astro/boConcept.TIycRv5F.png",
	"width": 320,
	"height": 65,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/logos/boConcept.png";
	return target[name];
} });
//#endregion
//#region src/assets/logos/cineColombia.png
var cineColombia_exports = /* @__PURE__ */ __exportAll({ default: () => cineColombia_default });
var cineColombia_default = new Proxy({
	"src": "/_astro/cineColombia.xr8Dtld-.png",
	"width": 145,
	"height": 113,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/logos/cineColombia.png";
	return target[name];
} });
//#endregion
//#region src/assets/logos/comapan.png
var comapan_exports = /* @__PURE__ */ __exportAll({ default: () => comapan_default });
var comapan_default = new Proxy({
	"src": "/_astro/comapan.Cim66Cki.png",
	"width": 180,
	"height": 81,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/logos/comapan.png";
	return target[name];
} });
//#endregion
//#region src/assets/logos/corona.png
var corona_exports = /* @__PURE__ */ __exportAll({ default: () => corona_default });
var corona_default = new Proxy({
	"src": "/_astro/corona.DrAgwV6I.png",
	"width": 262,
	"height": 39,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/logos/corona.png";
	return target[name];
} });
//#endregion
//#region src/assets/logos/dahua.png
var dahua_exports = /* @__PURE__ */ __exportAll({ default: () => dahua_default });
var dahua_default = new Proxy({
	"src": "/_astro/dahua.4cQDmws_.png",
	"width": 264,
	"height": 79,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/logos/dahua.png";
	return target[name];
} });
//#endregion
//#region src/assets/logos/dlk.png
var dlk_exports = /* @__PURE__ */ __exportAll({ default: () => dlk_default });
var dlk_default = new Proxy({
	"src": "/_astro/dlk.ChGkeAVS.png",
	"width": 215,
	"height": 63,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/logos/dlk.png";
	return target[name];
} });
//#endregion
//#region src/assets/logos/kg.png
var kg_exports = /* @__PURE__ */ __exportAll({ default: () => kg_default });
var kg_default = new Proxy({
	"src": "/_astro/kg.Cd6C8cMO.png",
	"width": 132,
	"height": 113,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/logos/kg.png";
	return target[name];
} });
//#endregion
//#region src/assets/logos/mepal.png
var mepal_exports = /* @__PURE__ */ __exportAll({ default: () => mepal_default });
var mepal_default = new Proxy({
	"src": "/_astro/mepal.Bxd8Cy90.png",
	"width": 543,
	"height": 88,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/logos/mepal.png";
	return target[name];
} });
//#endregion
//#region src/assets/logos/merz.png
var merz_exports = /* @__PURE__ */ __exportAll({ default: () => merz_default });
var merz_default = new Proxy({
	"src": "/_astro/merz.oJ8KtQLZ.png",
	"width": 369,
	"height": 67,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/logos/merz.png";
	return target[name];
} });
//#endregion
//#region src/assets/logos/roa.png
var roa_exports = /* @__PURE__ */ __exportAll({ default: () => roa_default });
var roa_default = new Proxy({
	"src": "/_astro/roa.lGgJhLAd.png",
	"width": 165,
	"height": 108,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/logos/roa.png";
	return target[name];
} });
//#endregion
//#region src/assets/logos/totalEnergies.png
var totalEnergies_exports = /* @__PURE__ */ __exportAll({ default: () => totalEnergies_default });
var totalEnergies_default = new Proxy({
	"src": "/_astro/totalEnergies.Du2g2wpy.png",
	"width": 175,
	"height": 128,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/logos/totalEnergies.png";
	return target[name];
} });
var brands_default = {
	title: {
		"regular1": "MÁS DE 15 AÑOS ",
		"bold1": "TRANSFORMANDO EL MOOD",
		"regular2": " DE LAS MARCAS DE LATINOAMÉRICA ",
		"bold2": "EN RESULTADOS REALES."
	},
	logos: [
		"comapan.png",
		"cineColombia.png",
		"roa.png",
		"corona.png",
		"totalEnergies.png",
		"Kare.png",
		"aua.png",
		"boConcept.png",
		"autoPartesYa.png",
		"dahua.png",
		"dlk.png",
		"kg.png",
		"merz.png",
		"mepal.png"
	]
};
//#endregion
//#region src/components/Brands/Brands.astro
var $$Brands = createComponent(($$result, $$props, $$slots) => {
	const imageFiles = /* #__PURE__ */ Object.assign({
		"../../assets/logos/Kare.png": Kare_exports,
		"../../assets/logos/aua.png": aua_exports,
		"../../assets/logos/autoPartesYa.png": autoPartesYa_exports,
		"../../assets/logos/boConcept.png": boConcept_exports,
		"../../assets/logos/cineColombia.png": cineColombia_exports,
		"../../assets/logos/comapan.png": comapan_exports,
		"../../assets/logos/corona.png": corona_exports,
		"../../assets/logos/dahua.png": dahua_exports,
		"../../assets/logos/dlk.png": dlk_exports,
		"../../assets/logos/kg.png": kg_exports,
		"../../assets/logos/mepal.png": mepal_exports,
		"../../assets/logos/merz.png": merz_exports,
		"../../assets/logos/roa.png": roa_exports,
		"../../assets/logos/totalEnergies.png": totalEnergies_exports
	});
	const getImagePath = (filename) => {
		const path = `../../assets/logos/${filename}`;
		const image = imageFiles[path];
		return image ? image.default.src : "";
	};
	const loopLogos = [...brands_default.logos, ...brands_default.logos];
	return renderTemplate`${maybeRenderHead($$result)}<section class="brands" aria-labelledby="brands-title" id="marcas" data-animate-section><div class="brands__container"><h2 id="brands-title" class="brands__title" data-animate-element><span class="brands__title-regular">${brands_default.title.regular1}</span><span class="brands__title-bold">${brands_default.title.bold1}</span><span class="brands__title-regular">${brands_default.title.regular2}</span><span class="brands__title-bold">${brands_default.title.bold2}</span></h2><div class="brands__slider"><div class="brands__track" data-brands-track>${loopLogos.map((filename, index) => renderTemplate`<div class="brands__item"${addAttribute(index >= brands_default.logos.length ? "true" : "false", "aria-hidden")}><img${addAttribute(getImagePath(filename), "src")} alt="Logotipo de cliente" class="brands__logo" loading="lazy"></div>`)}</div></div></div></section>${renderScript($$result, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Brands/Brands.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Brands/Brands.astro", void 0);
//#endregion
//#region src/assets/cases/case_brand_1.webp
var case_brand_1_exports = /* @__PURE__ */ __exportAll({ default: () => case_brand_1_default });
var case_brand_1_default = new Proxy({
	"src": "/_astro/case_brand_1.DWv2-iRS.webp",
	"width": 1080,
	"height": 1080,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/cases/case_brand_1.webp";
	return target[name];
} });
//#endregion
//#region src/assets/cases/case_brand_2.webp
var case_brand_2_exports = /* @__PURE__ */ __exportAll({ default: () => case_brand_2_default });
var case_brand_2_default = new Proxy({
	"src": "/_astro/case_brand_2.BtJ1NaSV.webp",
	"width": 1920,
	"height": 1080,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/cases/case_brand_2.webp";
	return target[name];
} });
//#endregion
//#region src/assets/cases/case_brand_3.webp
var case_brand_3_exports = /* @__PURE__ */ __exportAll({ default: () => case_brand_3_default });
var case_brand_3_default = new Proxy({
	"src": "/_astro/case_brand_3.BzUpyhAS.webp",
	"width": 1920,
	"height": 1080,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/cases/case_brand_3.webp";
	return target[name];
} });
//#endregion
//#region src/assets/cases/case_brand_4.webp
var case_brand_4_exports = /* @__PURE__ */ __exportAll({ default: () => case_brand_4_default });
var case_brand_4_default = new Proxy({
	"src": "/_astro/case_brand_4.H_ii-QYq.webp",
	"width": 1920,
	"height": 1080,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/cases/case_brand_4.webp";
	return target[name];
} });
//#endregion
//#region src/assets/cases/case_brand_5.webp
var case_brand_5_exports = /* @__PURE__ */ __exportAll({ default: () => case_brand_5_default });
var case_brand_5_default = new Proxy({
	"src": "/_astro/case_brand_5.wNHOeAM9.webp",
	"width": 1920,
	"height": 1080,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/tecno/Downloads/MoodCo-Web/src/assets/cases/case_brand_5.webp";
	return target[name];
} });
var cases_default = {
	header: {
		"regular": "TRANSFORMACIONES",
		"bold": "QUE PUEDES VER (Y MEDIR)."
	},
	items: [
		{
			"id": "case-01",
			"title": ["TOCADOS", "POR EL SOL"],
			"description": "Transformamos el clima en el motor de nuestra campaña.",
			"tags": "Visibility Mood · Connection Mood",
			"link": "#",
			"image": "case_brand_1.webp"
		},
		{
			"id": "case-02",
			"title": ["NAVIDAD", "COMAPANTÁSTICA"],
			"description": "Nos apropiamos de la temporada más importante del año como nadie lo había hecho en la categoría.",
			"tags": "Growth Mood · Visibility Mood · Connection Mood",
			"link": "#",
			"image": "case_brand_2.webp"
		},
		{
			"id": "case-03",
			"title": ["SI HAY CINE"],
			"description": "Cada estreno es una nueva historia que contar.",
			"tags": "Launch Mood · Visibility Mood · Evolution Mood",
			"link": "#",
			"image": "case_brand_3.webp"
		},
		{
			"id": "case-04",
			"title": ["RELAXING", "PETS"],
			"description": "Mejoramos la salud mental viendo videos de mascotas. ¡Lo hicimos real!",
			"tags": "Connection Mood · Evolution Mood",
			"link": "#",
			"image": "case_brand_4.webp"
		},
		{
			"id": "case-05",
			"title": ["DLK", "RESTAURANTES"],
			"description": "Un grupo, diez marcas gastronómicas, un solo ecosistema digital. Desarrollamos el hub de DLK y los sitios de sus diez restaurantes en Colombia, con reservas integradas en cada marca: cada visita a un clic de convertirse en una mesa ocupada.",
			"tags": "Build Mood · Evolution Mood",
			"link": "#",
			"image": "case_brand_5.webp"
		}
	]
};
//#endregion
//#region src/components/Cases/CaseCard.astro
createAstro("https://astro.build");
var $$CaseCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CaseCard;
	const { title, description, tags, link, imageSrc, video } = Astro.props;
	const titleStr = title.join(" ");
	return renderTemplate`${maybeRenderHead($$result)}<article class="case-card" data-case-card><button class="case-card__trigger" data-case-trigger aria-expanded="false"><div class="case-card__image-wrapper"><img${addAttribute(imageSrc, "src")}${addAttribute(`Caso: ${titleStr}`, "alt")} class="case-card__image" data-case-img loading="lazy"><div class="case-card__gradient"></div><div class="case-card__hover-overlay" data-case-overlay></div></div><h3 class="case-card__title">${title.map((line, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${line}${index !== title.length - 1 && renderTemplate`<br>`}` })}`)}</h3></button><div class="case-card__body" data-case-body><div class="case-card__content"><p class="case-card__description">${description}</p><span class="case-card__tags">${tags}</span><button class="case-card__link" data-ver-caso${addAttribute(titleStr, "data-title")}${addAttribute(video ?? "", "data-video")} type="button">VER CASO</button></div></div></article>`;
}, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Cases/CaseCard.astro", void 0);
//#endregion
//#region src/components/Cases/Cases.astro
var $$Cases = createComponent(($$result, $$props, $$slots) => {
	const imageFiles = /* #__PURE__ */ Object.assign({
		"../../assets/cases/case_brand_1.webp": case_brand_1_exports,
		"../../assets/cases/case_brand_2.webp": case_brand_2_exports,
		"../../assets/cases/case_brand_3.webp": case_brand_3_exports,
		"../../assets/cases/case_brand_4.webp": case_brand_4_exports,
		"../../assets/cases/case_brand_5.webp": case_brand_5_exports
	});
	const getImagePath = (filename) => {
		const path = `../../assets/cases/${filename}`;
		const image = imageFiles[path];
		return image ? image.default.src : "";
	};
	const col1 = [...cases_default.items];
	const col2 = [...cases_default.items.slice(2), ...cases_default.items.slice(0, 2)];
	const track1 = [...col1, ...col1];
	const track2 = [...col2, ...col2];
	return renderTemplate`${maybeRenderHead($$result)}<section class="cases" aria-labelledby="cases-title" data-animate-section><header class="cases__header" data-animate-element><h2 id="cases-title" class="cases__heading"><span class="cases__heading-regular">${cases_default.header.regular}</span><br><span class="cases__heading-bold">${cases_default.header.bold}</span></h2></header><div class="cases__carousel-wrapper"><div class="cases__columns"><!-- Columna 1 (Mobile / Tablet / Desktop) --><div class="cases__col cases__col--1" data-col-index="0"><div class="cases__track" data-carousel-track>${track1.map((item) => renderTemplate`${renderComponent($$result, "CaseCard", $$CaseCard, {
		"title": item.title,
		"description": item.description,
		"tags": item.tags,
		"link": item.link,
		"imageSrc": getImagePath(item.image),
		"video": item.video ?? ""
	})}`)}</div></div><!-- Columna 2 (Tablet / Desktop) --><div class="cases__col cases__col--2" data-col-index="1"><div class="cases__track" data-carousel-track>${track2.map((item) => renderTemplate`${renderComponent($$result, "CaseCard", $$CaseCard, {
		"title": item.title,
		"description": item.description,
		"tags": item.tags,
		"link": item.link,
		"imageSrc": getImagePath(item.image),
		"video": item.video ?? ""
	})}`)}</div></div></div></div></section><!-- Modal Global de Video (reutilizado por todas las cards) --><div class="video-modal" data-video-modal aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="video-modal__backdrop" data-modal-backdrop></div><div class="video-modal__container" data-modal-container><div class="video-modal__header"><span class="video-modal__title" id="modal-title" data-modal-title></span><button class="video-modal__close" data-modal-close aria-label="Cerrar modal" type="button">cerrar ×</button></div><div class="video-modal__media"><video class="video-modal__video" data-modal-video playsinline preload="metadata"></video><!-- Botón play/pausa personalizado --><button class="video-modal__play-btn" data-modal-play aria-label="Reproducir / Pausar" type="button"><svg class="video-modal__play-icon" data-play-icon viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg><svg class="video-modal__pause-icon" data-pause-icon viewBox="0 0 24 24" fill="currentColor" style="display:none"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg></button><!-- Barra de progreso personalizada --><div class="video-modal__progress" data-modal-progress><div class="video-modal__progress-track" data-progress-track><div class="video-modal__progress-fill" data-progress-fill></div><div class="video-modal__progress-knob" data-progress-knob></div></div></div></div></div></div>${renderScript($$result, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Cases/Cases.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Cases/Cases.astro", void 0);
var cta_default = {
	title: {
		"regular": "¿TIENES LO NECESARIO",
		"bold": "PARA SER UN MOODER?"
	},
	description: {
		"textBefore": "Haz",
		"linkText": "clic,",
		"linkUrl": "#contacto",
		"formTrigger": "trabaja",
		"textAfter": "déjanos tus datos y cuéntanos por qué"
	}
};
//#endregion
//#region src/components/Cta/Cta.astro
var $$Cta = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="cta" aria-labelledby="cta-title" id="cta" data-animate-section><div class="cta__container"><h2 id="cta-title" class="cta__title" data-animate-element><span class="cta__title-regular">${cta_default.title.regular}</span><span class="cta__title-bold">${cta_default.title.bold}</span></h2><p class="cta__description" data-animate-element>${cta_default.description.textBefore}<a${addAttribute(cta_default.description.linkUrl, "href")} class="cta__link"${addAttribute(cta_default.description.formTrigger || void 0, "data-form-trigger")}>${cta_default.description.linkText}</a>${cta_default.description.textAfter}</p></div></section>`;
}, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Cta/Cta.astro", void 0);
var footer_default = {
	companyLinks: [
		{
			"label": "Nosotros",
			"url": "/nosotros"
		},
		{
			"label": "Moodology",
			"url": "/moodology"
		},
		{
			"label": "Trabajos",
			"url": "/trabajos"
		},
		{
			"label": "Contacto",
			"url": "/contacto"
		}
	],
	contactInfo: [
		{
			"label": "Email: hola@mood.pe",
			"url": "mailto:hola@mood.pe",
			"isBold": false
		},
		{
			"label": "WhatsApp / Teléfono: +51 999 999 999",
			"url": "tel:+51999999999",
			"isBold": false
		},
		{
			"label": "Ubicación: Bogotá Colombia",
			"url": null,
			"isBold": false
		},
		{
			"label": "Iniciemos un proyecto",
			"url": "#contacto",
			"isBold": false,
			"formTrigger": "contacto"
		},
		{
			"label": "Trabaja con nosotros",
			"url": "#contacto",
			"isBold": true,
			"formTrigger": "trabaja"
		}
	]
};
//#endregion
//#region src/components/Footer/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="footer" data-animate-section><div class="footer__container"><div class="footer__content"><!-- Logo --><div class="footer__brand" data-animate-element><img src="/logo_footer.png" alt="What's your Mood" class="footer__logo" width="180" height="auto" loading="lazy"></div><!-- Enlaces de la empresa --><nav class="footer__nav" aria-label="Navegación del pie de página" data-animate-element><ul class="footer__list">${footer_default.companyLinks.map((link) => renderTemplate`<li class="footer__item"><a${addAttribute(link.url, "href")} class="footer__link">${link.label}</a></li>`)}</ul></nav></div><!-- Información de contacto --><address class="footer__info" data-animate-element><ul class="footer__list">${footer_default.contactInfo.map((info) => renderTemplate`<li class="footer__item">${info.url ? renderTemplate`<a${addAttribute(info.url, "href")}${addAttribute(`footer__link ${info.isBold ? "footer__link--bold" : ""}`, "class")}${addAttribute(info.formTrigger || void 0, "data-form-trigger")}>${info.label}</a>` : renderTemplate`<span${addAttribute(`footer__text ${info.isBold ? "footer__text--bold" : ""}`, "class")}>${info.label}</span>`}</li>`)}</ul></address></div></footer>`;
}, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Footer/Footer.astro", void 0);
var forms_default = {
	formContacto: {
		"title": {
			"regular": "¿TU MARCA TIENE OBJETIVOS CLAROS Y GANAS DE TRANSFORMARSE?",
			"bold": "HABLEMOS."
		},
		"subtitle": "Déjanos tus datos",
		"fields": [
			{
				"id": "c-nombre",
				"name": "nombre",
				"label": "Nombre",
				"type": "text"
			},
			{
				"id": "c-correo",
				"name": "correo",
				"label": "Correo electrónico",
				"type": "email"
			},
			{
				"id": "c-telefono",
				"name": "telefono",
				"label": "Teléfono",
				"type": "tel"
			},
			{
				"id": "c-mensaje",
				"name": "mensaje",
				"label": "Mensaje",
				"type": "text"
			}
		],
		"buttons": {
			"submit": "ENVIAR MENSAJE",
			"success": "MENSAJE ENVIADO"
		}
	},
	formTrabajo: {
		"title": {
			"bold": "THINK BIG.",
			"regular": " STAY HUNGRY.",
			"bold2": "MAKE IT HAPPEN."
		},
		"subtitle": "Déjanos tus datos",
		"fields": [
			{
				"id": "t-nombre",
				"name": "nombre",
				"label": "Nombre",
				"type": "text"
			},
			{
				"id": "t-correo",
				"name": "correo",
				"label": "Correo electrónico",
				"type": "email"
			},
			{
				"id": "t-telefono",
				"name": "telefono",
				"label": "Teléfono",
				"type": "tel"
			},
			{
				"id": "t-mensaje",
				"name": "mensaje",
				"label": "Mensaje",
				"type": "text"
			}
		],
		"uploadLabel": "Adjunta tu HV",
		"buttons": {
			"submit": "ENVIAR MENSAJE",
			"success": "MENSAJE ENVIADO"
		}
	}
};
//#endregion
//#region src/components/Forms/Forms.astro
var $$Forms = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="forms-section" id="contacto" data-animate-section><!-- ============================================== --><!-- FORMULARIO 1: CONTACTO                         --><!-- ============================================== --><div class="forms-section__wrapper is-active" id="wrapper-contacto"><div class="forms-section__content"><header class="forms-section__header" data-animate-element><h2 class="forms-section__title"><span class="forms-section__title-regular">${forms_default.formContacto.title.regular}</span><span class="forms-section__title-bold">${forms_default.formContacto.title.bold}</span></h2><p class="forms-section__subtitle">${forms_default.formContacto.subtitle}</p></header><form class="form" id="form-contacto" novalidate><!-- CAMPOS OCULTOS DE SEGURIDAD E IDENTIFICACIÓN --><input type="hidden" name="formType" value="contacto"><!-- Honeypot: Se agrega aria-hidden para que los lectores de pantalla lo ignoren y no afecte accesibilidad --><input type="text" name="bot_check" style="display: none;" tabindex="-1" autocomplete="off" aria-hidden="true">${forms_default.formContacto.fields.map((field) => renderTemplate`<div class="form__group"><label${addAttribute(field.id, "for")} class="form__label">${field.label}</label><input${addAttribute(field.type, "type")}${addAttribute(field.id, "id")}${addAttribute(field.name, "name")} class="form__input" required><span class="form__error"${addAttribute(field.id, "data-error-for")}></span></div>`)}<div class="form__actions"><button type="submit" class="form__btn form__btn--submit" data-btn="submit">${forms_default.formContacto.buttons.submit}</button><button type="button" class="form__btn form__btn--success is-hidden" data-btn="success">${forms_default.formContacto.buttons.success}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle data-check-circle cx="12" cy="12" r="10"></circle><path data-check-path d="M8 12l3 3 6-6"></path></svg></button></div></form></div></div><!-- ============================================== --><!-- FORMULARIO 2: TRABAJA CON NOSOTROS             --><!-- ============================================== --><div class="forms-section__wrapper" id="wrapper-trabaja"><div class="forms-section__content"><header class="forms-section__header"><h2 class="forms-section__title"><span class="forms-section__title-bold">${forms_default.formTrabajo.title.bold}</span><span class="forms-section__title-regular">${forms_default.formTrabajo.title.regular}</span><span class="forms-section__title-bold">${forms_default.formTrabajo.title.bold2}</span></h2><p class="forms-section__subtitle">${forms_default.formTrabajo.subtitle}</p></header><form class="form" id="form-trabaja-con-nosotros" novalidate><input type="hidden" name="formType" value="trabaja"><input type="text" name="bot_check" style="display: none;" tabindex="-1" autocomplete="off" aria-hidden="true">${forms_default.formTrabajo.fields.map((field) => renderTemplate`<div class="form__group"><label${addAttribute(field.id, "for")} class="form__label">${field.label}</label><input${addAttribute(field.type, "type")}${addAttribute(field.id, "id")}${addAttribute(field.name, "name")} class="form__input" required><span class="form__error"${addAttribute(field.id, "data-error-for")}></span></div>`)}<div class="form__group form__group--file"><label for="t-archivo" class="form__label form__label--file">${forms_default.formTrabajo.uploadLabel}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg></label><input type="file" id="t-archivo" name="archivo" class="form__input-file" accept=".pdf,.doc,.docx" required><span class="form__error" data-error-for="t-archivo"></span></div><div class="form__actions"><button type="submit" class="form__btn form__btn--submit" data-btn="submit">${forms_default.formTrabajo.buttons.submit}</button><button type="button" class="form__btn form__btn--success is-hidden" data-btn="success">${forms_default.formTrabajo.buttons.success}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle data-check-circle cx="12" cy="12" r="10"></circle><path data-check-path d="M8 12l3 3 6-6"></path></svg></button></div></form></div></div></section>${renderScript($$result, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Forms/Forms.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Forms/Forms.astro", void 0);
var header_default = {
	tagline: "AGENCIA CREATIVA DIGITAL",
	links: [
		{
			"label": "NOSOTROS",
			"url": "#nosotros"
		},
		{
			"label": "WHAT'S YOUR MOOD",
			"url": "#timeline"
		},
		{
			"label": "TRABAJOS",
			"url": "#trabajos"
		},
		{
			"label": "MARCAS",
			"url": "#marcas"
		},
		{
			"label": "CONTACTO",
			"url": "#contacto"
		},
		{
			"label": "MOODERS",
			"url": "#cta"
		}
	],
	languages: [{
		"code": "es",
		"label": "Es",
		"active": true
	}, {
		"code": "in",
		"label": "In",
		"active": false
	}]
};
//#endregion
//#region src/components/Header/Header.astro
var $$Header = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<header class="header" data-header><div class="header__container"><!-- Logo --><a href="/" class="header__brand" aria-label="Volver al inicio"><img src="/logo_header.png" alt="Mood" class="header__logo"></a><!-- Lema --><p class="header__tagline">${header_default.tagline}</p><!-- Botón Hamburger --><button class="header__toggle" data-menu-toggle aria-label="Abrir menú" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="header__icon" data-menu-icon><path d="M0 0h24v24H0z" fill="none"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8.5h16m-16 7h16"></path></svg></button></div><!-- Menú Desplegable --><nav class="header__menu" data-menu aria-hidden="true"><div class="header__menu-inner"><!-- Enlaces de navegación --><ul class="header__nav">${header_default.links.map((link) => renderTemplate`<li class="header__nav-item" data-nav-item><a${addAttribute(link.url, "href")} class="header__nav-link" data-nav-link>${link.label}</a></li>`)}</ul><!-- Selector de Idioma --><div class="header__lang" data-lang-selector><!-- Elemento de fondo: Burbuja líquida --><div class="header__lang-bubble" data-lang-bubble></div>${header_default.languages.map((lang) => renderTemplate`<button${addAttribute(`header__lang-btn ${lang.active ? "is-active" : ""}`, "class")} data-lang-btn>${lang.label}</button>`)}</div></div></nav></header>${renderScript($$result, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Header/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Header/Header.astro", void 0);
var hero_default = {
	topText: [
		"CUANDO",
		"MUEVE",
		"EL NEGOCIO."
	],
	bottomText: ["UNA IDEA", "SOLO VALE"]
};
//#endregion
//#region src/components/Hero/Hero.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="hero" aria-label="Introducción Principal" data-animate-section><!-- 1. Video Background --><video class="hero__video" autoplay muted loop playsinline><source src="/fondo_hero.mp4" type="video/mp4">Tu navegador no soporta la etiqueta de video.</video><!-- 2. Overlay sutil para garantizar legibilidad del texto blanco --><div class="hero__overlay"></div><!-- 3. Contenedor de contenido --><div class="hero__content"><!-- SVG Línea Curva (Responsive) 
         Utilizamos preserveAspectRatio="none" para que se estire con la pantalla, 
         y vector-effect en el CSS/Path para no deformar el grosor de la línea. --><svg class="hero__line" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true" data-animate-element><path d="M 750, 420 C 750, 800 600, 820 400, 820" fill="none" stroke="#FFFFFF" stroke-width="2" vector-effect="non-scaling-stroke"></path></svg><!-- Texto Superior --><h1 class="hero__title hero__title--top">${hero_default.topText.map((line, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span data-animate-element style="display:inline-block">${line}</span>${index < hero_default.topText.length - 1 && renderTemplate`<br>`}` })}`)}</h1><!-- Texto Inferior --><h2 class="hero__title hero__title--bottom">${hero_default.bottomText.map((line, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span data-animate-element style="display:inline-block">${line}</span>${index < hero_default.bottomText.length - 1 && renderTemplate`<br>`}` })}`)}</h2></div></section>`;
}, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Hero/Hero.astro", void 0);
var stats_default = {
	items: [
		{
			"prefix": "+",
			"target": 15,
			"suffix": "",
			"label": "AÑOS"
		},
		{
			"prefix": "",
			"target": 3,
			"suffix": " PAÍSES",
			"label": "PER / COL / CAM"
		},
		{
			"prefix": "",
			"target": 150,
			"suffix": "",
			"label": "PROFESIONALES"
		},
		{
			"prefix": "",
			"target": 45,
			"suffix": "+",
			"label": "CLIENTES"
		},
		{
			"prefix": "",
			"target": 13,
			"suffix": "",
			"label": "PREMIOS"
		}
	],
	paragraph: "<strong>Somos el socio que transforma creatividad y estrategia en resultados reales.</strong> Leemos el negocio detrás de cada marca, sus objetivos, sus números y sus KPIs antes de crear. Con esa lectura desarrollamos plataformas de marca, campañas, contenidos y ecosistemas que responden a objetivos concretos, con resultados que se miden, se optimizan y se sostienen en el tiempo."
};
//#endregion
//#region src/components/Stats/Stats.astro
var $$Stats = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="stats" aria-label="Estadísticas de la agencia" id="nosotros" data-animate-section><div class="stats__container"><div class="stats__grid">${stats_default.items.map((item, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="stats__item" data-animate-element><div class="stats__value-wrapper">${item.prefix && renderTemplate`<span class="stats__prefix">${item.prefix}</span>`}<!-- El contador animado por GSAP --><span class="stats__value" data-counter${addAttribute(item.target, "data-target")}>0</span>${item.suffix && renderTemplate`<span class="stats__suffix">${item.suffix}</span>`}</div><p class="stats__label">${item.label}</p></div><!-- Línea divisoria como div independiente (Estructura Figma) -->${index < stats_default.items.length - 1 && renderTemplate`<div${addAttribute(`stats__divider ${index === 2 ? "stats__divider--desktop-only" : ""}`, "class")}></div>`}<!-- Salto de línea forzado en Mobile para asegurar 3 elementos arriba y 2 abajo -->${index === 2 && renderTemplate`<div class="stats__break"></div>`}` })}`)}</div><p class="stats__paragraph" data-animate-element>${unescapeHTML(stats_default.paragraph)}</p></div></section>${renderScript($$result, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Stats/Stats.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Stats/Stats.astro", void 0);
var timeline_default = {
	intro: {
		"topText": "No todas las marcas están en el mismo lugar. Algunas están naciendo. Otras están creciendo.<strong> Otras están redefiniendo lo que serán mañana.</strong>",
		"bottomText": "<strong>LEER ESE MOOD</strong> ES LEER EL NEGOCIO Y ENTENDERLO <strong>LO TRANSFORMA TODO.</strong>"
	},
	items: [
		{
			"number": "01",
			"title": "LAUNCH MOOD",
			"description": "Tu marca nació y está lista para salir al mundo. Construimos contigo la plataforma de marca que le da dirección desde el día uno: estrategia y branding pensados para que llegue al mercado con un rumbo claro, no solo con un logo."
		},
		{
			"number": "02",
			"title": "VISIBILITY MOOD",
			"description": "Necesitas llamar la atención y quedarte en la mente de las personas. Creamos ideas con dirección: creatividad diseñada para hacer que tu marca sea imposible de ignorar y que esa atención se convierta en valor para el negocio."
		},
		{
			"number": "03",
			"title": "GROWTH MOOD",
			"description": "Quieres acelerar el crecimiento de tu marca. Nuestro equipo de estrategia y performance lee las oportunidades detrás de tus números y las transforma en crecimiento medible."
		},
		{
			"number": "04",
			"title": "CONNECTION MOOD",
			"description": "Buscas que las personas hablen de tu marca. Conectamos creatividad y creadores para generar conversaciones con afinidad y relevancia cultural, con un objetivo claro: que esa conversación mueva el negocio."
		},
		{
			"number": "05",
			"title": "EVOLUTION MOOD",
			"description": "Quieres transformar la experiencia de quienes interactúan con tu marca. Performance, pauta y UX trabajando juntos para que cada interacción entre personas y marca se traduzca en resultados que puedes medir."
		},
		{
			"number": "06",
			"title": "CREATOR MOOD",
			"description": "Buscas que las personas creen más en tu marca. Nuestro Hub de Creadores conecta tu marca con las voces y comunidades correctas para construir influencia real y credibilidad que se sostiene en el tiempo."
		},
		{
			"number": "07",
			"title": "BUILD MOOD",
			"description": "Tu marca necesita infraestructura digital para operar y vender. Diseñamos y desarrollamos sitios, plataformas y ecosistemas web construidos desde la estrategia: pensados para convertir visitas en clientes y soportar el crecimiento de tu negocio."
		},
		{
			"number": "08",
			"title": "AI MOOD",
			"description": "Tu objetivo es multiplicar tus capacidades. Producimos con inteligencia artificial: videos y contenido de calidad broadcast con presupuestos mucho más ajustados y tiempos de producción más cortos, sin afectar el resultado final. Más producción, la misma exigencia creativa, mejores números para tu negocio."
		}
	]
};
//#endregion
//#region src/components/Timeline/TimelineItem.astro
createAstro("https://astro.build");
var $$TimelineItem = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TimelineItem;
	const { number, title, description, align, context } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<article${addAttribute(`timeline-item timeline-item--${context} timeline-item--${context}-${align}`, "class")}${addAttribute(context, "data-timeline-item")}><div class="timeline-item__circuit"><div class="timeline-item__circuit-node" data-circuit-node></div></div><div class="timeline-item__content-wrapper"><div class="timeline-item__content"><span class="timeline-item__number">${number}</span><h3 class="timeline-item__title">${title}</h3><p class="timeline-item__description">${description}</p></div></div></article>`;
}, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Timeline/TimelineItem.astro", void 0);
//#endregion
//#region src/components/Timeline/Timeline.astro
var $$Timeline = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="timeline" id="timeline"><!-- ======================================================= --><!-- VERSIÓN MOBILE / TABLET (< 1024px)                      --><!-- ======================================================= --><div class="timeline__mobile-only"><div class="timeline-mobile__sticky-scene"><div class="timeline__grid-bg"></div><div class="timeline__grid-bg2"></div><div class="timeline-mobile__intro-texts" data-intro-text="mobile"><p class="timeline-mobile__intro-text timeline-mobile__intro-text--top">${unescapeHTML(timeline_default.intro.topText)}</p><p class="timeline-mobile__intro-text timeline-mobile__intro-text--bottom">${unescapeHTML(timeline_default.intro.bottomText)}</p></div><div class="timeline-mobile__mood-letters" data-mood-block="mobile"><img src="/timeline/M.webp" alt="M" class="timeline-mobile__letter"><img src="/timeline/O.webp" alt="O" class="timeline-mobile__letter"><img src="/timeline/O.webp" alt="O" class="timeline-mobile__letter"><img src="/timeline/D.webp" alt="D" class="timeline-mobile__letter"></div><div class="timeline-mobile__figures"><img src="/timeline/figura_1.webp" alt="" class="timeline-mobile__figure timeline-mobile__figure--1" data-figure="mobile"><img src="/timeline/figura_2.webp" alt="" class="timeline-mobile__figure timeline-mobile__figure--2" data-figure="mobile"><img src="/timeline/figura_3.webp" alt="" class="timeline-mobile__figure timeline-mobile__figure--3" data-figure="mobile"></div><img src="/timeline/letra_timeline.webp" alt="What's your" class="timeline-mobile__whats-your"></div><div class="timeline-mobile__scroll-track"><div class="timeline-mobile__content"><div class="timeline-mobile__center-line"><div class="timeline-mobile__center-line-progress" data-line-progress="mobile"></div></div><div class="timeline-mobile__items">${timeline_default.items.map((item, index) => renderTemplate`${renderComponent($$result, "TimelineItem", $$TimelineItem, {
		"number": item.number,
		"title": item.title,
		"description": item.description,
		"align": index % 2 === 0 ? "left" : "right",
		"context": "mobile"
	})}`)}</div></div><div class="timeline-mobile__spacer" data-outro-spacer="mobile"></div></div></div><!-- ======================================================= --><!-- VERSIÓN DESKTOP (>= 1024px)                             --><!-- ======================================================= --><div class="timeline__desktop-only"><div class="timeline-desktop__sticky-scene"><div class="timeline__grid-bg"></div><div class="timeline__grid-bg2"></div><div class="timeline-desktop__intro-texts" data-intro-text="desktop"><p class="timeline-desktop__intro-text timeline-desktop__intro-text--top">${unescapeHTML(timeline_default.intro.topText)}</p><p class="timeline-desktop__intro-text timeline-desktop__intro-text--bottom">${unescapeHTML(timeline_default.intro.bottomText)}</p></div><div class="timeline-desktop__mood-letters" data-mood-block="desktop"><img src="/timeline/M.webp" alt="M" class="timeline-desktop__letter"><img src="/timeline/O.webp" alt="O" class="timeline-desktop__letter"><img src="/timeline/O.webp" alt="O" class="timeline-desktop__letter"><img src="/timeline/D.webp" alt="D" class="timeline-desktop__letter"></div><div class="timeline-desktop__figures"><img src="/timeline/figura_1.webp" alt="" class="timeline-desktop__figure timeline-desktop__figure--1" data-figure="desktop"><img src="/timeline/figura_2.webp" alt="" class="timeline-desktop__figure timeline-desktop__figure--2" data-figure="desktop"><img src="/timeline/figura_3.webp" alt="" class="timeline-desktop__figure timeline-desktop__figure--3" data-figure="desktop"></div><img src="/timeline/letra_timeline2.webp" alt="What's your" class="timeline-desktop__whats-your"></div><!-- ELIMINADOS: Los spacers (que provocaban desplazamiento vertical) --><div class="timeline-desktop__scroll-track"><div class="timeline-desktop__content"><div class="timeline-desktop__items"><div class="timeline-desktop__center-line"><div class="timeline-desktop__center-line-progress" data-line-progress="desktop"></div></div>${timeline_default.items.map((item, index) => renderTemplate`${renderComponent($$result, "TimelineItem", $$TimelineItem, {
		"number": item.number,
		"title": item.title,
		"description": item.description,
		"align": index % 2 === 0 ? "left" : "right",
		"context": "desktop"
	})}`)}</div></div></div></div></section>${renderScript($$result, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Timeline/Timeline.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/Timeline/Timeline.astro", void 0);
//#endregion
//#region src/components/CustomCursor/CustomCursor.astro
var $$CustomCursor = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<!-- 1. Contenedor de Posición (Nunca se escala ni deforma) --><div class="custom-cursor-wrapper" data-cursor-wrapper><!-- 2. Elemento Visual (Se escala y reacciona a los clics) --><div class="custom-cursor-visual" data-cursor-visual></div></div><!-- 3. Object Pool de Ripples (Independientes del cursor) --><div data-cursor-ripples><div class="custom-cursor-ripple" data-ripple></div><div class="custom-cursor-ripple" data-ripple></div><div class="custom-cursor-ripple" data-ripple></div><div class="custom-cursor-ripple" data-ripple></div><div class="custom-cursor-ripple" data-ripple></div></div>${renderScript($$result, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/CustomCursor/CustomCursor.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/CustomCursor/CustomCursor.astro", void 0);
//#endregion
//#region src/components/WhatsAppButton/WhatsAppButton.astro
var $$WhatsAppButton = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="whatsapp-container" data-wa-container><!-- Burbuja de mensaje flotante --><div class="whatsapp-container__tooltip" data-wa-tooltip aria-hidden="true"><span data-wa-message>¿Quieres más información? ¡Contáctanos!</span></div><!-- Botón Principal --><a${addAttribute(`https://wa.me/51999999999`, "href")} target="_blank" rel="noopener noreferrer" class="whatsapp-container__btn" aria-label="Contactar por WhatsApp" data-wa-btn><span class="whatsapp-container__icon-wrapper" data-wa-icon><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true"><!-- Agrupamos para aplicar el mismo grosor y estilo a ambos elementos --><g stroke="currentColor" stroke-linejoin="round" stroke-width="1"><!-- 1. Burbuja exterior estática --><path fill="none" d="M2.184 21.331a.4.4 0 0 0 .487.494l4.607-1.204a10 10 0 0 0 4.76 1.207h.004c5.486 0 9.958-4.446 9.958-9.912a9.83 9.83 0 0 0-2.914-7.011A9.92 9.92 0 0 0 12.042 2c-5.486 0-9.958 4.446-9.958 9.911c0 1.739.458 3.447 1.33 4.954z"></path><!-- 2. Teléfono central aislado para animación --><path data-wa-phone fill="currentColor" d="M8.886 7.17c.183.005.386.015.579.443c.128.285.343.81.519 1.238c.137.333.249.607.277.663c.065.128.104.275.02.448l-.028.058c-.068.14-.116.24-.23.37l-.143.17c-.085.104-.17.206-.242.278c-.129.128-.262.266-.114.522s.668 1.098 1.435 1.777a6.6 6.6 0 0 0 1.903 1.2q.105.045.17.076c.257.128.41.108.558-.064c.149-.173.643-.749.817-1.005c.168-.256.34-.216.578-.128c.238.089 1.504.71 1.761.837l.143.07c.179.085.3.144.352.23c.064.109.064.62-.148 1.222c-.218.6-1.267 1.176-1.742 1.22l-.135.016c-.436.052-.988.12-2.956-.655c-2.426-.954-4.027-3.32-4.35-3.799l-.053-.076l-.005-.008c-.148-.197-1.049-1.402-1.049-2.646c0-1.19.587-1.81.854-2.092l.047-.05a.95.95 0 0 1 .687-.32c.173 0 .347 0 .495.005Z"></path></g></svg></span></a></div>${renderScript($$result, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/WhatsAppButton/WhatsAppButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/tecno/Downloads/MoodCo-Web/src/components/WhatsAppButton/WhatsAppButton.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title, description = "Agencia creativa que potencia cada idea y cada proyecto en el entorno digital para que su marca logre mayores alcances." } = Astro.props;
	return renderTemplate`<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/Logo_Mood.ico"><title>${title}</title>${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "WhatsAppButton", $$WhatsAppButton, {})}${renderComponent($$result, "CustomCursor", $$CustomCursor, {})}${renderScript($$result, "C:/Users/tecno/Downloads/MoodCo-Web/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/Users/tecno/Downloads/MoodCo-Web/src/layouts/Layout.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Agencia Creativa Digital - MOOD",
		"description": "Agencia creativa que potencia cada idea y cada proyecto en el entorno digital para que su marca logre mayores alcances.",
		"data-astro-cid-lcdefpme": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="main-content" data-astro-cid-lcdefpme>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "Hero", $$Hero, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "Stats", $$Stats, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "Timeline", $$Timeline, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "Cases", $$Cases, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "Brands", $$Brands, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "Forms", $$Forms, { "data-astro-cid-lcdefpme": true })}${renderComponent($$result, "Cta", $$Cta, { "data-astro-cid-lcdefpme": true })}</main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-lcdefpme": true })}` })}`;
}, "C:/Users/tecno/Downloads/MoodCo-Web/src/pages/index.astro", void 0);
var $$file = "C:/Users/tecno/Downloads/MoodCo-Web/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
