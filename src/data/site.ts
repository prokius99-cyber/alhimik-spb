/**
 * Единственный источник данных о бизнесе: название, контакты, адрес, часы, соцсети.
 * Каждое значение — из analysis.md (с источником). Нет факта — {{VERIFY: что}}.
 * Компоненты берут данные ТОЛЬКО отсюда, поэтому телефон на сайте всегда один (NAP).
 */
export const business = {
  name: 'Алхимик',
  /** Короткое описание для title/description — без {{VERIFY}}. */
  tagline: 'таверна в цоколе на Савушкина',
  description: 'Бар-таверна «Алхимик» в цоколе на Савушкина, 143к1: атмосфера алхимии позднего средневековья, 22 сорта пива, наливки, европейская кухня. Бронь по телефону.',
  /** Телефон в формате +7XXXXXXXXXX и в человеческом виде. Источник: VK, jam.me, 2ГИС. */
  phone: { e164: '+78126801810', display: '+7 (812) 680-18-10' },
  email: '',
  address: {
    street: 'ул. Савушкина, 143, корп. 1',
    city: 'Санкт-Петербург',
    region: '',
    postalCode: '197374',
    note: 'цокольный этаж, вход со стороны Туристской улицы',
  },
  metro: 'Беговая',
  geo: { lat: 59.989813, lon: 30.202631 },
  /** Часы в формате schema.org. Открытие расходится (13:00 VK / 15:00 2ГИС) — в разметку не выводим до подтверждения. */
  hours: [] as string[],
  hoursDisplay: 'ежедневно до 03:00',
  hoursVerify: '{{VERIFY: открытие — 13:00 (VK) или 15:00 (2ГИС)}}',
  closesAt: '03:00',
  links: {
    yandexMaps: 'https://yandex.ru/maps/?pt=30.202631,59.989813&z=17&l=map',
    twoGis: 'https://2gis.ru/spb/firm/5348552838784048',
    vk: 'https://vk.com/alhimik_cafe',
    telegram: '', // username без @ — для ссылки t.me/<username>
    whatsapp: '', // 2ГИС даёт 79219488157 — не выводим до VERIFY
  },
  /** Цвет панели браузера на телефоне = --c-bg из DESIGN.md. */
  themeColor: '#10172a',
  /** Тип для JSON-LD: Store, LocalBusiness, Restaurant, BeautySalon, AutoRepair и т.д. */
  schemaType: 'BarOrPub',
  /** Реквизиты для подвала и политики конфиденциальности. */
  legal: { operator: '{{VERIFY: ИП/ООО}}', inn: '{{VERIFY: ИНН}}', ogrn: '' },
};

/** Заявки: адрес приёма (вебхук, форма, серверная функция). Пусто — форма предлагает мессенджеры. */
export const orderEndpoint = import.meta.env.PUBLIC_ORDER_ENDPOINT || '';

/** Демо для клиента: noindex + запрет в robots.txt. Включено по умолчанию до выкладки на домен клиента. */
export const isDemo = (import.meta.env.PUBLIC_DEMO ?? 'true') !== 'false';
