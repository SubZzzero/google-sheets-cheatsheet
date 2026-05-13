export const DEFAULT_LOCALE = 'en';
export const SUPPORTED_LOCALES = ['en', 'ua', 'ru'];
export const LOCALE_LABELS = {
  en: 'EN',
  ua: 'UA',
  ru: 'RU',
};
export const LOCALE_STORAGE_KEY = 'gs-cheatsheet-locale';

export const CATEGORY_ORDER = [
  'frequentlyUsed',
  'basic',
  'logic',
  'lookup',
  'text',
  'data',
  'arrays',
  'dateTime',
  'import',
];

export const SOURCE_CATEGORY_ID_MAP = {
  'Базовые': 'basic',
  'Часто используемые': 'frequentlyUsed',
  Логические: 'logic',
  Поиск: 'lookup',
  Текст: 'text',
  Данные: 'data',
  Массивы: 'arrays',
  'Дата и время': 'dateTime',
  Импорт: 'import',
};

const CATEGORY_ICONS = {
  basic: '🧮',
  frequentlyUsed: '⭐',
  logic: '🧠',
  lookup: '🔎',
  text: '📝',
  data: '📊',
  arrays: '🧩',
  dateTime: '⏰',
  import: '🌐',
};

const CATEGORY_TRANSLATIONS = {
  en: {
    basic: {
      label: 'Basics',
      description: 'Sum, average, and other core functions for everyday spreadsheet work.',
    },
    frequentlyUsed: {
      label: 'Frequently Used',
      description: 'Popular formulas for reports, summaries, and recurring analysis tasks.',
    },
    logic: {
      label: 'Logic',
      description: 'Conditions, checks, and decision-making scenarios inside your sheets.',
    },
    lookup: {
      label: 'Lookup',
      description: 'Find values and connect data across ranges and tables.',
    },
    text: {
      label: 'Text',
      description: 'Split, combine, clean, and format text strings.',
    },
    data: {
      label: 'Data',
      description: 'Filter, sort, and prepare datasets for analysis.',
    },
    arrays: {
      label: 'Arrays',
      description: 'Work with ranges and dynamic arrays inside a single formula.',
    },
    dateTime: {
      label: 'Date & Time',
      description: 'Handle dates, deadlines, workdays, and calendar-based calculations.',
    },
    import: {
      label: 'Import',
      description: 'Pull external sources and built-in online data into your sheet.',
    },
  },
  ua: {
    basic: {
      label: 'Базові',
      description: 'Сума, середнє та інші ключові функції для щоденної роботи з таблицями.',
    },
    frequentlyUsed: {
      label: 'Часто вживані',
      description: 'Популярні формули для звітів, підсумків і регулярної аналітики.',
    },
    logic: {
      label: 'Логічні',
      description: 'Умови, перевірки та сценарії прийняття рішень у таблицях.',
    },
    lookup: {
      label: 'Пошук',
      description: 'Пошук значень і зв’язування даних між діапазонами та таблицями.',
    },
    text: {
      label: 'Текст',
      description: 'Розбір, об’єднання, очищення та форматування текстових рядків.',
    },
    data: {
      label: 'Дані',
      description: 'Фільтрація, сортування та підготовка наборів даних до аналізу.',
    },
    arrays: {
      label: 'Масиви',
      description: 'Робота з діапазонами та динамічними масивами в одній формулі.',
    },
    dateTime: {
      label: 'Дата й час',
      description: 'Робота з датами, дедлайнами, робочими днями та календарними розрахунками.',
    },
    import: {
      label: 'Імпорт',
      description: 'Підтягування зовнішніх джерел і вбудованих онлайн-даних.',
    },
  },
  ru: {
    basic: {
      label: 'Базовые',
      description: 'Сумма, среднее и другие ключевые функции для ежедневных задач.',
    },
    frequentlyUsed: {
      label: 'Часто используемые',
      description: 'Популярные формулы для отчётов, сводок и регулярной аналитики.',
    },
    logic: {
      label: 'Логические',
      description: 'Условия, проверки и сценарии принятия решений в таблицах.',
    },
    lookup: {
      label: 'Поиск',
      description: 'Нахождение значений и связка данных между диапазонами.',
    },
    text: {
      label: 'Текст',
      description: 'Обработка строк: разбор, объединение и форматирование текста.',
    },
    data: {
      label: 'Данные',
      description: 'Фильтрация, сортировка и подготовка наборов данных к анализу.',
    },
    arrays: {
      label: 'Массивы',
      description: 'Работа с диапазонами и динамическими массивами в одной формуле.',
    },
    dateTime: {
      label: 'Дата и время',
      description: 'Работа с датами, сроками и временем: периоды, рабочие дни и календарные расчёты.',
    },
    import: {
      label: 'Импорт',
      description: 'Подтягивание внешних источников и встроенных онлайн-данных.',
    },
  },
};

const UI_STRINGS = {
  en: {
    documentTitle: 'Google Sheets Formula Cheat Sheet',
    header: {
      productName: 'Google Sheets Cheatsheet',
      logoAlt: 'Google Sheets logo',
      menuAriaLabel: 'Open or close categories',
      languageSwitcherLabel: 'Switch language',
    },
    home: {
      title: 'Find the right formula fast and put it to work immediately',
      description:
        'This cheat sheet helps you understand which Google Sheets function to use, how to build it, and what result to expect.',
      benefitsTitle: 'Why it is useful',
      benefits: [
        'Saves time when checking syntax.',
        'Helps you understand function arguments faster.',
        'Shows practical examples with clear result notes.',
      ],
      startTitle: 'How to start',
      startSteps: [
        'Choose a formula category below.',
        'Open the card for the function you need.',
        'Copy the formula and adapt the example to your own data.',
      ],
      categoriesAriaLabel: 'Formula categories',
      categoriesTitle: 'Pick a category and start with ready-to-use examples',
      categoriesSubtitle:
        'Each card shows the purpose of the section and how many formulas are available there.',
      openCategoryLabel: 'Open category',
      defaultCategoryDescription: 'A focused set of formulas with practical examples and quick explanations.',
    },
    cardList: {
      titlePrefix: 'Category',
      subtitle:
        'Choose a formula, copy the syntax, and use the extended example block to understand the calculation flow faster.',
      homeButton: 'Back to home',
      emptyState: 'No formulas were found for this category.',
    },
    card: {
      copy: 'COPY',
      copied: 'COPIED',
      syntax: 'Syntax',
      whatItDoes: 'What it does',
      example: 'Example',
      purpose: 'Purpose',
      variables: 'Variables',
      calculation: 'Calculation',
      result: 'Result',
    },
    sidebar: {
      closePanelAriaLabel: 'Close category panel',
      navAriaLabel: 'Formula categories',
    },
    footer: {
      githubAriaLabel: 'Open SubZzzero GitHub profile',
      githubText: 'GitHub',
    },
  },
  ua: {
    documentTitle: 'Шпаргалка з формул Google Sheets',
    header: {
      productName: 'Google Sheets Cheatsheet',
      logoAlt: 'Логотип Google Sheets',
      menuAriaLabel: 'Відкрити або закрити категорії',
      languageSwitcherLabel: 'Перемкнути мову',
    },
    home: {
      title: 'Швидко знаходьте потрібні формули та одразу використовуйте їх у роботі',
      description:
        'Ця шпаргалка допомагає швидко зрозуміти, яку функцію Google Sheets вибрати, як її скласти та який результат очікувати.',
      benefitsTitle: 'Чому це корисно',
      benefits: [
        'Економить час на пошуку синтаксису.',
        'Допомагає швидше розібратися в аргументах функцій.',
        'Дає практичні приклади з поясненням результату.',
      ],
      startTitle: 'З чого почати',
      startSteps: [
        'Оберіть категорію формул нижче.',
        'Відкрийте картку потрібної функції.',
        'Скопіюйте формулу та адаптуйте приклад під свої дані.',
      ],
      categoriesAriaLabel: 'Категорії формул',
      categoriesTitle: 'Оберіть категорію та почніть з готових прикладів',
      categoriesSubtitle:
        'Кожна картка показує призначення розділу та кількість доступних матеріалів.',
      openCategoryLabel: 'Відкрити категорію',
      defaultCategoryDescription: 'Добірка формул за темою з готовими прикладами використання.',
    },
    cardList: {
      titlePrefix: 'Категорія',
      subtitle:
        'Оберіть формулу, скопіюйте синтаксис і використайте розширений блок прикладу, щоб швидше зрозуміти логіку розрахунку.',
      homeButton: 'На головну',
      emptyState: 'Для цієї категорії формул не знайдено.',
    },
    card: {
      copy: 'КОПІЮВАТИ',
      copied: 'СКОПІЙОВАНО',
      syntax: 'Синтаксис',
      whatItDoes: 'Що робить',
      example: 'Приклад',
      purpose: 'Призначення',
      variables: 'Змінні',
      calculation: 'Розрахунок',
      result: 'Результат',
    },
    sidebar: {
      closePanelAriaLabel: 'Закрити панель категорій',
      navAriaLabel: 'Категорії формул',
    },
    footer: {
      githubAriaLabel: 'Відкрити GitHub-профіль SubZzzero',
      githubText: 'GitHub',
    },
  },
  ru: {
    documentTitle: 'Шпаргалка по формулам Google Sheets',
    header: {
      productName: 'Google Sheets Cheatsheet',
      logoAlt: 'Логотип Google Sheets',
      menuAriaLabel: 'Открыть или закрыть категории',
      languageSwitcherLabel: 'Переключить язык',
    },
    home: {
      title: 'Быстро находите нужные формулы и сразу применяйте их в работе',
      description:
        'Это шпаргалка по функциям Google Sheets. Здесь можно быстро понять, какую формулу выбрать, как её собрать и что именно получится в результате.',
      benefitsTitle: 'Зачем это полезно',
      benefits: [
        'Экономит время на поиск синтаксиса.',
        'Помогает быстро разбираться в аргументах функций.',
        'Даёт практические примеры с пояснением результата.',
      ],
      startTitle: 'Как начать',
      startSteps: [
        'Выберите категорию формул ниже.',
        'Откройте карточку нужной функции.',
        'Скопируйте формулу и адаптируйте пример под свои данные.',
      ],
      categoriesAriaLabel: 'Категории формул',
      categoriesTitle: 'Выберите категорию и начните с готовых примеров',
      categoriesSubtitle:
        'Каждая карточка показывает назначение раздела и количество доступных материалов.',
      openCategoryLabel: 'Открыть категорию',
      defaultCategoryDescription: 'Подборка формул по теме с готовыми примерами использования.',
    },
    cardList: {
      titlePrefix: 'Категория',
      subtitle:
        'Выберите формулу, скопируйте синтаксис и используйте расширенный блок примера, чтобы быстро понять логику расчёта.',
      homeButton: 'На стартовую',
      emptyState: 'Для этой категории формулы не найдены.',
    },
    card: {
      copy: 'КОПИРОВАТЬ',
      copied: 'СКОПИРОВАНО',
      syntax: 'Синтаксис',
      whatItDoes: 'Что делает',
      example: 'Пример',
      purpose: 'Назначение',
      variables: 'Переменные',
      calculation: 'Пример расчёта',
      result: 'Что получится',
    },
    sidebar: {
      closePanelAriaLabel: 'Закрыть панель категорий',
      navAriaLabel: 'Категории формул',
    },
    footer: {
      githubAriaLabel: 'Открыть GitHub-профиль SubZzzero',
      githubText: 'GitHub',
    },
  },
};

export const getUiText = (locale) => UI_STRINGS[locale] ?? UI_STRINGS[DEFAULT_LOCALE];

export const getCategoryMeta = (categoryId, locale) => {
  const dictionary = CATEGORY_TRANSLATIONS[locale] ?? CATEGORY_TRANSLATIONS[DEFAULT_LOCALE];
  const fallbackDictionary = CATEGORY_TRANSLATIONS[DEFAULT_LOCALE];
  const category = dictionary[categoryId] ?? fallbackDictionary[categoryId];

  return {
    icon: CATEGORY_ICONS[categoryId] ?? '📁',
    label: category?.label ?? categoryId,
    description: category?.description ?? getUiText(locale).home.defaultCategoryDescription,
  };
};

export const getCategoryLabel = (categoryId, locale) => getCategoryMeta(categoryId, locale).label;

export const isSupportedLocale = (locale) => SUPPORTED_LOCALES.includes(locale);

export const getStoredLocale = () => {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);

  return isSupportedLocale(storedLocale) ? storedLocale : DEFAULT_LOCALE;
};

export const persistLocale = (locale) => {
  if (typeof window === 'undefined' || !isSupportedLocale(locale)) {
    return;
  }

  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
};

const PLURAL_RULES = {
  en: new Intl.PluralRules('en'),
  ua: new Intl.PluralRules('uk'),
  ru: new Intl.PluralRules('ru'),
};

const FORMULA_WORDS = {
  en: {
    one: 'formula',
    other: 'formulas',
  },
  ua: {
    one: 'формула',
    few: 'формули',
    many: 'формул',
    other: 'формули',
  },
  ru: {
    one: 'формула',
    few: 'формулы',
    many: 'формул',
    other: 'формулы',
  },
};

export const formatFormulaCount = (locale, count) => {
  const safeLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const pluralCategory = PLURAL_RULES[safeLocale].select(count);
  const dictionary = FORMULA_WORDS[safeLocale];
  const word = dictionary[pluralCategory] ?? dictionary.other;

  return `${count} ${word}`;
};
