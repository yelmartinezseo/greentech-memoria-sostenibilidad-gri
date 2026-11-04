/*
 * Generador de Memoria de Sostenibilidad GRI
 * © 2026 Yel Martínez — https://yel-martinez-portfolio.com
 * SPDX-License-Identifier: GPL-2.0-or-later
 * Software libre, sin garantía de ningún tipo. Licencia: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * Herramienta independiente y orientativa; no es oficial ni sustituye asesoramiento profesional.
 */
/**
 * Generador de Memoria de Sostenibilidad GRI
 * Scoped under MATRIZ namespace to avoid global conflicts.
 */
(function() {
"use strict";

var $wrap = document.getElementById('matriz-wrap');
if (!$wrap) return;

var defaultLang = $wrap.getAttribute('data-default-lang') || 'es';

// ═══════════════════════════════════════════
// i18n SYSTEM
// ═══════════════════════════════════════════
let lang = 'es';

const I18N = {
es: {
  "hero_tag":"Herramienta gratuita","hero_title":"Genera tu <em>Memoria de Sostenibilidad</em> en minutos","hero_desc":"Sin excels eternos. Sin consultoras. Completa los datos de tu empresa y obten un informe estructurado listo para maquetar.","hero_s1":"Rellena tu perfil de empresa","hero_s2":"Indica tus indicadores ESG","hero_s3":"Descarga o imprime el informe","p1_title":"Perfil de la empresa","p1_sub":"Datos basicos de identificacion","f_nombre":"Nombre de la empresa","f_nombre_ph":"Ej: Empresa Sostenible S.L.","f_anio":"Ano del informe","f_sector":"Sector / Industria","f_select":"-- Selecciona --","f_tamano":"Tamano de la empresa","f_empleados":"N. de empleados","f_pais":"Pais / Region principal","f_pais_ph":"Ej: Espana - Valencia","f_web":"Pagina web o contacto","f_desc":"Descripcion breve de la actividad","f_desc_hint":"(1-2 frases)","f_desc_ph":"A que se dedica tu empresa? Cual es tu propuesta de valor?","p2_title":"Gobernanza y etica empresarial","p2_sub":"Estructura, transparencia y buen gobierno","gov_codigo":"Dispone de un Codigo de Conducta o Etica?","gov_anti":"Politica anticorrupcion y antisoborno","gov_canal":"Canal de denuncias (whistleblowing)","gov_marcos":"Marcos de reporte que sigue","gov_marcos_hint":"(selecciona todos los aplicables)","gov_compromisos":"Compromisos y certificaciones destacadas","gov_compromisos_ph":"Ej: Miembros de Pacto Mundial, certificacion ISO 14001...","gc_published":"Si, publicado","gc_internal":"Si, uso interno","gc_developing":"En desarrollo","gc_no":"No","ga_yes":"Si, implementada","ga_process":"En proceso","ga_no":"No aplica","gca_yes":"Si, operativo","gca_implementing":"En implementacion","gca_no":"No","p3_title":"Impacto medioambiental","p3_sub":"Indicadores de la dimension E (Environmental)","env_energia":"Consumo energetico total","env_energia_sub":"Electricidad + gas + otros combustibles","env_renovable":"% Energia renovable","env_renovable_sub":"Sobre el total consumido","env_emisiones":"Emisiones de GEI (CO2 eq.)","env_emisiones_sub":"Alcance 1 y 2 (directo + electricidad)","env_agua":"Consumo de agua","env_agua_sub":"Total anual en instalaciones propias","env_residuos":"Residuos generados","env_residuos_sub":"Total incluyendo reciclados y no reciclados","env_reciclaje":"% Residuos reciclados o valorizados","env_iniciativas":"Principales iniciativas y compromisos ambientales","env_iniciativas_ph":"Ej: Plan de reduccion de emisiones 2030, transicion a flota electrica...","env_netzero":"Tiene plan de accion climatica o objetivos net-zero?","nz_yes":"Si, definido y publico","nz_developing":"En elaboracion","nz_no":"No aun","p4_title":"Dimension Social","p4_sub":"Personas, diversidad, comunidad y cadena de valor","soc_plantilla":"Plantilla total (media anual)","soc_mujeres":"% Mujeres en plantilla","soc_mujeres_dir":"% Mujeres en puestos directivos","soc_rotacion":"Indice de rotacion de personal","soc_formacion":"Horas de formacion por empleado/ano","soc_accidentes":"Accidentes laborales registrados","soc_absentismo":"Absentismo laboral","soc_politicas":"Politicas y beneficios sociales destacados","soc_politicas_ph":"Ej: plan de igualdad, teletrabajo, seguro medico...","soc_comunidad":"Accion social y comunidad","soc_comunidad_ph":"Ej: colaboracion con ONGs locales, programa de voluntariado...","p5_title":"Dimension Economica","p5_sub":"Valor generado, inversion y grupos de interes","eco_ingresos":"Facturacion / Ingresos totales","eco_ingresos_sub":"Puedes indicar un rango","eco_idi":"Inversion en I+D+i","eco_formacion_inv":"Inversion en formacion y desarrollo","eco_esg_inv":"Inversion en sostenibilidad / ESG","eco_proveedores":"N. de proveedores principales","eco_prov_local":"% Proveedores locales o nacionales","eco_logros":"Logros economicos y de impacto destacados del ano","eco_logros_ph":"Ej: apertura de nuevos mercados, creacion de empleo...","eco_retos":"Retos y perspectivas para el proximo periodo","eco_retos_ph":"Ej: digitalizacion, transicion energetica...","p6_title":"Como quieres tu informe?","p6_sub":"Elige el formato de salida","fmt_pdf":"PDF descargable","fmt_pdf_desc":"Genera un PDF listo para compartir o archivar.","fmt_print":"Imprimir / HTML","fmt_print_desc":"Abre la vista de impresion del navegador.","fmt_text":"Texto para Canva / Word","fmt_text_desc":"Texto estructurado para copiar y maquetar.","fmt_custom":"Personalizacion avanzada","fmt_custom_desc":"Informe a medida con ajustes especificos.","fmt_badge":"contacto directo","btn_prev":"Anterior","btn_next_gov":"Siguiente -- Gobernanza","btn_next_env":"Siguiente -- Medio Ambiente","btn_next_soc":"Siguiente -- Social","btn_next_eco":"Siguiente -- Economica","btn_next_gen":"Siguiente -- Generar informe","btn_generate":"Generar mi Memoria de Sostenibilidad","btn_pdf":"Descargar PDF","btn_print":"Imprimir","btn_copy":"Copiar texto","btn_restart":"Volver a empezar","step_of":"de","step":"Paso","steps":["Empresa","Gobernanza","Ambiental","Social","Economica","Generar"],"sectors":["Agroalimentario","Construccion e inmobiliario","Consultoria y servicios profesionales","Educacion y formacion","Energia y utilities","Hosteleria y turismo","Industria manufacturera","Logistica y transporte","Retail y comercio","Salud y bienestar","Tecnologia y software","Entidad publica / ONG","Otro"],"sizes":["Microempresa (1-9 empleados)","Pequena empresa (10-49 empleados)","Mediana empresa (50-249 empleados)","Gran empresa (250+ empleados)"],"toast_ready":"Tu Memoria de Sostenibilidad esta lista!","toast_copied":"Texto copiado al portapapeles","toast_print":"Abriendo dialogo de impresion...","rpt_header_tag":"MEMORIA DE SOSTENIBILIDAD","rpt_sector":"Sector","rpt_size":"Tamano","rpt_date":"Generado","rpt_s1":"1. Presentacion de la organizacion","rpt_s2":"2. Gobernanza y etica","rpt_s3":"3. Desempeno ambiental (E)","rpt_s4":"4. Desempeno social (S)","rpt_s5":"5. Desempeno economico (G)","rpt_country":"Pais / Region","rpt_code":"Codigo de Conducta","rpt_anticorr":"Politica anticorrupcion","rpt_channel":"Canal de denuncias","rpt_frameworks":"Marcos de reporte","rpt_climate":"Plan climatico / net-zero","rpt_revenue":"Facturacion / Ingresos","rpt_rdi":"Inversion I+D+i","rpt_training_inv":"Inversion formacion","rpt_esg_inv":"Inversion ESG","rpt_suppliers":"Proveedores principales","rpt_local_sup":"% Proveedores locales","rpt_custom":"Personalizacion avanzada","rpt_custom_text":"Has seleccionado la opcion de personalizacion avanzada. Nuestro equipo se pondra en contacto contigo.","rpt_text_title":"Texto listo para Canva / Word","rpt_report":"Informe de Sostenibilidad","u_mwh":"MWh/ano","u_pct":"%","u_ton":"ton CO2eq","u_m3":"m3/ano","u_ton_y":"ton/ano","u_persons":"personas","u_hours":"horas","u_num":"n.","u_eur":"EUR / rango","u_eur2":"EUR"
},
va: {
  "hero_tag":"Ferramenta gratuita","hero_title":"Genera la teua <em>Memoria de Sostenibilitat</em> en minuts","hero_desc":"Sense excels eterns. Sense consultores. Completa les dades de la teua empresa i obtin un informe estructurat.","hero_s1":"Emplena el teu perfil d'empresa","hero_s2":"Indica els teus indicadors ESG","hero_s3":"Descarrega o imprimeix l'informe","p1_title":"Perfil de l'empresa","p1_sub":"Dades basiques d'identificacio","f_nombre":"Nom de l'empresa","f_nombre_ph":"Ex: Empresa Sostenible S.L.","f_anio":"Any de l'informe","f_sector":"Sector / Industria","f_select":"-- Selecciona --","f_tamano":"Tamany de l'empresa","f_empleados":"N. d'empleats","f_pais":"Pais / Regio principal","f_pais_ph":"Ex: Espanya - Valencia","f_web":"Pagina web o contacte","f_desc":"Descripcio breu de l'activitat","f_desc_hint":"(1-2 frases)","f_desc_ph":"A que es dedica la teua empresa?","p2_title":"Governanca i etica empresarial","p2_sub":"Estructura, transparencia i bon govern","gov_codigo":"Disposa d'un Codi de Conducta o Etica?","gov_anti":"Politica anticorrupcio i antisuborn","gov_canal":"Canal de denuncies (whistleblowing)","gov_marcos":"Marcs de reporting que segueix","gov_marcos_hint":"(selecciona tots els aplicables)","gov_compromisos":"Compromisos i certificacions destacades","gov_compromisos_ph":"Ex: Membres de Pacte Mundial, certificacio ISO 14001...","gc_published":"Si, publicat","gc_internal":"Si, us intern","gc_developing":"En desenvolupament","gc_no":"No","ga_yes":"Si, implementada","ga_process":"En proces","ga_no":"No aplica","gca_yes":"Si, operatiu","gca_implementing":"En implementacio","gca_no":"No","p3_title":"Impacte mediambiental","p3_sub":"Indicadors de la dimensio E (Environmental)","env_energia":"Consum energetic total","env_energia_sub":"Electricitat + gas + altres combustibles","env_renovable":"% Energia renovable","env_renovable_sub":"Sobre el total consumit","env_emisiones":"Emissions de GEH (CO2 eq.)","env_emisiones_sub":"Abast 1 i 2 (directe + electricitat)","env_agua":"Consum d'aigua","env_agua_sub":"Total anual en instal.lacions propies","env_residuos":"Residus generats","env_residuos_sub":"Total incloent reciclats i no reciclats","env_reciclaje":"% Residus reciclats o valoritzats","env_iniciativas":"Principals iniciatives i compromisos ambientals","env_iniciativas_ph":"Ex: Pla de reduccio d'emissions 2030, transicio a flota electrica...","env_netzero":"Te pla d'accio climatica o objectius net-zero?","nz_yes":"Si, definit i public","nz_developing":"En elaboracio","nz_no":"No encara","p4_title":"Dimensio Social","p4_sub":"Persones, diversitat, comunitat i cadena de valor","soc_plantilla":"Plantilla total (mitja anual)","soc_mujeres":"% Dones en plantilla","soc_mujeres_dir":"% Dones en llocs directius","soc_rotacion":"Index de rotacio de personal","soc_formacion":"Hores de formacio per empleat/any","soc_accidentes":"Accidents laborals registrats","soc_absentismo":"Absentisme laboral","soc_politicas":"Politiques i beneficis socials destacats","soc_politicas_ph":"Ex: pla d'igualtat, teletreball, asseguranca medica...","soc_comunidad":"Accio social i comunitat","soc_comunidad_ph":"Ex: col.laboracio amb ONGs locals, programa de voluntariat...","p5_title":"Dimensio Economica","p5_sub":"Valor generat, inversio i grups d'interes","eco_ingresos":"Facturacio / Ingressos totals","eco_ingresos_sub":"Pots indicar un rang","eco_idi":"Inversio en I+D+i","eco_formacion_inv":"Inversio en formacio i desenvolupament","eco_esg_inv":"Inversio en sostenibilitat / ESG","eco_proveedores":"N. de proveidors principals","eco_prov_local":"% Proveidors locals o nacionals","eco_logros":"Fites economiques i d'impacte destacades de l'any","eco_logros_ph":"Ex: obertura de nous mercats, creacio d'ocupacio...","eco_retos":"Reptes i perspectives per al proxim periode","eco_retos_ph":"Ex: digitalitzacio, transicio energetica...","p6_title":"Com vols el teu informe?","p6_sub":"Tria el format de sortida","fmt_pdf":"PDF descarregable","fmt_pdf_desc":"Genera un PDF llest per compartir o arxivar.","fmt_print":"Imprimir / HTML","fmt_print_desc":"Obri la vista d'impressio del navegador.","fmt_text":"Text per a Canva / Word","fmt_text_desc":"Text estructurat per copiar i maquetar.","fmt_custom":"Personalitzacio avancada","fmt_custom_desc":"Informe a mida amb ajustos especifics.","fmt_badge":"contacte directe","btn_prev":"Anterior","btn_next_gov":"Seguent -- Governanca","btn_next_env":"Seguent -- Medi Ambient","btn_next_soc":"Seguent -- Social","btn_next_eco":"Seguent -- Economica","btn_next_gen":"Seguent -- Generar informe","btn_generate":"Generar la meua Memoria de Sostenibilitat","btn_pdf":"Descarregar PDF","btn_print":"Imprimir","btn_copy":"Copiar text","btn_restart":"Tornar a comencar","step_of":"de","step":"Pas","steps":["Empresa","Governanca","Ambiental","Social","Economica","Generar"],"sectors":["Agroalimentari","Construccio i immobiliari","Consultoria i serveis professionals","Educacio i formacio","Energia i utilities","Hostaleria i turisme","Industria manufacturera","Logistica i transport","Retail i comerc","Salut i benestar","Tecnologia i software","Entitat publica / ONG","Altre"],"sizes":["Microempresa (1-9 empleats)","Xicoteta empresa (10-49 empleats)","Mitjana empresa (50-249 empleats)","Gran empresa (250+ empleats)"],"toast_ready":"La teua Memoria de Sostenibilitat esta llesta!","toast_copied":"Text copiat al portapapers","toast_print":"Obrint dialeg d'impressio...","rpt_header_tag":"MEMORIA DE SOSTENIBILITAT","rpt_sector":"Sector","rpt_size":"Tamany","rpt_date":"Generat","rpt_s1":"1. Presentacio de l'organitzacio","rpt_s2":"2. Governanca i etica","rpt_s3":"3. Acompliment ambiental (E)","rpt_s4":"4. Acompliment social (S)","rpt_s5":"5. Acompliment economic (G)","rpt_country":"Pais / Regio","rpt_code":"Codi de Conducta","rpt_anticorr":"Politica anticorrupcio","rpt_channel":"Canal de denuncies","rpt_frameworks":"Marcs de reporting","rpt_climate":"Pla climatic / net-zero","rpt_revenue":"Facturacio / Ingressos","rpt_rdi":"Inversio I+D+i","rpt_training_inv":"Inversio formacio","rpt_esg_inv":"Inversio ESG","rpt_suppliers":"Proveidors principals","rpt_local_sup":"% Proveidors locals","rpt_custom":"Personalitzacio avancada","rpt_custom_text":"Has seleccionat l'opcio de personalitzacio avancada. El nostre equip es posara en contacte amb tu.","rpt_text_title":"Text llest per a Canva / Word","rpt_report":"Informe de Sostenibilitat","u_mwh":"MWh/any","u_pct":"%","u_ton":"ton CO2eq","u_m3":"m3/any","u_ton_y":"ton/any","u_persons":"persones","u_hours":"hores","u_num":"n.","u_eur":"EUR / rang","u_eur2":"EUR"
},
en: {
  "hero_tag":"Free tool","hero_title":"Generate your <em>Sustainability Report</em> in minutes","hero_desc":"No endless spreadsheets. No consultants. Fill in your company data and get a structured report ready to design.","hero_s1":"Fill in your company profile","hero_s2":"Enter your ESG indicators","hero_s3":"Download or print the report","p1_title":"Company profile","p1_sub":"Basic identification data","f_nombre":"Company name","f_nombre_ph":"E.g.: Sustainable Company Ltd.","f_anio":"Report year","f_sector":"Sector / Industry","f_select":"-- Select --","f_tamano":"Company size","f_empleados":"No. of employees","f_pais":"Country / Main region","f_pais_ph":"E.g.: Spain - Valencia","f_web":"Website or contact","f_desc":"Brief description of activities","f_desc_hint":"(1-2 sentences)","f_desc_ph":"What does your company do? What is your value proposition?","p2_title":"Governance and business ethics","p2_sub":"Structure, transparency and good governance","gov_codigo":"Does the company have a Code of Conduct or Ethics?","gov_anti":"Anti-corruption and anti-bribery policy","gov_canal":"Whistleblowing channel","gov_marcos":"Reporting frameworks followed","gov_marcos_hint":"(select all that apply)","gov_compromisos":"Key commitments and certifications","gov_compromisos_ph":"E.g.: Global Compact members, ISO 14001 certification...","gc_published":"Yes, published","gc_internal":"Yes, internal use","gc_developing":"In development","gc_no":"No","ga_yes":"Yes, implemented","ga_process":"In progress","ga_no":"Not applicable","gca_yes":"Yes, operational","gca_implementing":"Being implemented","gca_no":"No","p3_title":"Environmental impact","p3_sub":"E (Environmental) dimension indicators","env_energia":"Total energy consumption","env_energia_sub":"Electricity + gas + other fuels","env_renovable":"% Renewable energy","env_renovable_sub":"Of total consumed","env_emisiones":"GHG emissions (CO2 eq.)","env_emisiones_sub":"Scope 1 and 2 (direct + electricity)","env_agua":"Water consumption","env_agua_sub":"Annual total in own facilities","env_residuos":"Waste generated","env_residuos_sub":"Total including recycled and non-recycled","env_reciclaje":"% Waste recycled or recovered","env_iniciativas":"Main environmental initiatives and commitments","env_iniciativas_ph":"E.g.: 2030 emissions reduction plan, transition to electric fleet...","env_netzero":"Does the company have a climate action plan or net-zero targets?","nz_yes":"Yes, defined and public","nz_developing":"In preparation","nz_no":"Not yet","p4_title":"Social dimension","p4_sub":"People, diversity, community and value chain","soc_plantilla":"Total workforce (annual average)","soc_mujeres":"% Women in workforce","soc_mujeres_dir":"% Women in management positions","soc_rotacion":"Staff turnover rate","soc_formacion":"Training hours per employee/year","soc_accidentes":"Recorded workplace accidents","soc_absentismo":"Workplace absenteeism","soc_politicas":"Key social policies and benefits","soc_politicas_ph":"E.g.: equality plan, remote work, health insurance...","soc_comunidad":"Social action and community","soc_comunidad_ph":"E.g.: collaboration with local NGOs, volunteering programme...","p5_title":"Economic dimension","p5_sub":"Value generated, investment and stakeholders","eco_ingresos":"Revenue / Total income","eco_ingresos_sub":"You may indicate a range","eco_idi":"R&D investment","eco_formacion_inv":"Investment in training and development","eco_esg_inv":"Investment in sustainability / ESG","eco_proveedores":"No. of main suppliers","eco_prov_local":"% Local or national suppliers","eco_logros":"Key economic and impact achievements of the year","eco_logros_ph":"E.g.: new market entry, job creation...","eco_retos":"Challenges and outlook for the next period","eco_retos_ph":"E.g.: digitalisation, energy transition...","p6_title":"How do you want your report?","p6_sub":"Choose the output format","fmt_pdf":"Downloadable PDF","fmt_pdf_desc":"Generate a PDF ready to share or archive.","fmt_print":"Print / HTML","fmt_print_desc":"Opens the browser print dialog.","fmt_text":"Text for Canva / Word","fmt_text_desc":"Structured text to copy and lay out.","fmt_custom":"Advanced customisation","fmt_custom_desc":"Tailored report with specific adjustments.","fmt_badge":"direct contact","btn_prev":"Previous","btn_next_gov":"Next -- Governance","btn_next_env":"Next -- Environment","btn_next_soc":"Next -- Social","btn_next_eco":"Next -- Economic","btn_next_gen":"Next -- Generate report","btn_generate":"Generate my Sustainability Report","btn_pdf":"Download PDF","btn_print":"Print","btn_copy":"Copy text","btn_restart":"Start over","step_of":"of","step":"Step","steps":["Company","Governance","Environmental","Social","Economic","Generate"],"sectors":["Agri-food","Construction & real estate","Consulting & professional services","Education & training","Energy & utilities","Hospitality & tourism","Manufacturing","Logistics & transport","Retail & commerce","Health & wellness","Technology & software","Public entity / NGO","Other"],"sizes":["Micro-enterprise (1-9 employees)","Small enterprise (10-49 employees)","Medium enterprise (50-249 employees)","Large enterprise (250+ employees)"],"toast_ready":"Your Sustainability Report is ready!","toast_copied":"Text copied to clipboard","toast_print":"Opening print dialog...","rpt_header_tag":"SUSTAINABILITY REPORT","rpt_sector":"Sector","rpt_size":"Size","rpt_date":"Generated","rpt_s1":"1. Organisation overview","rpt_s2":"2. Governance and ethics","rpt_s3":"3. Environmental performance (E)","rpt_s4":"4. Social performance (S)","rpt_s5":"5. Economic performance (G)","rpt_country":"Country / Region","rpt_code":"Code of Conduct","rpt_anticorr":"Anti-corruption policy","rpt_channel":"Whistleblowing channel","rpt_frameworks":"Reporting frameworks","rpt_climate":"Climate plan / net-zero","rpt_revenue":"Revenue / Income","rpt_rdi":"R&D investment","rpt_training_inv":"Training investment","rpt_esg_inv":"ESG investment","rpt_suppliers":"Main suppliers","rpt_local_sup":"% Local suppliers","rpt_custom":"Advanced customisation","rpt_custom_text":"You selected the advanced customisation option. Our team will contact you.","rpt_text_title":"Text ready for Canva / Word","rpt_report":"Sustainability Report","u_mwh":"MWh/yr","u_pct":"%","u_ton":"ton CO2eq","u_m3":"m3/yr","u_ton_y":"ton/yr","u_persons":"persons","u_hours":"hours","u_num":"no.","u_eur":"EUR / range","u_eur2":"EUR"
}
};

function T(k){ return I18N[lang]?.[k] ?? I18N.es[k] ?? k; }

function setLang(l){
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.textContent.trim() === {es:'ES',va:'VAL',en:'EN'}[l]));
  applyI18n();
  buildDynamicContent();
  updateProgress();
}

function applyI18n(){
  document.querySelectorAll('[data-t]').forEach(el => {
    const k = el.dataset.t;
    const v = T(k);
    if (v) el.innerHTML = v;
  });
  document.querySelectorAll('[data-ph]').forEach(el => {
    const k = el.dataset.ph;
    const v = T(k);
    if (v) el.placeholder = v;
  });
}

// ═══════════════════════════════════════════
// DYNAMIC CONTENT BUILD
// ═══════════════════════════════════════════
function buildDynamicContent(){
  // Sectors
  const sec = document.getElementById('empresa_sector');
  const secVal = sec.value;
  sec.innerHTML = '<option value="">'+T('f_select')+'</option>' + T('sectors').map(s => '<option'+(s===secVal?' selected':'')+'>'+s+'</option>').join('');
  // Sizes
  const sz = document.getElementById('empresa_tamano');
  const szVal = sz.value;
  sz.innerHTML = '<option value="">'+T('f_select')+'</option>' + T('sizes').map(s => '<option'+(s===szVal?' selected':'')+'>'+s+'</option>').join('');

  // Gov radios
  buildRadios('rg-gov_codigo','gov_codigo',[ ['gc_published'],['gc_internal'],['gc_developing'],['gc_no'] ]);
  buildRadios('rg-gov_anti','gov_anti',[ ['ga_yes'],['ga_process'],['ga_no'] ]);
  buildRadios('rg-gov_canal','gov_canal',[ ['gca_yes'],['gca_implementing'],['gca_no'] ]);
  // Marcos checkboxes
  buildChecks('cg-marcos',['GRI','VSME (EFRAG)','ODS / Agenda 2030','Pacto Mundial ONU','ISO 26000',{key:'gc_no',val:'Ninguno'}]);

  // Env indicators
  buildIndicators('env-indicators',[
    {id:'env_energia',lbl:'env_energia',sub:'env_energia_sub',unit:'u_mwh'},
    {id:'env_renovable',lbl:'env_renovable',sub:'env_renovable_sub',unit:'u_pct',min:0,max:100},
    {id:'env_emisiones',lbl:'env_emisiones',sub:'env_emisiones_sub',unit:'u_ton'},
    {id:'env_agua',lbl:'env_agua',sub:'env_agua_sub',unit:'u_m3'},
    {id:'env_residuos',lbl:'env_residuos',sub:'env_residuos_sub',unit:'u_ton_y'},
    {id:'env_reciclaje',lbl:'env_reciclaje',sub:'',unit:'u_pct',min:0,max:100},
  ],[
    {type:'textarea',id:'env_iniciativas',lbl:'env_iniciativas',ph:'env_iniciativas_ph'},
    {type:'radio',name:'env_netzero',lbl:'env_netzero',opts:['nz_yes','nz_developing','nz_no']},
  ]);

  // Social indicators
  buildIndicators('soc-indicators',[
    {id:'soc_plantilla',lbl:'soc_plantilla',sub:'',unit:'u_persons'},
    {id:'soc_mujeres',lbl:'soc_mujeres',sub:'',unit:'u_pct',min:0,max:100},
    {id:'soc_mujeres_dir',lbl:'soc_mujeres_dir',sub:'',unit:'u_pct',min:0,max:100},
    {id:'soc_rotacion',lbl:'soc_rotacion',sub:'',unit:'u_pct',min:0,max:100},
    {id:'soc_formacion',lbl:'soc_formacion',sub:'',unit:'u_hours'},
    {id:'soc_accidentes',lbl:'soc_accidentes',sub:'',unit:'u_num'},
    {id:'soc_absentismo',lbl:'soc_absentismo',sub:'',unit:'u_pct'},
  ],[
    {type:'textarea',id:'soc_politicas',lbl:'soc_politicas',ph:'soc_politicas_ph'},
    {type:'textarea',id:'soc_comunidad',lbl:'soc_comunidad',ph:'soc_comunidad_ph'},
  ]);

  // Economic indicators
  buildIndicators('eco-indicators',[
    {id:'eco_ingresos',lbl:'eco_ingresos',sub:'eco_ingresos_sub',unit:'u_eur',type:'text'},
    {id:'eco_idi',lbl:'eco_idi',sub:'',unit:'u_eur2',type:'text'},
    {id:'eco_formacion_inv',lbl:'eco_formacion_inv',sub:'',unit:'u_eur2',type:'text'},
    {id:'eco_esg_inv',lbl:'eco_esg_inv',sub:'',unit:'u_eur2',type:'text'},
    {id:'eco_proveedores',lbl:'eco_proveedores',sub:'',unit:'u_num'},
    {id:'eco_prov_local',lbl:'eco_prov_local',sub:'',unit:'u_pct',min:0,max:100},
  ],[
    {type:'textarea',id:'eco_logros',lbl:'eco_logros',ph:'eco_logros_ph'},
    {type:'textarea',id:'eco_retos',lbl:'eco_retos',ph:'eco_retos_ph'},
  ]);

  // Format cards
  document.getElementById('format-cards').innerHTML = [
    {id:'fmt1',val:'pdf',icon:'PDF',t:'fmt_pdf',d:'fmt_pdf_desc'},
    {id:'fmt2',val:'print',icon:'HTML',t:'fmt_print',d:'fmt_print_desc'},
    {id:'fmt3',val:'texto',icon:'TXT',t:'fmt_text',d:'fmt_text_desc'},
    {id:'fmt4',val:'email',icon:'PRO',t:'fmt_custom',d:'fmt_custom_desc',badge:'fmt_badge'},
  ].map((f,i) => `<div class="format-card"><input type="radio" name="formato" id="${f.id}" value="${f.val}" ${i===0?'checked':''}><label for="${f.id}"><span class="fmt-icon">${f.icon}</span><span class="fmt-title">${T(f.t)}</span><span class="fmt-desc">${T(f.d)}</span>${f.badge?'<span class="fmt-badge">'+T(f.badge)+'</span>':''}</label></div>`).join('');
}

function buildRadios(containerId, name, optKeys){
  const c = document.getElementById(containerId);
  const prev = document.querySelector(`input[name="${name}"]:checked`)?.value;
  c.innerHTML = optKeys.map((ok,i) => {
    const k = ok[0]; const v = T(k);
    const id = name+'_'+i;
    return `<div class="radio-chip"><input type="radio" name="${name}" id="${id}" value="${v}" ${prev===v?'checked':''}><label for="${id}">${v}</label></div>`;
  }).join('');
}

function buildChecks(containerId, items){
  const c = document.getElementById(containerId);
  c.innerHTML = items.map((item,i) => {
    const label = typeof item === 'string' ? item : T(item.key);
    const val = typeof item === 'string' ? item : label;
    const id = 'ck_'+containerId+'_'+i;
    return `<div class="check-chip"><input type="checkbox" id="${id}" value="${val}"><label for="${id}">${label}</label></div>`;
  }).join('');
}

function buildIndicators(containerId, indicators, extras){
  const c = document.getElementById(containerId);
  // Save existing values
  const saved = {};
  indicators.forEach(ind => { const el = document.getElementById(ind.id); if(el) saved[ind.id] = el.value; });
  extras?.forEach(ex => { if(ex.id){ const el = document.getElementById(ex.id); if(el) saved[ex.id] = el.value; }});

  let html = indicators.map(ind => {
    const tp = ind.type || 'number';
    const v = saved[ind.id] || '';
    return `<div class="indicator-row"><label class="indicator-label" for="${ind.id}">${T(ind.lbl)}${ind.sub?'<small>'+T(ind.sub)+'</small>':''}</label><input type="${tp}" class="indicator-input" id="${ind.id}" placeholder="--" ${ind.min!==undefined?'min="'+ind.min+'"':''} ${ind.max!==undefined?'max="'+ind.max+'"':''} value="${v}"><div class="indicator-unit">${T(ind.unit)}</div></div>`;
  }).join('');

  if(extras) extras.forEach(ex => {
    if(ex.type==='textarea'){
      const v = saved[ex.id] || '';
      html += `<div class="field" style="margin-top:1rem"><label for="${ex.id}">${T(ex.lbl)}</label><textarea id="${ex.id}" placeholder="${T(ex.ph)}">${v}</textarea></div>`;
    } else if(ex.type==='radio'){
      html += `<div class="field" style="margin-top:1rem"><label>${T(ex.lbl)}</label><div class="radio-group">`;
      ex.opts.forEach((ok,i) => {
        const v = T(ok); const id = ex.name+'_'+i;
        html += `<div class="radio-chip"><input type="radio" name="${ex.name}" id="${id}" value="${v}"><label for="${id}">${v}</label></div>`;
      });
      html += '</div></div>';
    }
  });
  c.innerHTML = html;
}

// ═══════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════
let currentPage = 1;
const TOTAL = 6;

function goTo(n){
  document.getElementById('page-'+currentPage).classList.remove('active');
  currentPage = n;
  document.getElementById('page-'+n).classList.add('active');
  updateProgress();
  window.scrollTo({top:0,behavior:'smooth'});
}

function updateProgress(){
  const pct = Math.round(((currentPage-1)/(TOTAL-1))*100);
  document.getElementById('prog').style.width = pct+'%';
  document.getElementById('pct-label').textContent = pct+'%';
  document.getElementById('step-label').textContent = T('step')+' '+currentPage+' '+T('step_of')+' '+TOTAL;
  renderStepNav();
}

function renderStepNav(){
  const steps = T('steps');
  document.getElementById('steps-nav').innerHTML = steps.map((s,i) => {
    const n = i+1;
    let cls = n<currentPage?'done':n===currentPage?'active':'';
    const check = n<currentPage?'ok':n;
    const arrow = n<TOTAL?'<span class="step-arrow" aria-hidden="true">></span>':'';
    return `<div class="step-item ${cls}"><div class="step-num">${check}</div>${s}</div>${arrow}`;
  }).join('');
}

// ═══════════════════════════════════════════
// TOAST & HELPERS
// ═══════════════════════════════════════════
function showToast(msg, dur=3000){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),dur); }
function getRadio(name){ const el=document.querySelector('input[name="'+name+'"]:checked'); return el?el.value:'\u2014'; }
function getChecks(containerId){ return Array.from(document.querySelectorAll('#'+containerId+' input:checked')).map(e=>e.value).join(', ')||'\u2014'; }
function val(id){ const el=document.getElementById(id); if(!el)return '\u2014'; return el.value.trim()||'\u2014'; }
function kpiOrDash(id,unit){ const v=document.getElementById(id)?.value?.trim(); return v?v+(unit?' '+unit:''):'\u2014'; }

// ═════════════════════════════════════════════
// GENERATE REPORT
// ═════════════════════════════════════════════
function generarInforme(){
  const empresa=val('empresa_nombre'), anio=val('empresa_anio'), formato=getRadio('formato');
  const marcos=getChecks('cg-marcos');
  const dateLoc = lang==='en'?'en-GB':lang==='va'?'ca-ES':'es-ES';

  document.getElementById('out-empresa').textContent=empresa;
  document.getElementById('out-year').textContent=T('rpt_report')+' '+anio;
  document.getElementById('out-sector').textContent=val('empresa_sector');
  document.getElementById('out-tamano').textContent=val('empresa_tamano');
  document.getElementById('out-fecha').textContent=new Date().toLocaleDateString(dateLoc,{year:'numeric',month:'long',day:'numeric'});
  document.getElementById('out-pais').textContent=val('empresa_pais');
  document.getElementById('out-empleados').textContent=kpiOrDash('empresa_empleados',T('u_persons'));
  document.getElementById('out-web').textContent=val('empresa_web');
  document.getElementById('out-descripcion').textContent=val('empresa_descripcion');
  document.getElementById('out-codigo').textContent=getRadio('gov_codigo');
  document.getElementById('out-anti').textContent=getRadio('gov_anti');
  document.getElementById('out-canal').textContent=getRadio('gov_canal');
  document.getElementById('out-marcos').textContent=marcos;
  document.getElementById('out-compromisos').textContent=val('gov_compromisos');

  const envK=[{id:'env_energia',label:T('env_energia'),unit:T('u_mwh')},{id:'env_renovable',label:T('env_renovable'),unit:T('u_pct')},{id:'env_emisiones',label:T('env_emisiones'),unit:T('u_ton')},{id:'env_agua',label:T('env_agua'),unit:T('u_m3')},{id:'env_residuos',label:T('env_residuos'),unit:T('u_ton_y')},{id:'env_reciclaje',label:T('env_reciclaje'),unit:T('u_pct')}];
  document.getElementById('kpi-env').innerHTML=envK.map(k=>{const v=document.getElementById(k.id)?.value?.trim()||'\u2014';return '<div class="kpi-card"><div class="kpi-value">'+v+'</div><div class="kpi-label">'+k.label+'<br><small>'+k.unit+'</small></div></div>';}).join('');
  document.getElementById('out-netzero').textContent=getRadio('env_netzero');
  document.getElementById('out-env-iniciativas').textContent=val('env_iniciativas');

  const socK=[{id:'soc_plantilla',label:T('soc_plantilla'),unit:T('u_persons')},{id:'soc_mujeres',label:T('soc_mujeres'),unit:T('u_pct')},{id:'soc_mujeres_dir',label:T('soc_mujeres_dir'),unit:T('u_pct')},{id:'soc_rotacion',label:T('soc_rotacion'),unit:T('u_pct')},{id:'soc_formacion',label:T('soc_formacion'),unit:T('u_hours')},{id:'soc_accidentes',label:T('soc_accidentes'),unit:T('u_num')}];
  document.getElementById('kpi-soc').innerHTML=socK.map(k=>{const v=document.getElementById(k.id)?.value?.trim()||'\u2014';return '<div class="kpi-card"><div class="kpi-value">'+v+'</div><div class="kpi-label">'+k.label+'<br><small>'+k.unit+'</small></div></div>';}).join('');
  document.getElementById('out-soc-politicas').textContent=val('soc_politicas');
  document.getElementById('out-soc-comunidad').textContent=val('soc_comunidad');

  document.getElementById('out-ingresos').textContent=val('eco_ingresos');
  document.getElementById('out-idi').textContent=val('eco_idi');
  document.getElementById('out-eco-form').textContent=val('eco_formacion_inv');
  document.getElementById('out-eco-esg').textContent=val('eco_esg_inv');
  document.getElementById('out-prov').textContent=kpiOrDash('eco_proveedores');
  document.getElementById('out-prov-local').textContent=kpiOrDash('eco_prov_local',T('u_pct'));
  document.getElementById('out-eco-logros').textContent=val('eco_logros');
  document.getElementById('out-eco-retos').textContent=val('eco_retos');

  document.getElementById('btn-pdf').style.display=formato==='pdf'?'inline-flex':'none';
  document.getElementById('btn-print').style.display=formato==='print'?'inline-flex':'none';
  document.getElementById('out-email-section').style.display=formato==='email'?'block':'none';
  document.getElementById('out-texto-section').style.display=formato==='texto'?'block':'none';
  if(formato==='texto')buildTextoCanva(empresa,anio,marcos);

  document.getElementById('app-ui').style.display='none';
  const ro=document.getElementById('report-output');ro.style.display='block';ro.scrollIntoView({behavior:'smooth'});
  applyI18n();
  showToast(T('toast_ready'),4000);
}

function buildTextoCanva(empresa,anio,marcos){
  const sep = '\n════════════════════════════════\n';
  const lines=[T('rpt_header_tag')+' '+anio,empresa,'',sep+'1. '+T('rpt_s1').replace(/^\d+\.\s*/,'')+sep,T('f_sector')+': '+val('empresa_sector'),T('f_tamano')+': '+val('empresa_tamano')+' - '+kpiOrDash('empresa_empleados',T('u_persons')),T('f_pais')+': '+val('empresa_pais'),'Web: '+val('empresa_web'),'',val('empresa_descripcion'),'',sep+'2. '+T('rpt_s2').replace(/^\d+\.\s*/,'')+sep,T('rpt_code')+': '+getRadio('gov_codigo'),T('rpt_anticorr')+': '+getRadio('gov_anti'),T('rpt_channel')+': '+getRadio('gov_canal'),T('rpt_frameworks')+': '+marcos,'',val('gov_compromisos'),'',sep+'3. '+T('rpt_s3').replace(/^\d+\.\s*/,'')+sep,T('env_energia')+': '+kpiOrDash('env_energia',T('u_mwh')),T('env_renovable')+': '+kpiOrDash('env_renovable',T('u_pct')),T('env_emisiones')+': '+kpiOrDash('env_emisiones',T('u_ton')),T('env_agua')+': '+kpiOrDash('env_agua',T('u_m3')),T('env_residuos')+': '+kpiOrDash('env_residuos',T('u_ton_y')),T('env_reciclaje')+': '+kpiOrDash('env_reciclaje',T('u_pct')),T('rpt_climate')+': '+getRadio('env_netzero'),'',val('env_iniciativas'),'',sep+'4. '+T('rpt_s4').replace(/^\d+\.\s*/,'')+sep,T('soc_plantilla')+': '+kpiOrDash('soc_plantilla',T('u_persons')),T('soc_mujeres')+': '+kpiOrDash('soc_mujeres',T('u_pct')),T('soc_mujeres_dir')+': '+kpiOrDash('soc_mujeres_dir',T('u_pct')),T('soc_rotacion')+': '+kpiOrDash('soc_rotacion',T('u_pct')),T('soc_formacion')+': '+kpiOrDash('soc_formacion',T('u_hours')),T('soc_accidentes')+': '+kpiOrDash('soc_accidentes',T('u_num')),'',val('soc_politicas'),'',val('soc_comunidad'),'',sep+'5. '+T('rpt_s5').replace(/^\d+\.\s*/,'')+sep,T('rpt_revenue')+': '+val('eco_ingresos'),T('rpt_rdi')+': '+val('eco_idi'),T('rpt_training_inv')+': '+val('eco_formacion_inv'),T('rpt_esg_inv')+': '+val('eco_esg_inv'),T('rpt_suppliers')+': '+kpiOrDash('eco_proveedores'),T('rpt_local_sup')+': '+kpiOrDash('eco_prov_local',T('u_pct')),'',val('eco_logros'),'',val('eco_retos')];
  document.getElementById('out-texto-canva').value=lines.join('\n');
}

function copiarTexto(){document.getElementById('out-texto-canva').select();document.execCommand('copy');showToast(T('toast_copied'));}
function generarPDF(){showToast(T('toast_print'),3500);setTimeout(()=>window.print(),500);}
function reiniciar(){document.getElementById('report-output').style.display='none';document.getElementById('app-ui').style.display='block';goTo(1);}

// INIT
buildDynamicContent();
updateProgress();
applyI18n();

if (defaultLang !== 'es') {
  setLang(defaultLang);
}

// ===================== PUBLIC API =====================
window.MATRIZ = {
  setLang: setLang,
  goTo: goTo,
  generarInforme: generarInforme,
  copiarTexto: copiarTexto,
  generarPDF: generarPDF,
  reiniciar: reiniciar,
};

})();
