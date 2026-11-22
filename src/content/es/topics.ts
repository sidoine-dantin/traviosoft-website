import type { Article } from '../types';

const UPDATED = '2026-11-14';

const DISCLAIMER =
  'Información general, redactada el 14 de noviembre de 2026. No constituye asesoramiento jurídico ni fiscal y no tiene valor jurídico. Las normas cambian: compruébalas en los textos oficiales citados al final de la página o con un profesional cualificado. Traviosoft declina toda responsabilidad por las decisiones tomadas a partir de esta página.';

const gdpr: Article = {
  key: 'gdpr-travel',
  kind: 'guide',
  slug: 'rgpd-agencia-de-viajes',
  metaTitle: 'RGPD y agencias de viajes: lo que dice el reglamento',
  metaDescription: 'Lo que dice el RGPD (Reglamento (UE) 2016/679) sobre los temas que encuentra una agencia de viajes: principios, bases jurídicas, datos de salud, menores, conservación, derechos, encargados, brechas, transferencias fuera de la UE y multas.',
  title: 'RGPD y agencias de viajes: lo que dice el reglamento',
  lead: 'El Reglamento General de Protección de Datos (Reglamento (UE) 2016/679) se aplica a los datos personales de viajeros, clientes y contactos. Esta página resume los artículos relacionados con el trabajo de una agencia de viajes, con enlaces al texto.',
  updated: UPDATED,
  card: 'Principios, bases jurídicas, datos de salud, conservación, derechos, encargados y transferencias fuera de la UE.',
  blocks: [
    { type: 'callout', text: DISCLAIMER },
    { type: 'h2', text: 'Los principios', id: 'principios' },
    { type: 'p', text: 'El artículo 5 fija los principios de todo tratamiento. Los datos se tratan de manera lícita, leal y transparente; se recogen con fines determinados, explícitos y legítimos; son adecuados, pertinentes y limitados a lo necesario; se conservan durante no más tiempo del necesario para los fines; y se protegen con integridad y confidencialidad.' },
    { type: 'h2', text: 'Las seis bases jurídicas', id: 'bases-juridicas' },
    { type: 'p', text: 'Según el artículo 6, el tratamiento solo es lícito si se cumple al menos una de estas condiciones:' },
    { type: 'list', items: [
      'la persona ha dado su consentimiento;',
      'es necesario para la ejecución de un contrato en el que la persona es parte;',
      'es necesario para cumplir una obligación legal;',
      'es necesario para proteger intereses vitales;',
      'es necesario para cumplir una misión de interés público;',
      'es necesario para los intereses legítimos perseguidos.'
    ] },
    { type: 'h2', text: 'Los datos de salud', id: 'salud' },
    { type: 'p', text: 'El artículo 9 incluye los datos relativos a la salud entre las categorías especiales de datos, cuyo tratamiento está prohibido salvo que se aplique alguna de las excepciones del artículo. Una de ellas es el consentimiento explícito de la persona.' },
    { type: 'h2', text: 'Los menores', id: 'menores' },
    { type: 'p', text: 'El artículo 8 trata del consentimiento de un niño en servicios de la sociedad de la información que se le ofrecen directamente. El tratamiento con esa base es lícito a partir de los 16 años. Los Estados miembros pueden fijar una edad inferior, pero no por debajo de 13 años.' },
    { type: 'h2', text: 'El plazo de conservación', id: 'conservacion' },
    { type: 'p', text: 'El artículo 5 limita la conservación al tiempo necesario para los fines. Los artículos 13 y 14 enumeran la información que se da a la persona, que incluye el plazo de conservación.' },
    { type: 'h2', text: 'Los derechos de las personas', id: 'derechos' },
    { type: 'list', items: [
      'Derecho de acceso (artículo 15).',
      'Derecho de rectificación (artículo 16).',
      'Derecho de supresión, o «derecho al olvido» (artículo 17).',
      'Derecho a la limitación del tratamiento (artículo 18).',
      'Derecho a la portabilidad de los datos (artículo 20).',
      'Derecho de oposición (artículo 21).'
    ] },
    { type: 'h2', text: 'Los encargados del tratamiento', id: 'encargados' },
    { type: 'p', text: 'Cuando una empresa trata datos por cuenta del responsable, el artículo 28 exige un contrato u otro acto jurídico. Este fija el objeto y la duración del tratamiento, su naturaleza y finalidad, el tipo de datos y las categorías de personas afectadas.' },
    { type: 'h2', text: 'El registro y las brechas de datos', id: 'registro-brechas' },
    { type: 'p', text: 'El artículo 30 pide a cada responsable que lleve un registro de las actividades de tratamiento. La obligación no se aplica a organizaciones de menos de 250 empleados, salvo que el tratamiento pueda entrañar un riesgo, no sea ocasional o incluya categorías especiales de datos, como los datos de salud.' },
    { type: 'p', text: 'Según el artículo 33, una violación de la seguridad de los datos personales se notifica a la autoridad de control sin dilación indebida y, si es posible, a más tardar 72 horas después de tener constancia de ella, salvo que sea improbable que constituya un riesgo para los derechos y libertades de las personas.' },
    { type: 'h2', text: 'Las transferencias fuera de la Unión Europea', id: 'transferencias' },
    { type: 'p', text: 'El capítulo V (artículos 44 a 49) regula las transferencias de datos a países fuera de la UE. Una transferencia puede hacerse cuando la Comisión Europea ha decidido que el país garantiza un nivel de protección adecuado (artículo 45), sin autorización específica. Sin esa decisión, el artículo 46 prevé garantías adecuadas y el artículo 49 excepciones para situaciones específicas.' },
    { type: 'h2', text: 'Las multas', id: 'multas' },
    { type: 'p', text: 'El artículo 83 fija dos límites. Las infracciones, entre otras, de los principios, las bases jurídicas, las categorías especiales, los derechos de las personas y las normas de transferencia pueden llegar a 20 millones de euros o, para una empresa, al 4 % del volumen de negocio total anual mundial, optándose por la de mayor cuantía. Otras infracciones, como las de los artículos 8 y 25 a 39, pueden llegar a 10 millones de euros o al 2 %.' },
    { type: 'h2', text: 'En Traviosoft', id: 'traviosoft' },
    { type: 'p', text: 'En Traviosoft, los datos de cada agencia están en un espacio propio, alojado en la Unión Europea.' },
    { type: 'p', text: 'Texto oficial: el reglamento publicado por la CNIL, la autoridad francesa de protección de datos: [capítulo II, artículos 5 a 11](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2), [capítulo III, artículos 12 a 23](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3), [capítulo IV, artículos 24 a 43](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4), [capítulo V, artículos 44 a 50](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre5) y [capítulo VIII, artículos 77 a 84](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre8). En España, la [AEPD](https://www.aepd.es) publica sus propias guías.' }
  ]
};

const euVat: Article = {
  key: 'eu-vat-travel',
  kind: 'guide',
  slug: 'iva-regimen-margen-agencias-de-viajes-ue-vida',
  metaTitle: 'IVA de las agencias de viajes en la UE: el régimen del margen y ViDA',
  metaDescription: 'El régimen especial de IVA de las agencias de viajes en la UE (artículos 306 a 310 de la directiva del IVA) y lo que establece el paquete «IVA en la era digital» (ViDA) adoptado en 2025, con sus fechas.',
  title: 'IVA de las agencias de viajes en la UE: el régimen del margen y ViDA',
  lead: 'La directiva del IVA de la Unión Europea prevé un régimen especial para las agencias de viajes, en el que el IVA se aplica al margen. En 2025, la UE adoptó el paquete «IVA en la era digital» (ViDA), que introduce la declaración digital y la factura electrónica en las ventas entre empresas de distintos países a partir de 2030.',
  updated: UPDATED,
  card: 'El régimen especial de las agencias de viajes y las fechas de ViDA, según la Comisión Europea.',
  blocks: [
    { type: 'callout', text: DISCLAIMER },
    { type: 'h2', text: 'El régimen especial de las agencias de viajes', id: 'regimen' },
    { type: 'p', text: 'Los artículos 306 a 310 de la directiva del IVA (Directiva 2006/112/CE del Consejo) establecen un régimen especial para las agencias de viajes. La Comisión Europea lo describe así:' },
    { type: 'list', items: [
      'Es obligatorio para los países y las empresas de la UE, y existe en todos los países de la UE.',
      'Se aplica a las agencias de viajes que utilizan bienes y servicios de otras empresas, no a las que actúan solo como intermediarias.',
      'El IVA se aplica solo al margen.',
      'No hay derecho a deducir el IVA.',
      'Se aplica a los viajes y al alojamiento en la UE, no a los viajes fuera de la UE.'
    ] },
    { type: 'p', text: 'Cada país aplica el régimen con su propia ley. Las páginas «Facturar en tu país» describen las reglas en España, Francia, Alemania y Bélgica.' },
    { type: 'h2', text: 'El IVA en la era digital (ViDA)', id: 'vida' },
    { type: 'p', text: 'El paquete ViDA se adoptó el 11 de marzo de 2025, se publicó en el Diario Oficial de la Unión Europea el 25 de marzo de 2025 y entró en vigor el 14 de abril de 2025. Lo forman la Directiva (UE) 2025/516, el Reglamento (UE) 2025/517 y el Reglamento de Ejecución (UE) 2025/518.' },
    { type: 'p', text: 'Tiene tres partes:' },
    { type: 'list', items: [
      'La declaración digital, con la factura electrónica en las ventas entre empresas de distintos países.',
      'Normas actualizadas para las plataformas en algunos sectores.',
      'Un registro único a efectos del IVA en la UE.'
    ] },
    { type: 'h2', text: 'Las fechas', id: 'fechas' },
    { type: 'list', items: [
      '14 de abril de 2025: los Estados miembros pueden introducir la factura electrónica obligatoria en su territorio, con ciertas condiciones.',
      '1 de julio de 2030: la declaración digital se aplica a las operaciones entre empresas de distintos países.',
      '1 de enero de 2035: los Estados miembros con una declaración en tiempo real en su territorio adaptan su sistema al modelo y a las normas de la UE.'
    ] },
    { type: 'h2', text: 'En Traviosoft', id: 'traviosoft' },
    { type: 'p', text: 'En Traviosoft, las facturas se hacen desde el viaje, con la mención del régimen de las agencias de viajes cuando lo activas.' },
    { type: 'p', text: 'Fuentes oficiales: Comisión Europea, [regímenes especiales del IVA](https://taxation-customs.ec.europa.eu/special-schemes_en), [IVA en la era digital](https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en) y [adopción del paquete ViDA](https://taxation-customs.ec.europa.eu/news/adoption-vat-digital-age-package-2025-03-11_en).' }
  ]
};

const netRates: Article = {
  key: 'net-commissionable-rates',
  kind: 'guide',
  slug: 'tarifas-netas-y-tarifas-comisionables',
  metaTitle: 'Tarifas netas y tarifas comisionables en viajes: definiciones y ejemplos',
  metaDescription: 'Qué son las tarifas netas y las tarifas comisionables en viajes, cómo se calculan el recargo y la comisión, y la diferencia entre recargo y margen, con ejemplos.',
  title: 'Tarifas netas y tarifas comisionables',
  lead: 'Los proveedores venden a las agencias de viajes y a las DMC de dos formas principales. Una tarifa neta es el precio que paga la agencia, que después fija su propio precio de venta. Una tarifa comisionable es un precio de venta fijado por el proveedor, sobre el que la agencia cobra un porcentaje.',
  updated: UPDATED,
  card: 'Qué significan los dos tipos de tarifas, cómo se calculan el recargo y la comisión, con ejemplos.',
  blocks: [
    { type: 'h2', text: 'La tarifa neta', id: 'neta' },
    { type: 'p', text: 'Una tarifa neta es el precio que el proveedor cobra a la agencia, sin nada para la agencia. La agencia fija el precio de venta añadiendo un recargo. El cliente no ve la tarifa neta.' },
    { type: 'p', text: 'Ejemplo: un hotel da una tarifa neta de 100 EUR por noche. Con un recargo del 25 %, el precio de venta es de 125 EUR. La agencia se queda 25 EUR.' },
    { type: 'h2', text: 'La tarifa comisionable', id: 'comisionable' },
    { type: 'p', text: 'Una tarifa comisionable es un precio de venta fijado por el proveedor, a menudo su precio público. La agencia vende a ese precio y recibe una comisión, un porcentaje acordado con el proveedor.' },
    { type: 'p', text: 'Ejemplo: la tarifa comisionable de un hotel es de 150 EUR por noche, con un 10 % de comisión. El cliente paga 150 EUR, la agencia cobra 15 EUR y el hotel recibe 135 EUR.' },
    { type: 'h2', text: 'Recargo y margen', id: 'recargo-margen' },
    { type: 'p', text: 'Un mismo importe da dos porcentajes distintos según con qué se compare. El recargo se calcula sobre el coste; el margen, sobre el precio de venta.' },
    { type: 'list', items: [
      'Coste 100 EUR, precio de venta 125 EUR, es decir 25 EUR ganados.',
      'Recargo: 25 ÷ 100 = 25 %.',
      'Margen: 25 ÷ 125 = 20 %.'
    ] },
    { type: 'p', text: 'Para obtener un margen dado a partir de un coste, el precio de venta es el coste dividido entre (1 − margen). Para un margen del 20 % sobre un coste de 100 EUR: 100 ÷ 0,8 = 125 EUR.' },
    { type: 'h2', text: 'La comisión de una agencia colaboradora', id: 'colaboradora' },
    { type: 'p', text: 'Una DMC o un turoperador que vende a través de otras agencias suele trabajar al revés: fija un precio comisionable y paga una comisión a la agencia que vende.' },
    { type: 'p', text: 'Ejemplo: una DMC monta un viaje con 1.000 EUR de costes netos y lo ofrece a 1.300 EUR al viajero, con un 10 % de comisión para la agencia que vende. La agencia cobra 130 EUR y la DMC se queda 1.170 EUR, 170 EUR por encima de sus costes.' },
    { type: 'h2', text: 'Dónde entran los impuestos', id: 'impuestos' },
    { type: 'p', text: 'Cómo se aplica el IVA al recargo o a la comisión depende del país y de si la agencia vende en nombre propio o como intermediaria. Las páginas «Facturar en tu país» describen las reglas de varios países.' },
    { type: 'h2', text: 'En Traviosoft', id: 'traviosoft' },
    { type: 'p', text: 'En Traviosoft, tus reglas de precios convierten las tarifas netas en precios de venta, con el margen, el IVA y la comisión cuando una agencia colaboradora vende el viaje.' },
    { type: 'h2', text: 'Preguntas', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: '¿Un mismo viaje puede mezclar tarifas netas y comisionables?', a: ['Sí. Un viaje suele combinar hoteles con tarifa neta y servicios vendidos a un precio comisionable, como algunas excursiones o transportes.'] },
        { q: '¿Una comisión es lo mismo que un margen?', a: ['Las dos son lo que gana la agencia. La comisión es un porcentaje de un precio que fija otro; el margen sale de un precio de venta que fija la propia agencia.'] }
      ]
    }
  ]
};

export const topicGuides: Article[] = [gdpr, euVat, netRates];
