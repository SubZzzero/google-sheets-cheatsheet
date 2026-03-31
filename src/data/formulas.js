const baseFormulas = [
    // --- ЛОГИЧЕСКИЕ (LOGIC) ---
    {
        id: 1,
        name: "IF",
        category: "Логические",
        description: "Проверяет условие и возвращает одно значение, если оно верно, и другое, если нет.",
        syntax: "=IF(condition, value_if_true, value_if_false)",
        example: "=IF(A1 > 10, \"Много\", \"Мало\")"
    },
    {
        id: 2,
        name: "IFERROR",
        category: "Логические",
        description: "Заменяет стандартную ошибку (#N/A, #VALUE!) на ваш текст или число.",
        syntax: "=IFERROR(value, [value_if_error])",
        example: "=IFERROR(VLOOKUP(A1, B:C, 2, 0), \"Не найдено\")"
    },
    {
        id: 3,
        name: "AND",
        category: "Логические",
        description: "Возвращает TRUE, если все условия выполнены.",
        syntax: "=AND(logical1, [logical2, ...])",
        example: "=AND(A1>0, B1>0)"
    },
    {
        id: 4,
        name: "OR",
        category: "Логические",
        description: "Возвращает TRUE, если хотя бы одно условие выполнено.",
        syntax: "=OR(logical1, [logical2, ...])",
        example: "=OR(A1>0, B1>0)"
    },
    {
        id: 5,
        name: "NOT",
        category: "Логические",
        description: "Инвертирует логическое значение.",
        syntax: "=NOT(logical_expression)",
        example: "=NOT(A1>10)"
    },
    {
        id: 6,
        name: "IFS",
        category: "Логические",
        description: "Проверяет несколько условий подряд.",
        syntax: "=IFS(cond1, val1, cond2, val2, ...)",
        example: "=IFS(A1>90, \"A\", A1>70, \"B\")"
    },
    {
        id: 7,
        name: "SWITCH",
        category: "Логические",
        description: "Выбирает значение из списка вариантов.",
        syntax: "=SWITCH(expression, case1, value1, ...)",
        example: "=SWITCH(A1, 1, \"One\", 2, \"Two\")"
    },
    {
        id: 8,
        name: "ISBLANK",
        category: "Логические",
        description: "Проверяет, пуста ли ячейка.",
        syntax: "=ISBLANK(value)",
        example: "=ISBLANK(A1)"
    },
    {
        id: 9,
        name: "ISNUMBER",
        category: "Логические",
        description: "Проверяет, является ли значение числом.",
        syntax: "=ISNUMBER(value)",
        example: "=ISNUMBER(A1)"
    },
    {
        id: 10,
        name: "ISTEXT",
        category: "Логические",
        description: "Проверяет, является ли значение текстом.",
        syntax: "=ISTEXT(value)",
        example: "=ISTEXT(A1)"
    },

    // --- ПОИСК (LOOKUP) ---
    {
        id: 11,
        name: "VLOOKUP",
        category: "Поиск",
        description: "Ищет значение по вертикали.",
        syntax: "=VLOOKUP(search_key, range, index, [is_sorted])",
        example: "=VLOOKUP(A1, A:C, 2, FALSE)"
    },
    {
        id: 12,
        name: "HLOOKUP",
        category: "Поиск",
        description: "Ищет значение по горизонтали.",
        syntax: "=HLOOKUP(search_key, range, index, [is_sorted])",
        example: "=HLOOKUP(A1, A1:D2, 2, FALSE)"
    },
    {
        id: 13,
        name: "XLOOKUP",
        category: "Поиск",
        description: "Универсальный поиск в любом направлении.",
        syntax: "=XLOOKUP(search_key, lookup_range, result_range)",
        example: "=XLOOKUP(A1, A:A, B:B)"
    },
    {
        id: 14,
        name: "INDEX",
        category: "Поиск",
        description: "Возвращает значение по позиции.",
        syntax: "=INDEX(range, row, [column])",
        example: "=INDEX(A1:C10, 2, 3)"
    },
    {
        id: 15,
        name: "MATCH",
        category: "Поиск",
        description: "Находит позицию элемента.",
        syntax: "=MATCH(search_key, range, [type])",
        example: "=MATCH(A1, B:B, 0)"
    },
    {
        id: 16,
        name: "FILTER",
        category: "Поиск",
        description: "Фильтрует диапазон по условию.",
        syntax: "=FILTER(range, condition)",
        example: "=FILTER(A1:B10, B1:B10>10)"
    },
    {
        id: 17,
        name: "LOOKUP",
        category: "Поиск",
        description: "Базовая функция поиска.",
        syntax: "=LOOKUP(search_key, search_range, result_range)",
        example: "=LOOKUP(A1, A:A, B:B)"
    },
    {
        id: 18,
        name: "CHOOSE",
        category: "Поиск",
        description: "Выбирает значение по индексу.",
        syntax: "=CHOOSE(index, val1, val2, ...)",
        example: "=CHOOSE(2, \"A\", \"B\")"
    },
    {
        id: 19,
        name: "OFFSET",
        category: "Поиск",
        description: "Возвращает смещённый диапазон.",
        syntax: "=OFFSET(ref, rows, cols)",
        example: "=OFFSET(A1, 2, 1)"
    },
    {
        id: 20,
        name: "INDIRECT",
        category: "Поиск",
        description: "Создаёт ссылку из текста.",
        syntax: "=INDIRECT(ref_text)",
        example: "=INDIRECT(\"A1\")"
    },

    // --- ТЕКСТ (TEXT) ---
    {
        id: 21,
        name: "SPLIT",
        category: "Текст",
        description: "Разбивает текст.",
        syntax: "=SPLIT(text, delimiter)",
        example: "=SPLIT(A1, \",\")"
    },
    {
        id: 22,
        name: "JOIN",
        category: "Текст",
        description: "Склеивает текст.",
        syntax: "=JOIN(delimiter, range)",
        example: "=JOIN(\",\", A1:A5)"
    },
    {
        id: 23,
        name: "CONCAT",
        category: "Текст",
        description: "Объединяет строки.",
        syntax: "=CONCAT(value1, value2)",
        example: "=CONCAT(A1, B1)"
    },
    {
        id: 24,
        name: "TEXTJOIN",
        category: "Текст",
        description: "Объединяет с разделителем.",
        syntax: "=TEXTJOIN(delimiter, ignore_empty, range)",
        example: "=TEXTJOIN(\",\", TRUE, A1:A5)"
    },
    {
        id: 25,
        name: "LEFT",
        category: "Текст",
        description: "Берёт символы слева.",
        syntax: "=LEFT(text, [num_chars])",
        example: "=LEFT(A1, 4)"
    },
    {
        id: 26,
        name: "RIGHT",
        category: "Текст",
        description: "Берёт символы справа.",
        syntax: "=RIGHT(text, [num_chars])",
        example: "=RIGHT(A1, 2)"
    },
    {
        id: 27,
        name: "MID",
        category: "Текст",
        description: "Берёт текст из середины.",
        syntax: "=MID(text, start, length)",
        example: "=MID(A1, 2, 3)"
    },
    {
        id: 28,
        name: "LEN",
        category: "Текст",
        description: "Длина строки.",
        syntax: "=LEN(text)",
        example: "=LEN(A1)"
    },
    {
        id: 29,
        name: "LOWER",
        category: "Текст",
        description: "В нижний регистр.",
        syntax: "=LOWER(text)",
        example: "=LOWER(A1)"
    },
    {
        id: 30,
        name: "UPPER",
        category: "Текст",
        description: "В верхний регистр.",
        syntax: "=UPPER(text)",
        example: "=UPPER(A1)"
    },

    // --- DATA / ARRAYS ---
    {
        id: 31,
        name: "QUERY",
        category: "Данные",
        description: "SQL-подобные запросы.",
        syntax: "=QUERY(data, query)",
        example: "=QUERY(A1:C, \"SELECT A\")"
    },
    {
        id: 32,
        name: "ARRAYFORMULA",
        category: "Массивы",
        description: "Работа с массивами.",
        syntax: "=ARRAYFORMULA(formula)",
        example: "=ARRAYFORMULA(A1:A*B1:B)"
    },
    {
        id: 33,
        name: "UNIQUE",
        category: "Данные",
        description: "Убирает дубликаты.",
        syntax: "=UNIQUE(range)",
        example: "=UNIQUE(A1:A)"
    },
    {
        id: 34,
        name: "SORT",
        category: "Данные",
        description: "Сортирует данные.",
        syntax: "=SORT(range, column, is_asc)",
        example: "=SORT(A1:B, 2, TRUE)"
    },
    {
        id: 35,
        name: "SORTN",
        category: "Данные",
        description: "Сортирует и ограничивает.",
        syntax: "=SORTN(range, n)",
        example: "=SORTN(A1:B, 5)"
    },
    {
        id: 36,
        name: "TRANSPOSE",
        category: "Массивы",
        description: "Меняет строки и столбцы.",
        syntax: "=TRANSPOSE(range)",
        example: "=TRANSPOSE(A1:B2)"
    },
    {
        id: 37,
        name: "SEQUENCE",
        category: "Массивы",
        description: "Генерирует числа.",
        syntax: "=SEQUENCE(rows, cols)",
        example: "=SEQUENCE(5)"
    },
    {
        id: 38,
        name: "FLATTEN",
        category: "Массивы",
        description: "Сжимает массив в колонку.",
        syntax: "=FLATTEN(range)",
        example: "=FLATTEN(A1:C3)"
    },
    {
        id: 39,
        name: "WRAPROWS",
        category: "Массивы",
        description: "Делит на строки.",
        syntax: "=WRAPROWS(range, count)",
        example: "=WRAPROWS(A1:A10, 3)"
    },
    {
        id: 40,
        name: "WRAPCOLS",
        category: "Массивы",
        description: "Делит на столбцы.",
        syntax: "=WRAPCOLS(range, count)",
        example: "=WRAPCOLS(A1:A10, 3)"
    },

    // --- IMPORT ---
    {
        id: 41,
        name: "IMPORTRANGE",
        category: "Импорт",
        description: "Импорт из другой таблицы.",
        syntax: "=IMPORTRANGE(url, range)",
        example: "=IMPORTRANGE(\"url\", \"Sheet1!A1:B10\")"
    },
    {
        id: 42,
        name: "IMPORTHTML",
        category: "Импорт",
        description: "Импорт с сайта.",
        syntax: "=IMPORTHTML(url, query, index)",
        example: "=IMPORTHTML(\"url\", \"table\", 1)"
    },
    {
        id: 43,
        name: "IMPORTXML",
        category: "Импорт",
        description: "Импорт через XPath.",
        syntax: "=IMPORTXML(url, xpath)",
        example: "=IMPORTXML(\"url\", \"//title\")"
    },
    {
        id: 44,
        name: "IMPORTDATA",
        category: "Импорт",
        description: "Импорт CSV/TSV.",
        syntax: "=IMPORTDATA(url)",
        example: "=IMPORTDATA(\"url\")"
    },
    {
        id: 45,
        name: "GOOGLEFINANCE",
        category: "Импорт",
        description: "Финансовые данные.",
        syntax: "=GOOGLEFINANCE(ticker)",
        example: "=GOOGLEFINANCE(\"GOOG\")"
    },
    {
        id: 46,
        name: "IMAGE",
        category: "Импорт",
        description: "Вставка картинки.",
        syntax: "=IMAGE(url)",
        example: "=IMAGE(\"url\")"
    },
    {
        id: 47,
        name: "HYPERLINK",
        category: "Импорт",
        description: "Создаёт ссылку.",
        syntax: "=HYPERLINK(url, label)",
        example: "=HYPERLINK(\"url\", \"Открыть\")"
    },
    {
        id: 48,
        name: "ENCODEURL",
        category: "Импорт",
        description: "Кодирует URL.",
        syntax: "=ENCODEURL(text)",
        example: "=ENCODEURL(A1)"
    },
    {
        id: 49,
        name: "GOOGLETRANSLATE",
        category: "Импорт",
        description: "Перевод текста.",
        syntax: "=GOOGLETRANSLATE(text, source, target)",
        example: "=GOOGLETRANSLATE(A1, \"en\", \"ru\")"
    },
    {
        id: 50,
        name: "SPARKLINE",
        category: "Импорт",
        description: "Мини-график в ячейке.",
        syntax: "=SPARKLINE(range)",
        example: "=SPARKLINE(A1:A10)"
    },

    // --- БАЗОВЫЕ ---
    {
        id: 51,
        name: "SUM",
        category: "Базовые",
        description: "Суммирует числа в диапазоне.",
        syntax: "=SUM(value1, [value2, ...])",
        example: "=SUM(A1:A10)"
    },
    {
        id: 52,
        name: "AVERAGE",
        category: "Базовые",
        description: "Возвращает среднее арифметическое.",
        syntax: "=AVERAGE(value1, [value2, ...])",
        example: "=AVERAGE(B1:B10)"
    },
    {
        id: 53,
        name: "COUNT",
        category: "Базовые",
        description: "Считает количество числовых значений.",
        syntax: "=COUNT(value1, [value2, ...])",
        example: "=COUNT(C1:C20)"
    },
    {
        id: 54,
        name: "COUNTA",
        category: "Базовые",
        description: "Считает количество непустых ячеек.",
        syntax: "=COUNTA(value1, [value2, ...])",
        example: "=COUNTA(A1:A20)"
    },
    {
        id: 55,
        name: "MAX",
        category: "Базовые",
        description: "Возвращает максимальное значение.",
        syntax: "=MAX(value1, [value2, ...])",
        example: "=MAX(D1:D30)"
    },
    {
        id: 56,
        name: "MIN",
        category: "Базовые",
        description: "Возвращает минимальное значение.",
        syntax: "=MIN(value1, [value2, ...])",
        example: "=MIN(D1:D30)"
    },
    {
        id: 57,
        name: "ROUND",
        category: "Базовые",
        description: "Округляет число до указанного количества знаков.",
        syntax: "=ROUND(value, [places])",
        example: "=ROUND(E1, 2)"
    },
    {
        id: 58,
        name: "ROUNDUP",
        category: "Базовые",
        description: "Округляет число вверх.",
        syntax: "=ROUNDUP(value, [places])",
        example: "=ROUNDUP(E1, 0)"
    },
    {
        id: 59,
        name: "ROUNDDOWN",
        category: "Базовые",
        description: "Округляет число вниз.",
        syntax: "=ROUNDDOWN(value, [places])",
        example: "=ROUNDDOWN(E1, 0)"
    },
    {
        id: 60,
        name: "TODAY",
        category: "Базовые",
        description: "Возвращает текущую дату.",
        syntax: "=TODAY()",
        example: "=TODAY()"
    },

    // --- ЧАСТО ИСПОЛЬЗУЕМЫЕ ---
    {
        id: 61,
        name: "COUNTIF",
        category: "Часто используемые",
        description: "Считает ячейки, удовлетворяющие условию.",
        syntax: "=COUNTIF(range, criterion)",
        example: "=COUNTIF(A1:A100, \">10\")"
    },
    {
        id: 62,
        name: "COUNTIFS",
        category: "Часто используемые",
        description: "Считает ячейки по нескольким условиям.",
        syntax: "=COUNTIFS(criteria_range1, criterion1, [criteria_range2, criterion2, ...])",
        example: "=COUNTIFS(A1:A100, \">10\", B1:B100, \"Да\")"
    },
    {
        id: 63,
        name: "SUMIF",
        category: "Часто используемые",
        description: "Суммирует значения по одному условию.",
        syntax: "=SUMIF(range, criterion, [sum_range])",
        example: "=SUMIF(A1:A100, \"Продажи\", B1:B100)"
    },
    {
        id: 64,
        name: "SUMIFS",
        category: "Часто используемые",
        description: "Суммирует значения по нескольким условиям.",
        syntax: "=SUMIFS(sum_range, criteria_range1, criterion1, [criteria_range2, criterion2, ...])",
        example: "=SUMIFS(C1:C100, A1:A100, \"Продажи\", B1:B100, \">=01.01.2026\")"
    },
    {
        id: 65,
        name: "NOW",
        category: "Часто используемые",
        description: "Возвращает текущие дату и время.",
        syntax: "=NOW()",
        example: "=NOW()"
    },
    {
        id: 66,
        name: "IFNA",
        category: "Часто используемые",
        description: "Возвращает запасное значение только при ошибке #N/A.",
        syntax: "=IFNA(value, value_if_na)",
        example: "=IFNA(VLOOKUP(A1, D:E, 2, FALSE), \"Нет данных\")"
    },
    {
        id: 67,
        name: "TRIM",
        category: "Часто используемые",
        description: "Удаляет лишние пробелы в тексте.",
        syntax: "=TRIM(text)",
        example: "=TRIM(A1)"
    },
    {
        id: 68,
        name: "SUBSTITUTE",
        category: "Часто используемые",
        description: "Заменяет одну подстроку на другую.",
        syntax: "=SUBSTITUTE(text, search_for, replace_with, [occurrence_number])",
        example: "=SUBSTITUTE(A1, \"-\", \"/\")"
    },
    {
        id: 69,
        name: "REGEXMATCH",
        category: "Часто используемые",
        description: "Проверяет, соответствует ли текст регулярному выражению.",
        syntax: "=REGEXMATCH(text, regular_expression)",
        example: "=REGEXMATCH(A1, \"^[A-Z]{3}-\\\\d{4}$\")"
    },
    {
        id: 70,
        name: "EOMONTH",
        category: "Часто используемые",
        description: "Возвращает последний день месяца со смещением.",
        syntax: "=EOMONTH(start_date, months)",
        example: "=EOMONTH(A1, 1)"
    }
];

const ARGUMENT_HINTS = {
    condition: 'условие, которое нужно проверить',
    value_if_true: 'что вернуть, если условие истинно',
    value_if_false: 'что вернуть, если условие ложно',
    value: 'основное проверяемое выражение или значение',
    value_if_error: 'что показать вместо ошибки',
    logical1: 'первое логическое условие',
    logical2: 'дополнительное логическое условие',
    logical_expression: 'логическое выражение для инверсии',
    cond1: 'первое условие проверки',
    val1: 'результат для первого условия',
    cond2: 'второе условие проверки',
    val2: 'результат для второго условия',
    expression: 'значение, которое сравнивается с вариантами',
    case1: 'первый вариант для сравнения',
    value1: 'результат для соответствующего варианта',
    search_key: 'что нужно найти',
    range: 'диапазон ячеек для работы функции',
    index: 'номер строки/столбца или позиция результата',
    is_sorted: 'признак сортировки (TRUE/FALSE)',
    lookup_range: 'где искать значение',
    result_range: 'откуда брать найденный результат',
    row: 'номер строки внутри диапазона',
    column: 'номер столбца внутри диапазона',
    type: 'режим точного/приближенного совпадения',
    search_range: 'диапазон, в котором выполняется поиск',
    ref: 'базовая ссылка для смещения',
    rows: 'смещение/количество по строкам',
    cols: 'смещение/количество по столбцам',
    ref_text: 'текстовая ссылка на ячейку или диапазон',
    delimiter: 'разделитель текста',
    text: 'исходный текст',
    ignore_empty: 'нужно ли пропускать пустые ячейки',
    num_chars: 'сколько символов извлечь',
    start: 'позиция начала извлечения',
    length: 'длина извлекаемого фрагмента',
    data: 'таблица или диапазон данных',
    query: 'текст SQL-подобного запроса',
    formula: 'выражение, которое применится ко всему диапазону',
    n: 'количество записей в результате',
    is_asc: 'порядок сортировки: TRUE по возрастанию',
    count: 'сколько значений объединять в группу',
    url: 'ссылка на внешний ресурс',
    xpath: 'XPath-путь к нужному элементу',
    ticker: 'биржевой тикер инструмента',
    label: 'отображаемый текст ссылки',
    source: 'язык исходного текста',
    target: 'язык перевода',
};

const EXAMPLE_NARRATIVES = {
    IF: {
        calculation: 'Если в A1 стоит 12, условие A1 > 10 выполняется, поэтому функция выбирает значение "Много".',
        result: 'Вход: A1 = 12, формула =IF(A1 > 10, "Много", "Мало"). Выход: "Много".',
    },
    IFERROR: {
        calculation: 'Когда VLOOKUP не находит A1 в диапазоне B:C, возникает ошибка, и IFERROR подставляет "Не найдено".',
        result: 'Вход: A1 = "SKU-9", в диапазоне B:C такого ключа нет. Выход: "Не найдено" вместо ошибки.',
    },
    AND: {
        calculation: 'При A1 = 5 и B1 = 3 оба условия (>0) истинны, значит итог будет TRUE.',
        result: 'Вход: A1 = 5 и B1 = 3 в формуле =AND(A1>0, B1>0). Выход: TRUE.',
    },
    OR: {
        calculation: 'Если A1 = -2, а B1 = 3, одно из условий (>0) истинно, значит OR вернет TRUE.',
        result: 'Вход: A1 = -2 и B1 = 3 в формуле =OR(A1>0, B1>0). Выход: TRUE.',
    },
    NOT: {
        calculation: 'При A1 = 12 выражение A1>10 даёт TRUE, а NOT инвертирует его в FALSE.',
        result: 'Вход: A1 = 12, проверка A1>10 дает TRUE. Выход: FALSE после применения NOT.',
    },
    IFS: {
        calculation: 'Если A1 = 85, условие A1>90 ложно, но A1>70 истинно, поэтому выбирается "B".',
        result: 'Вход: A1 = 85, формула =IFS(A1>90, "A", A1>70, "B"). Выход: "B".',
    },
    SWITCH: {
        calculation: 'Если A1 = 2, значение expression совпадает с case 2, поэтому возвращается "Two".',
        result: 'Вход: A1 = 2, формула =SWITCH(A1, 1, "One", 2, "Two"). Выход: "Two".',
    },
    ISBLANK: {
        calculation: 'Если A1 пустая, ISBLANK(A1) вернет TRUE.',
        result: 'Вход: ячейка A1 пустая. Выход: TRUE.',
    },
    ISNUMBER: {
        calculation: 'Если в A1 число 150, функция определяет его как числовой тип.',
        result: 'Вход: в A1 значение 150. Выход: TRUE.',
    },
    ISTEXT: {
        calculation: 'Если в A1 записано "ID-01", функция распознает тип как текст.',
        result: 'Вход: в A1 значение "ID-01". Выход: TRUE.',
    },
    VLOOKUP: {
        calculation: 'Функция ищет ключ из A1 в первом столбце диапазона A:C и берёт значение из 2-го столбца.',
        result: 'Вход: A1 = "SKU-2", в A:C есть строка "SKU-2 | 450 | В наличии". Выход: 450.',
    },
    HLOOKUP: {
        calculation: 'Ключ из A1 ищется в первой строке диапазона A1:D2, затем возвращается значение из 2-й строки.',
        result: 'Вход: A1 = "Feb", первая строка = Jan, Feb, Mar, вторая = 100, 120, 90. Выход: 120.',
    },
    XLOOKUP: {
        calculation: 'Значение из A1 ищется в столбце A:A, а ответ берется из той же позиции столбца B:B.',
        result: 'Вход: A1 = "Код-15", в A:A найдено "Код-15", а в той же строке B:B стоит "Доставка". Выход: "Доставка".',
    },
    INDEX: {
        calculation: 'INDEX(A1:C10, 2, 3) обращается ко 2-й строке и 3-му столбцу, это ячейка C2.',
        result: 'Вход: в диапазоне A1:C10 значение C2 = "Оплачен". Выход: "Оплачен".',
    },
    MATCH: {
        calculation: 'MATCH ищет значение A1 в B:B и возвращает его порядковую позицию.',
        result: 'Вход: A1 = "Иван", в B:B значения = Олег, Иван, Анна. Выход: 2.',
    },
    FILTER: {
        calculation: 'FILTER(A1:B10, B1:B10>10) оставляет только строки, где во втором столбце число больше 10.',
        result: 'Вход: строки (Товар A, 8), (Товар B, 15), (Товар C, 21). Выход: (Товар B, 15) и (Товар C, 21).',
    },
    LOOKUP: {
        calculation: 'LOOKUP сопоставляет ключ из A1 с диапазоном A:A и возвращает значение из B:B.',
        result: 'Вход: A1 = 220, A:A = 100, 200, 300, B:B = Bronze, Silver, Gold. Выход: "Silver".',
    },
    CHOOSE: {
        calculation: 'CHOOSE(2, "A", "B") выбирает элемент с индексом 2 из списка аргументов.',
        result: 'Вход: формула =CHOOSE(2, "A", "B"). Выход: "B".',
    },
    OFFSET: {
        calculation: 'OFFSET(A1, 2, 1) смещает ссылку на 2 строки вниз и 1 столбец вправо — к B3.',
        result: 'Вход: исходная точка A1, смещение на 2 строки и 1 столбец, в B3 хранится 980. Выход: 980.',
    },
    INDIRECT: {
        calculation: 'INDIRECT("A1") превращает текст "A1" в рабочую ссылку на ячейку.',
        result: 'Вход: в A1 записано "Отчет", формула =INDIRECT("A1"). Выход: "Отчет".',
    },
    SPLIT: {
        calculation: 'Если A1 содержит "Иван,Петров", SPLIT по запятой разделит строку на части.',
        result: 'Вход: A1 = "Иван,Петров". Выход: в соседних ячейках "Иван" и "Петров".',
    },
    JOIN: {
        calculation: 'JOIN(",", A1:A5) объединяет все значения диапазона в одну строку через запятую.',
        result: 'Вход: A1:A3 = Киев, Львов, Одесса. Выход: "Киев,Львов,Одесса".',
    },
    CONCAT: {
        calculation: 'CONCAT(A1, B1) склеивает содержимое двух ячеек без разделителя.',
        result: 'Вход: A1 = "INV-", B1 = "105". Выход: "INV-105".',
    },
    TEXTJOIN: {
        calculation: 'TEXTJOIN(",", TRUE, A1:A5) объединяет диапазон через запятую и пропускает пустые ячейки.',
        result: 'Вход: A1:A4 = Анна, (пусто), Игорь, Оля. Выход: "Анна,Игорь,Оля".',
    },
    LEFT: {
        calculation: 'LEFT(A1, 4) берет первые 4 символа из текста в A1.',
        result: 'Вход: A1 = "ABCD-789", формула =LEFT(A1, 4). Выход: "ABCD".',
    },
    RIGHT: {
        calculation: 'RIGHT(A1, 2) возвращает последние 2 символа значения.',
        result: 'Вход: A1 = "ABCD-789", формула =RIGHT(A1, 2). Выход: "89".',
    },
    MID: {
        calculation: 'MID(A1, 2, 3) начинает со 2-го символа и извлекает 3 символа подряд.',
        result: 'Вход: A1 = "ABCD-789", формула =MID(A1, 2, 3). Выход: "BCD".',
    },
    LEN: {
        calculation: 'LEN(A1) подсчитывает все символы в ячейке, включая цифры, буквы и пробелы.',
        result: 'Вход: A1 = "ID 105". Выход: 6.',
    },
    LOWER: {
        calculation: 'LOWER(A1) преобразует все буквы в тексте к нижнему регистру.',
        result: 'Вход: A1 = "Sales Q1". Выход: "sales q1".',
    },
    UPPER: {
        calculation: 'UPPER(A1) делает все буквы заглавными.',
        result: 'Вход: A1 = "Sales Q1". Выход: "SALES Q1".',
    },
    QUERY: {
        calculation: 'QUERY(A1:C, "SELECT A") выбирает из диапазона только столбец A.',
        result: 'Вход: таблица A:C с именами в столбце A (Иван, Ольга, Мария). Выход: отдельный столбец с Иван, Ольга, Мария.',
    },
    ARRAYFORMULA: {
        calculation: 'ARRAYFORMULA(A1:A*B1:B) применяет умножение построчно ко всему диапазону сразу.',
        result: 'Вход: A1:A3 = 2,3,4 и B1:B3 = 10,5,8. Выход: столбец 20, 15, 32.',
    },
    UNIQUE: {
        calculation: 'UNIQUE(A1:A) проходит по списку и удаляет повторяющиеся значения.',
        result: 'Вход: A1:A5 = A, B, A, C, B. Выход: A, B, C.',
    },
    SORT: {
        calculation: 'SORT(A1:B, 2, TRUE) сортирует таблицу по 2-му столбцу по возрастанию.',
        result: 'Вход: (Товар A, 30), (Товар B, 10), (Товар C, 20). Выход: (Товар B, 10), (Товар C, 20), (Товар A, 30).',
    },
    SORTN: {
        calculation: 'SORTN(A1:B, 5) сортирует данные и оставляет первые 5 строк.',
        result: 'Вход: таблица из 7 строк и n = 5. Выход: первые 5 строк отсортированного результата.',
    },
    TRANSPOSE: {
        calculation: 'TRANSPOSE(A1:B2) меняет местами строки и столбцы выбранного диапазона.',
        result: 'Вход: матрица [1 2; 3 4]. Выход: матрица [1 3; 2 4].',
    },
    SEQUENCE: {
        calculation: 'SEQUENCE(5) генерирует последовательность 1, 2, 3, 4, 5 в одном столбце.',
        result: 'Вход: формула =SEQUENCE(5). Выход: 1, 2, 3, 4, 5 по строкам.',
    },
    FLATTEN: {
        calculation: 'FLATTEN(A1:C3) собирает значения из матрицы в один длинный столбец.',
        result: 'Вход: диапазон [A B C; D E F]. Выход: столбец A, B, C, D, E, F.',
    },
    WRAPROWS: {
        calculation: 'WRAPROWS(A1:A10, 3) группирует поток значений в строки по 3 элемента.',
        result: 'Вход: A1:A7 = 1,2,3,4,5,6,7 и count = 3. Выход: строки [1,2,3], [4,5,6], [7].',
    },
    WRAPCOLS: {
        calculation: 'WRAPCOLS(A1:A10, 3) разбивает список на столбцы по 3 элемента.',
        result: 'Вход: A1:A7 = 1,2,3,4,5,6,7 и count = 3. Выход: столбцы [1,2,3], [4,5,6], [7].',
    },
    IMPORTRANGE: {
        calculation: 'IMPORTRANGE("url", "Sheet1!A1:B10") подтягивает диапазон из внешней таблицы.',
        result: 'Вход: внешний диапазон Sheet1!A1:B3 = Товар/Цена: Кофе-120, Чай-80, Сок-95. Выход: те же 3 строки в текущем листе.',
    },
    IMPORTHTML: {
        calculation: 'IMPORTHTML("url", "table", 1) получает первую HTML-таблицу со страницы.',
        result: 'Вход: страница с таблицей (Город | Население). Выход: эта таблица появляется в ячейках Google Sheets.',
    },
    IMPORTXML: {
        calculation: 'IMPORTXML("url", "//title") извлекает текст тега title по XPath.',
        result: 'Вход: URL страницы и XPath //title. Выход: текст заголовка страницы, например "Google Sheets Help".',
    },
    IMPORTDATA: {
        calculation: 'IMPORTDATA("url") загружает CSV/TSV-файл по ссылке и разбивает его по колонкам.',
        result: 'Вход: CSV с колонками date, sales и строкой 2026-03-01,1200. Выход: отдельные столбцы date и sales с данными.',
    },
    GOOGLEFINANCE: {
        calculation: 'GOOGLEFINANCE("GOOG") запрашивает рыночные данные по тикеру GOOG.',
        result: 'Вход: тикер "GOOG". Выход: текущая котировка и сопутствующие рыночные поля по инструменту GOOG.',
    },
    IMAGE: {
        calculation: 'IMAGE("url") вставляет изображение по ссылке в ячейку.',
        result: 'Вход: URL изображения товара. Выход: картинка отображается прямо в ячейке.',
    },
    HYPERLINK: {
        calculation: 'HYPERLINK("url", "Открыть") создает кликабельную ссылку с подписью.',
        result: 'Вход: url = "https://example.com", label = "Открыть". Выход: кликабельный текст "Открыть".',
    },
    ENCODEURL: {
        calculation: 'ENCODEURL(A1) заменяет пробелы и спецсимволы на безопасный URL-формат.',
        result: 'Вход: A1 = "sales report 2026". Выход: "sales%20report%202026".',
    },
    GOOGLETRANSLATE: {
        calculation: 'GOOGLETRANSLATE(A1, "en", "ru") переводит текст из A1 с английского на русский.',
        result: 'Вход: A1 = "Hello", source = "en", target = "ru". Выход: "Привет".',
    },
    SPARKLINE: {
        calculation: 'SPARKLINE(A1:A10) строит мини-график по набору чисел прямо в ячейке.',
        result: 'Вход: A1:A5 = 12, 16, 14, 20, 18. Выход: мини-график с пиком на значении 20.',
    },
    SUM: {
        calculation: 'SUM(A1:A10) складывает все числовые значения в указанном диапазоне и игнорирует пустые ячейки.',
        result: 'Вход: A1:A4 = 120, 80, 50, 30. Выход: 280.',
    },
    AVERAGE: {
        calculation: 'AVERAGE(B1:B10) суммирует числа диапазона и делит сумму на количество числовых значений.',
        result: 'Вход: B1:B4 = 10, 20, 30, 40. Выход: 25.',
    },
    COUNT: {
        calculation: 'COUNT(C1:C20) считает только ячейки с числами, текст и пустые значения не учитываются.',
        result: 'Вход: C1:C6 = 5, "тест", 12, (пусто), 7, "N/A". Выход: 3.',
    },
    COUNTA: {
        calculation: 'COUNTA(A1:A20) считает все непустые ячейки независимо от типа данных: число, текст, дата, логическое значение.',
        result: 'Вход: A1:A5 = "Иван", 120, (пусто), TRUE, "Отчет". Выход: 4.',
    },
    MAX: {
        calculation: 'MAX(D1:D30) проходит по диапазону и возвращает наибольшее числовое значение.',
        result: 'Вход: D1:D5 = 18, 42, 7, 35, 29. Выход: 42.',
    },
    MIN: {
        calculation: 'MIN(D1:D30) определяет минимальное число в диапазоне.',
        result: 'Вход: D1:D5 = 18, 42, 7, 35, 29. Выход: 7.',
    },
    ROUND: {
        calculation: 'ROUND(E1, 2) округляет число по стандартным правилам до 2 знаков после запятой.',
        result: 'Вход: E1 = 12.3456. Выход: 12.35.',
    },
    ROUNDUP: {
        calculation: 'ROUNDUP(E1, 0) округляет число вверх до целого, даже если дробная часть меньше 0.5.',
        result: 'Вход: E1 = 12.01. Выход: 13.',
    },
    ROUNDDOWN: {
        calculation: 'ROUNDDOWN(E1, 0) всегда округляет число вниз до целого, отбрасывая дробную часть.',
        result: 'Вход: E1 = 12.99. Выход: 12.',
    },
    TODAY: {
        calculation: 'TODAY() возвращает текущую системную дату без времени и обновляется при пересчете таблицы.',
        result: 'Вход: формула =TODAY() при дате системы 30.03.2026. Выход: 30.03.2026.',
    },
    COUNTIF: {
        calculation: 'COUNTIF(A1:A100, ">10") проверяет каждую ячейку диапазона и считает только значения больше 10.',
        result: 'Вход: A1:A6 = 5, 11, 18, 9, 14, 3. Выход: 3.',
    },
    COUNTIFS: {
        calculation: 'COUNTIFS(A1:A100, ">10", B1:B100, "Да") считает строки, где одновременно выполнены оба условия.',
        result: 'Вход: строки (12, Да), (15, Нет), (8, Да), (21, Да). Выход: 2.',
    },
    SUMIF: {
        calculation: 'SUMIF(A1:A100, "Продажи", B1:B100) находит строки, где в столбце A указано "Продажи", и суммирует соответствующие значения из столбца B.',
        result: 'Вход: (Продажи, 1200), (Маркетинг, 500), (Продажи, 800). Выход: 2000.',
    },
    SUMIFS: {
        calculation: 'SUMIFS(C1:C100, A1:A100, "Продажи", B1:B100, ">=01.01.2026") суммирует C только для строк, где отдел = "Продажи" и дата соответствует условию.',
        result: 'Вход: (Продажи, 05.01.2026, 900), (Продажи, 20.12.2025, 700), (Продажи, 15.02.2026, 1100). Выход: 2000.',
    },
    NOW: {
        calculation: 'NOW() возвращает текущие дату и время по системным настройкам таблицы.',
        result: 'Вход: формула =NOW() при дате и времени системы 30.03.2026 16:45. Выход: 30.03.2026 16:45.',
    },
    IFNA: {
        calculation: 'IFNA(VLOOKUP(A1, D:E, 2, FALSE), "Нет данных") показывает запасной текст только если поиск возвращает ошибку #N/A.',
        result: 'Вход: A1 = "SKU-9", в D:E такого ключа нет. Выход: "Нет данных".',
    },
    TRIM: {
        calculation: 'TRIM(A1) удаляет лишние пробелы в начале и конце строки, а между словами оставляет только один пробел.',
        result: 'Вход: A1 = "  Отчет   за   март  ". Выход: "Отчет за март".',
    },
    SUBSTITUTE: {
        calculation: 'SUBSTITUTE(A1, "-", "/") заменяет все вхождения символа "-" на "/" в тексте.',
        result: 'Вход: A1 = "2026-03-30". Выход: "2026/03/30".',
    },
    REGEXMATCH: {
        calculation: 'REGEXMATCH(A1, "^[A-Z]{3}-\\\\d{4}$") проверяет, соответствует ли текст шаблону: 3 заглавные буквы, дефис и 4 цифры.',
        result: 'Вход: A1 = "ABC-1234". Выход: TRUE.',
    },
    EOMONTH: {
        calculation: 'EOMONTH(A1, 1) берёт дату из A1, сдвигает на 1 месяц вперед и возвращает последний день этого месяца.',
        result: 'Вход: A1 = 15.01.2026. Выход: 28.02.2026.',
    },
};

const extractSyntaxArgs = (syntax) => {
    const start = syntax.indexOf('(');
    const end = syntax.lastIndexOf(')');

    if (start === -1 || end === -1 || end <= start + 1) {
        return [];
    }

    return syntax
        .slice(start + 1, end)
        .replace(/\[/g, '')
        .replace(/\]/g, '')
        .split(',')
        .map((arg) => arg.replace(/\.\.\./g, '').trim())
        .filter(Boolean);
};

const buildVariablesLegend = (syntax) => {
    const args = extractSyntaxArgs(syntax);
    const uniqueArgs = [...new Set(args)];

    if (!uniqueArgs.length) {
        return ['без аргументов — функция работает только с собственными настройками'];
    }

    return uniqueArgs.map((arg) => `${arg} — ${ARGUMENT_HINTS[arg] ?? 'рабочий аргумент функции'}`);
};

const buildExampleDetails = (formula) => {
    const narrative = EXAMPLE_NARRATIVES[formula.name] ?? {
        calculation: `Используйте пример ${formula.example} и подставьте свои диапазоны/значения по аналогии.`,
        result: `Результат покажет итог вычисления для функции ${formula.name}.`,
    };

    return {
        purpose: formula.description,
        variables: buildVariablesLegend(formula.syntax),
        calculation: narrative.calculation,
        result: narrative.result,
    };
};

export const formulas = baseFormulas.map((formula) => ({
    ...formula,
    exampleDetails: buildExampleDetails(formula),
}));
