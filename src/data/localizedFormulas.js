import { formulas as rawFormulas } from './formulas';
import { DEFAULT_LOCALE, SOURCE_CATEGORY_ID_MAP, getCategoryLabel, isSupportedLocale } from '../i18n';

const FORMULA_DESCRIPTIONS = {
  en: {
    IF: 'Checks a condition and returns one value if it is true and another if it is false.',
    IFERROR: 'Returns the original value, and for any error returns a fallback value or blank.',
    AND: 'Returns TRUE when all conditions are met.',
    OR: 'Returns TRUE when at least one condition is met.',
    NOT: 'Reverses a logical value.',
    IFS: 'Checks several conditions in sequence and returns the value for the first TRUE result.',
    SWITCH: 'Matches an expression against cases and can return a default value.',
    ISBLANK: 'Checks whether a reference points to a truly empty cell.',
    ISNUMBER: 'Checks whether a value is numeric.',
    ISTEXT: 'Checks whether a value is text.',
    VLOOKUP: 'Looks up a value vertically.',
    HLOOKUP: 'Looks up a value horizontally.',
    XLOOKUP: 'Performs a flexible lookup in any direction.',
    INDEX: 'Returns a value by its position.',
    MATCH: 'Finds the position of an item.',
    FILTER: 'Filters a range by a condition.',
    LOOKUP: 'Looks up a value in a sorted range and can return the nearest lower match.',
    CHOOSE: 'Returns a value by index.',
    OFFSET: 'Returns a range shifted from a reference.',
    INDIRECT: 'Builds a reference from text.',
    SPLIT: 'Splits text into parts.',
    JOIN: 'Joins text together.',
    CONCAT: 'Combines strings.',
    TEXTJOIN: 'Combines values with a delimiter.',
    LEFT: 'Returns characters from the left side.',
    RIGHT: 'Returns characters from the right side.',
    MID: 'Returns text from the middle.',
    LEN: 'Returns the length of a string.',
    LOWER: 'Converts text to lowercase.',
    UPPER: 'Converts text to uppercase.',
    QUERY: 'Runs SQL-like queries on data.',
    ARRAYFORMULA: 'Works with array calculations.',
    UNIQUE: 'Removes duplicate values.',
    SORT: 'Sorts data.',
    SORTN: 'Sorts data and limits the result.',
    TRANSPOSE: 'Swaps rows and columns.',
    SEQUENCE: 'Generates a sequence of numbers.',
    FLATTEN: 'Flattens an array into one column.',
    WRAPROWS: 'Wraps values into rows.',
    WRAPCOLS: 'Wraps values into columns.',
    IMPORTRANGE: 'Imports data from another spreadsheet.',
    IMPORTHTML: 'Imports data from a web page.',
    IMPORTXML: 'Imports data through XPath.',
    IMPORTDATA: 'Imports CSV or TSV data.',
    GOOGLEFINANCE: 'Returns financial market data.',
    IMAGE: 'Inserts an image into a cell.',
    HYPERLINK: 'Creates a hyperlink.',
    ENCODEURL: 'Encodes text for use in a URL.',
    GOOGLETRANSLATE: 'Translates text.',
    SPARKLINE: 'Creates a mini chart inside a cell.',
    SUM: 'Adds numbers in a range.',
    AVERAGE: 'Returns the arithmetic mean.',
    COUNT: 'Counts numeric values.',
    COUNTA: 'Counts non-empty cells.',
    MAX: 'Returns the maximum value.',
    MIN: 'Returns the minimum value.',
    ROUND: 'Rounds a number to the specified number of digits.',
    ROUNDUP: 'Rounds a number up.',
    ROUNDDOWN: 'Rounds a number down.',
    TODAY: 'Returns the current date.',
    COUNTIF: 'Counts cells that meet one condition.',
    COUNTIFS: 'Counts cells that meet multiple conditions.',
    SUMIF: 'Sums values based on one condition.',
    SUMIFS: 'Sums values based on multiple conditions.',
    NOW: 'Returns the current date and time.',
    IFNA: 'Returns a fallback value only for #N/A errors.',
    TRIM: 'Removes extra spaces from text.',
    SUBSTITUTE: 'Replaces one substring with another.',
    REGEXMATCH: 'Checks whether text matches a regular expression.',
    EOMONTH: 'Returns the last day of a month with an offset.',
    DATE: 'Builds a date from year, month, and day.',
    DATEDIF: 'Calculates the difference between two dates in selected units.',
    WORKDAY: 'Returns a working date shifted by business days.',
    NETWORKDAYS: 'Counts working days between two dates.',
    WEEKDAY: 'Returns the weekday number for a date.',
    MONTH: 'Returns the month number from a date.',
    YEAR: 'Returns the year from a date.',
    TIME: 'Builds a time value from hours, minutes, and seconds.',
    HOUR: 'Returns the hour from a time value.',
    MINUTE: 'Returns the minute from a time value.',
  },
  ua: {
    IF: 'Перевіряє умову й повертає одне значення, якщо вона істинна, та інше, якщо ні.',
    IFERROR: 'Повертає вихідне значення, а для будь-якої помилки — запасне значення або порожній результат.',
    AND: 'Повертає TRUE, якщо всі умови виконуються.',
    OR: 'Повертає TRUE, якщо виконується хоча б одна умова.',
    NOT: 'Інвертує логічне значення.',
    IFS: 'Послідовно перевіряє кілька умов і повертає значення для першого TRUE.',
    SWITCH: 'Порівнює вираз зі списком варіантів і може повернути значення за замовчуванням.',
    ISBLANK: 'Перевіряє, чи посилання вказує на справді порожню комірку.',
    ISNUMBER: 'Перевіряє, чи є значення числом.',
    ISTEXT: 'Перевіряє, чи є значення текстом.',
    VLOOKUP: 'Шукає значення по вертикалі.',
    HLOOKUP: 'Шукає значення по горизонталі.',
    XLOOKUP: 'Виконує універсальний пошук у будь-якому напрямку.',
    INDEX: 'Повертає значення за позицією.',
    MATCH: 'Знаходить позицію елемента.',
    FILTER: 'Фільтрує діапазон за умовою.',
    LOOKUP: 'Шукає значення у відсортованому діапазоні й може повернути найближчий менший збіг.',
    CHOOSE: 'Повертає значення за індексом.',
    OFFSET: 'Повертає діапазон зі зміщенням відносно посилання.',
    INDIRECT: 'Створює посилання з тексту.',
    SPLIT: 'Розбиває текст на частини.',
    JOIN: 'Об’єднує текст.',
    CONCAT: 'Поєднує рядки.',
    TEXTJOIN: 'Об’єднує значення з роздільником.',
    LEFT: 'Повертає символи зліва.',
    RIGHT: 'Повертає символи справа.',
    MID: 'Повертає текст із середини.',
    LEN: 'Повертає довжину рядка.',
    LOWER: 'Перетворює текст на нижній регістр.',
    UPPER: 'Перетворює текст на верхній регістр.',
    QUERY: 'Виконує SQL-подібні запити до даних.',
    ARRAYFORMULA: 'Працює з обчисленнями масивів.',
    UNIQUE: 'Прибирає дублікати.',
    SORT: 'Сортує дані.',
    SORTN: 'Сортує дані та обмежує результат.',
    TRANSPOSE: 'Міняє місцями рядки та стовпці.',
    SEQUENCE: 'Генерує послідовність чисел.',
    FLATTEN: 'Стискає масив в один стовпець.',
    WRAPROWS: 'Розкладає значення по рядках.',
    WRAPCOLS: 'Розкладає значення по стовпцях.',
    IMPORTRANGE: 'Імпортує дані з іншої таблиці.',
    IMPORTHTML: 'Імпортує дані з вебсторінки.',
    IMPORTXML: 'Імпортує дані через XPath.',
    IMPORTDATA: 'Імпортує дані CSV або TSV.',
    GOOGLEFINANCE: 'Повертає фінансові ринкові дані.',
    IMAGE: 'Вставляє зображення в комірку.',
    HYPERLINK: 'Створює гіперпосилання.',
    ENCODEURL: 'Кодує текст для використання в URL.',
    GOOGLETRANSLATE: 'Перекладає текст.',
    SPARKLINE: 'Створює мініграфік у комірці.',
    SUM: 'Додає числа в діапазоні.',
    AVERAGE: 'Повертає середнє арифметичне.',
    COUNT: 'Рахує числові значення.',
    COUNTA: 'Рахує непорожні комірки.',
    MAX: 'Повертає максимальне значення.',
    MIN: 'Повертає мінімальне значення.',
    ROUND: 'Округлює число до вказаної кількості знаків.',
    ROUNDUP: 'Округлює число вгору.',
    ROUNDDOWN: 'Округлює число вниз.',
    TODAY: 'Повертає поточну дату.',
    COUNTIF: 'Рахує комірки, що відповідають одній умові.',
    COUNTIFS: 'Рахує комірки, що відповідають кільком умовам.',
    SUMIF: 'Підсумовує значення за однією умовою.',
    SUMIFS: 'Підсумовує значення за кількома умовами.',
    NOW: 'Повертає поточні дату й час.',
    IFNA: 'Повертає запасне значення лише для помилки #N/A.',
    TRIM: 'Видаляє зайві пробіли з тексту.',
    SUBSTITUTE: 'Замінює один підрядок іншим.',
    REGEXMATCH: 'Перевіряє, чи відповідає текст регулярному виразу.',
    EOMONTH: 'Повертає останній день місяця зі зміщенням.',
    DATE: 'Створює дату з року, місяця та дня.',
    DATEDIF: 'Обчислює різницю між двома датами у вибраних одиницях.',
    WORKDAY: 'Повертає робочу дату зі зміщенням на робочі дні.',
    NETWORKDAYS: 'Рахує кількість робочих днів між двома датами.',
    WEEKDAY: 'Повертає номер дня тижня для дати.',
    MONTH: 'Повертає номер місяця з дати.',
    YEAR: 'Повертає рік з дати.',
    TIME: 'Створює значення часу з годин, хвилин і секунд.',
    HOUR: 'Повертає годину зі значення часу.',
    MINUTE: 'Повертає хвилину зі значення часу.',
  },
};

const FORMULA_EXAMPLE_OVERRIDES = {
  en: {
    IF: '=IF(A1 > 10, "High", "Low")',
    IFERROR: '=IFERROR(VLOOKUP(A1, B:C, 2, 0), "Not found")',
    HYPERLINK: '=HYPERLINK("url", "Open")',
    GOOGLETRANSLATE: '=GOOGLETRANSLATE(A1, "en", "es")',
    COUNTIFS: '=COUNTIFS(A1:A100, ">10", B1:B100, "Yes")',
    SUMIF: '=SUMIF(A1:A100, "Sales", B1:B100)',
    SUMIFS: '=SUMIFS(C1:C100, A1:A100, "Sales", B1:B100, ">="&DATE(2026, 1, 1))',
    IFNA: '=IFNA(VLOOKUP(A1, D:E, 2, FALSE), "No data")',
  },
  ua: {
    IF: '=IF(A1 > 10, "High", "Low")',
    IFERROR: '=IFERROR(VLOOKUP(A1, B:C, 2, 0), "Not found")',
    HYPERLINK: '=HYPERLINK("url", "Open")',
    GOOGLETRANSLATE: '=GOOGLETRANSLATE(A1, "en", "uk")',
    COUNTIFS: '=COUNTIFS(A1:A100, ">10", B1:B100, "Yes")',
    SUMIF: '=SUMIF(A1:A100, "Sales", B1:B100)',
    SUMIFS: '=SUMIFS(C1:C100, A1:A100, "Sales", B1:B100, ">="&DATE(2026, 1, 1))',
    IFNA: '=IFNA(VLOOKUP(A1, D:E, 2, FALSE), "No data")',
  },
};

const FORMULA_EXAMPLE_NARRATIVES = {
  en: {
    IF: {
      calculation: 'If A1 contains 12, the condition A1 > 10 is met, so the function chooses the value "High".',
      result: 'Input: A1 = 12, formula =IF(A1 > 10, "High", "Low"). Output: "High".',
    },
    IFERROR: {
      calculation: 'When VLOOKUP does not find A1 in the B:C range, an error occurs, and IFERROR substitutes "Not found".',
      result: 'Input: A1 = "SKU-9", and there is no such key in B:C. Output: "Not found" instead of an error.',
    },
    AND: {
      calculation: 'With A1 = 5 and B1 = 3, both conditions (>0) are true, so the final result is TRUE.',
      result: 'Input: A1 = 5 and B1 = 3 in the formula =AND(A1>0, B1>0). Output: TRUE.',
    },
    OR: {
      calculation: 'If A1 = -2 and B1 = 3, one of the conditions (>0) is true, so OR returns TRUE.',
      result: 'Input: A1 = -2 and B1 = 3 in the formula =OR(A1>0, B1>0). Output: TRUE.',
    },
    NOT: {
      calculation: 'With A1 = 12, the expression A1>10 gives TRUE, and NOT flips it to FALSE.',
      result: 'Input: A1 = 12, the check A1>10 gives TRUE. Output: FALSE after applying NOT.',
    },
    IFS: {
      calculation: 'If A1 = 85, the condition A1>90 is false, but A1>70 is true, so "B" is selected.',
      result: 'Input: A1 = 85, formula =IFS(A1>90, "A", A1>70, "B"). Output: "B". If no condition matches, the function returns #N/A.',
    },
    SWITCH: {
      calculation: 'If A1 = 2, the expression value matches case 2, so "Two" is returned.',
      result: 'Input: A1 = 2, formula =SWITCH(A1, 1, "One", 2, "Two"). Output: "Two". If nothing matches and no default is provided, the function returns #N/A.',
    },
    ISBLANK: {
      calculation: 'If A1 is empty, ISBLANK(A1) returns TRUE.',
      result: 'Input: cell A1 is truly empty. Output: TRUE. A cell with a formula that returns "" is not considered blank.',
    },
    ISNUMBER: {
      calculation: 'If A1 contains the number 150, the function identifies it as a numeric type.',
      result: 'Input: A1 contains 150. Output: TRUE.',
    },
    ISTEXT: {
      calculation: 'If A1 contains "ID-01", the function recognizes the type as text.',
      result: 'Input: A1 contains "ID-01". Output: TRUE.',
    },
    VLOOKUP: {
      calculation: 'The function searches for the key from A1 in the first column of the A:C range and takes the value from the 2nd column.',
      result: 'Input: A1 = "SKU-2", and A:C contains the row "SKU-2 | 450 | In stock". Output: 450.',
    },
    HLOOKUP: {
      calculation: 'HLOOKUP("Feb", A1:D2, 2, FALSE) searches for "Feb" in the first row of the range and returns the value from the 2nd row of the same column.',
      result: 'Input: first row of A1:D2 = Jan, Feb, Mar, and second row = 100, 120, 90. Output: 120 from the Feb column.',
    },
    XLOOKUP: {
      calculation: 'The value from A1 is searched in column A:A, and the answer is taken from the same position in column B:B. If there is no match, the function can return the text "Not found".',
      result: 'Input: A1 = "Code-15", "Code-15" is found in A:A, and B:B on the same row contains "Delivery". Output: "Delivery".',
    },
    INDEX: {
      calculation: 'INDEX(A1:C10, 2, 3) points to the 2nd row and 3rd column, which is cell C2.',
      result: 'Input: in the A1:C10 range, C2 = "Paid". Output: "Paid".',
    },
    MATCH: {
      calculation: 'MATCH searches for the value from A1 in B:B and returns its position number.',
      result: 'Input: A1 = "Ivan", values in B:B = Oleg, Ivan, Anna. Output: 2.',
    },
    FILTER: {
      calculation: 'FILTER(A1:B10, B1:B10>10) keeps only the rows where the second column contains a number greater than 10.',
      result: 'Input: rows (Product A, 8), (Product B, 15), (Product C, 21). Output: (Product B, 15) and (Product C, 21).',
    },
    LOOKUP: {
      calculation: 'LOOKUP searches the sorted A:A range and, if there is no exact match, takes the last position that is less than or equal to the key.',
      result: 'Input: A1 = 220, A:A = 100, 200, 300, B:B = Bronze, Silver, Gold. Since 220 falls between 200 and 300, the function uses the row for 200. Output: "Silver".',
    },
    CHOOSE: {
      calculation: 'CHOOSE(2, "A", "B") selects the item with index 2 from the argument list.',
      result: 'Input: formula =CHOOSE(2, "A", "B"). Output: "B".',
    },
    OFFSET: {
      calculation: 'OFFSET(A1, 2, 1) shifts the reference 2 rows down and 1 column to the right, to B3.',
      result: 'Input: starting point A1, offset by 2 rows and 1 column, B3 contains 980. Output: 980.',
    },
    INDIRECT: {
      calculation: 'INDIRECT("A1") turns the text "A1" into a working cell reference.',
      result: 'Input: A1 contains "Report", formula =INDIRECT("A1"). Output: "Report".',
    },
    SPLIT: {
      calculation: 'If A1 contains "Ivan,Petrov", SPLIT with a comma separates the string into parts.',
      result: 'Input: A1 = "Ivan,Petrov". Output: "Ivan" and "Petrov" in adjacent cells.',
    },
    JOIN: {
      calculation: 'JOIN(",", A1:A5) combines all values from the range into one string separated by commas.',
      result: 'Input: A1:A3 = Kyiv, Lviv, Odesa. Output: "Kyiv,Lviv,Odesa".',
    },
    CONCAT: {
      calculation: 'CONCAT(A1, B1) joins the contents of two cells without a separator.',
      result: 'Input: A1 = "INV-", B1 = "105". Output: "INV-105".',
    },
    TEXTJOIN: {
      calculation: 'TEXTJOIN(",", TRUE, A1:A5) joins the range with commas and skips empty cells.',
      result: 'Input: A1:A4 = Anna, (empty), Igor, Olha. Output: "Anna,Igor,Olha".',
    },
    LEFT: {
      calculation: 'LEFT(A1, 4) takes the first 4 characters from the text in A1.',
      result: 'Input: A1 = "ABCD-789", formula =LEFT(A1, 4). Output: "ABCD".',
    },
    RIGHT: {
      calculation: 'RIGHT(A1, 2) returns the last 2 characters of the value.',
      result: 'Input: A1 = "ABCD-789", formula =RIGHT(A1, 2). Output: "89".',
    },
    MID: {
      calculation: 'MID(A1, 2, 3) starts from the 2nd character and extracts 3 consecutive characters.',
      result: 'Input: A1 = "ABCD-789", formula =MID(A1, 2, 3). Output: "BCD".',
    },
    LEN: {
      calculation: 'LEN(A1) counts all characters in the cell, including digits, letters, and spaces.',
      result: 'Input: A1 = "ID 105". Output: 6.',
    },
    LOWER: {
      calculation: 'LOWER(A1) converts all letters in the text to lowercase.',
      result: 'Input: A1 = "Sales Q1". Output: "sales q1".',
    },
    UPPER: {
      calculation: 'UPPER(A1) makes all letters uppercase.',
      result: 'Input: A1 = "Sales Q1". Output: "SALES Q1".',
    },
    QUERY: {
      calculation: 'QUERY(A1:C10, "select A", 1) selects only column A from the range and explicitly treats the first row as headers.',
      result: 'Input: A1:C10 where row 1 contains headers and column A below it contains Ivan, Olha, Maria. Output: column A without ambiguity from header auto-detection.',
    },
    ARRAYFORMULA: {
      calculation: 'ARRAYFORMULA(A1:A*B1:B) applies multiplication row by row to the whole range at once.',
      result: 'Input: A1:A3 = 2,3,4 and B1:B3 = 10,5,8. Output: column 20, 15, 32.',
    },
    UNIQUE: {
      calculation: 'UNIQUE(A1:A) goes through the list and removes duplicate values.',
      result: 'Input: A1:A5 = A, B, A, C, B. Output: A, B, C.',
    },
    SORT: {
      calculation: 'SORT(A1:B, 2, TRUE) sorts the table by the 2nd column in ascending order.',
      result: 'Input: (Product A, 30), (Product B, 10), (Product C, 20). Output: (Product B, 10), (Product C, 20), (Product A, 30).',
    },
    SORTN: {
      calculation: 'SORTN(A1:B, 5) sorts the data and keeps the first 5 rows.',
      result: 'Input: a table with 7 rows and n = 5. Output: the first 5 rows of the sorted result.',
    },
    TRANSPOSE: {
      calculation: 'TRANSPOSE(A1:B2) swaps rows and columns in the selected range.',
      result: 'Input: matrix [1 2; 3 4]. Output: matrix [1 3; 2 4].',
    },
    SEQUENCE: {
      calculation: 'SEQUENCE(5) generates the sequence 1, 2, 3, 4, 5 in a single column.',
      result: 'Input: formula =SEQUENCE(5). Output: 1, 2, 3, 4, 5 by rows.',
    },
    FLATTEN: {
      calculation: 'FLATTEN(A1:C3) gathers the values from the matrix into one long column.',
      result: 'Input: range [A B C; D E F]. Output: column A, B, C, D, E, F.',
    },
    WRAPROWS: {
      calculation: 'WRAPROWS(A1:A7, 3, "") groups the value stream into rows of 3 items each and fills the missing cells in the last row with an empty string.',
      result: 'Input: A1:A7 = 1,2,3,4,5,6,7 and count = 3. Output: rows [1,2,3], [4,5,6], [7,"",""] without trailing #N/A.',
    },
    WRAPCOLS: {
      calculation: 'WRAPCOLS(A1:A7, 3, "") splits the list into columns of 3 items each and fills the missing cells in the last column with an empty string.',
      result: 'Input: A1:A7 = 1,2,3,4,5,6,7 and count = 3. Output: columns [1,2,3], [4,5,6], [7,"",""] without trailing #N/A.',
    },
    IMPORTRANGE: {
      calculation: 'IMPORTRANGE("url", "Sheet1!A1:B10") pulls a range from an external spreadsheet.',
      result: 'Input: external range Sheet1!A1:B3 = Product/Price: Coffee-120, Tea-80, Juice-95. Output: the same 3 rows in the current sheet.',
    },
    IMPORTHTML: {
      calculation: 'IMPORTHTML("url", "table", 1) fetches the first HTML table from the page.',
      result: 'Input: a page with a table (City | Population). Output: that table appears in Google Sheets cells.',
    },
    IMPORTXML: {
      calculation: 'IMPORTXML("url", "//title") extracts the text of the title tag using XPath.',
      result: 'Input: page URL and XPath //title. Output: the page title text, for example "Google Sheets Help".',
    },
    IMPORTDATA: {
      calculation: 'IMPORTDATA("url") loads a CSV or TSV file from a link and splits it into columns.',
      result: 'Input: CSV with columns date, sales and row 2026-03-01,1200. Output: separate date and sales columns with the data.',
    },
    GOOGLEFINANCE: {
      calculation: 'GOOGLEFINANCE("NASDAQ:GOOG", "price") requests the current price attribute for GOOG on NASDAQ.',
      result: 'Input: ticker "NASDAQ:GOOG" and attribute "price". Output: the current price value for the instrument, if Google Finance supports it.',
    },
    IMAGE: {
      calculation: 'IMAGE("url") inserts an image from a link into a cell.',
      result: 'Input: product image URL. Output: the picture is displayed directly in the cell.',
    },
    HYPERLINK: {
      calculation: 'HYPERLINK("url", "Open") creates a clickable link with a label.',
      result: 'Input: url = "https://example.com", label = "Open". Output: clickable text "Open".',
    },
    ENCODEURL: {
      calculation: 'ENCODEURL(A1) replaces spaces and special characters with a URL-safe format.',
      result: 'Input: A1 = "sales report 2026". Output: "sales%20report%202026".',
    },
    GOOGLETRANSLATE: {
      calculation: 'GOOGLETRANSLATE(A1, "en", "es") translates the text in A1 from English to Spanish.',
      result: 'Input: A1 = "Hello", source = "en", target = "es". Output: "Hola".',
    },
    SPARKLINE: {
      calculation: 'SPARKLINE(A1:A10) builds a mini chart from a set of numbers directly in a cell.',
      result: 'Input: A1:A5 = 12, 16, 14, 20, 18. Output: a mini chart with a peak at 20.',
    },
    SUM: {
      calculation: 'SUM(A1:A10) adds all numeric values in the specified range and ignores empty cells.',
      result: 'Input: A1:A4 = 120, 80, 50, 30. Output: 280.',
    },
    AVERAGE: {
      calculation: 'AVERAGE(B1:B10) sums the numbers in the range and divides the total by the count of numeric values.',
      result: 'Input: B1:B4 = 10, 20, 30, 40. Output: 25.',
    },
    COUNT: {
      calculation: 'COUNT(C1:C20) counts only cells with numbers; text and empty values are ignored.',
      result: 'Input: C1:C6 = 5, "test", 12, (empty), 7, "N/A". Output: 3.',
    },
    COUNTA: {
      calculation: 'COUNTA(A1:A20) counts all non-empty cells regardless of data type: number, text, date, or logical value.',
      result: 'Input: A1:A5 = "Ivan", 120, (empty), TRUE, "Report". Output: 4.',
    },
    MAX: {
      calculation: 'MAX(D1:D30) scans the range and returns the largest numeric value.',
      result: 'Input: D1:D5 = 18, 42, 7, 35, 29. Output: 42.',
    },
    MIN: {
      calculation: 'MIN(D1:D30) determines the smallest number in the range.',
      result: 'Input: D1:D5 = 18, 42, 7, 35, 29. Output: 7.',
    },
    ROUND: {
      calculation: 'ROUND(E1, 2) rounds the number by standard rules to 2 decimal places.',
      result: 'Input: E1 = 12.3456. Output: 12.35.',
    },
    ROUNDUP: {
      calculation: 'ROUNDUP(E1, 0) rounds the number up to an integer, even if the fractional part is less than 0.5.',
      result: 'Input: E1 = 12.01. Output: 13.',
    },
    ROUNDDOWN: {
      calculation: 'ROUNDDOWN(E1, 0) always rounds the number down to an integer by dropping the fractional part.',
      result: 'Input: E1 = 12.99. Output: 12.',
    },
    TODAY: {
      calculation: 'TODAY() returns the current system date without time and updates when the sheet recalculates.',
      result: 'Input: formula =TODAY() when the system date is 30.03.2026. Output: 30.03.2026.',
    },
    COUNTIF: {
      calculation: 'COUNTIF(A1:A100, ">10") checks each cell in the range and counts only values greater than 10.',
      result: 'Input: A1:A6 = 5, 11, 18, 9, 14, 3. Output: 3.',
    },
    COUNTIFS: {
      calculation: 'COUNTIFS(A1:A100, ">10", B1:B100, "Yes") counts rows where both conditions are met at the same time.',
      result: 'Input: rows (12, Yes), (15, No), (8, Yes), (21, Yes). Output: 2.',
    },
    SUMIF: {
      calculation: 'SUMIF(A1:A100, "Sales", B1:B100) finds rows where column A contains "Sales" and sums the corresponding values from column B.',
      result: 'Input: (Sales, 1200), (Marketing, 500), (Sales, 800). Output: 2000.',
    },
    SUMIFS: {
      calculation: 'SUMIFS(C1:C100, A1:A100, "Sales", B1:B100, ">="&DATE(2026, 1, 1)) sums C only for rows where department = "Sales" and the date is not earlier than January 1, 2026.',
      result: 'Input: (Sales, 2026-01-05, 900), (Sales, 2025-12-20, 700), (Sales, 2026-02-15, 1100). Output: 2000.',
    },
    NOW: {
      calculation: 'NOW() returns the current date and time according to the sheet system settings.',
      result: 'Input: formula =NOW() when the system date and time are 30.03.2026 16:45. Output: 30.03.2026 16:45.',
    },
    IFNA: {
      calculation: 'IFNA(VLOOKUP(A1, D:E, 2, FALSE), "No data") shows fallback text only if the lookup returns a #N/A error.',
      result: 'Input: A1 = "SKU-9", and there is no such key in D:E. Output: "No data".',
    },
    TRIM: {
      calculation: 'TRIM(A1) removes extra spaces at the beginning and end of the string, and leaves only one space between words.',
      result: 'Input: A1 = "  Report   for   March  ". Output: "Report for March".',
    },
    SUBSTITUTE: {
      calculation: 'SUBSTITUTE(A1, "-", "/") replaces all occurrences of "-" with "/" in the text.',
      result: 'Input: A1 = "2026-03-30". Output: "2026/03/30".',
    },
    REGEXMATCH: {
      calculation: 'REGEXMATCH(A1, "^[A-Z]{3}-\\\\d{4}$") checks whether the text matches the pattern: 3 uppercase letters, a hyphen, and 4 digits.',
      result: 'Input: A1 = "ABC-1234". Output: TRUE.',
    },
    EOMONTH: {
      calculation: 'EOMONTH(A1, 1) takes the date from A1, shifts it forward by 1 month, and returns the last day of that month.',
      result: 'Input: A1 = 15.01.2026. Output: 28.02.2026.',
    },
    DATE: {
      calculation: 'DATE(2026, 4, 15) builds a valid date from separate numeric year, month, and day components.',
      result: 'Input: year = 2026, month = 4, day = 15. Output: 15.04.2026.',
    },
    DATEDIF: {
      calculation: 'DATEDIF(A1, B1, "D") returns the number of days between the start date and the end date.',
      result: 'Input: A1 = 01.04.2026, B1 = 10.04.2026, unit = "D". Output: 9.',
    },
    WORKDAY: {
      calculation: 'WORKDAY(A1, 10, D1:D5) adds 10 working days to date A1, skipping weekends and dates from the holiday list.',
      result: 'Input: A1 = 01.04.2026, holidays = 07.04.2026. Output: the working date 10 business days later, excluding weekends and the holiday.',
    },
    NETWORKDAYS: {
      calculation: 'NETWORKDAYS(A1, B1, D1:D5) counts only working days between two dates, excluding weekends and holidays.',
      result: 'Input: A1 = 01.04.2026, B1 = 10.04.2026, and the period includes 1 holiday. Output: the number of working days in the period.',
    },
    WEEKDAY: {
      calculation: 'WEEKDAY(A1, 2) returns the weekday number where Monday = 1, Tuesday = 2, and so on.',
      result: 'Input: A1 = 06.04.2026 (Monday), type = 2. Output: 1.',
    },
    MONTH: {
      calculation: 'MONTH(A1) extracts the month number from a date.',
      result: 'Input: A1 = 15.04.2026. Output: 4.',
    },
    YEAR: {
      calculation: 'YEAR(A1) extracts the year from a date.',
      result: 'Input: A1 = 15.04.2026. Output: 2026.',
    },
    TIME: {
      calculation: 'TIME(14, 30, 0) builds a time value from hours, minutes, and seconds.',
      result: 'Input: hour = 14, minute = 30, second = 0. Output: 14:30:00.',
    },
    HOUR: {
      calculation: 'HOUR(A1) returns the hour part from a time or date-time value.',
      result: 'Input: A1 = 14:45:20. Output: 14.',
    },
    MINUTE: {
      calculation: 'MINUTE(A1) returns the minute part from a time or date-time value.',
      result: 'Input: A1 = 14:45:20. Output: 45.',
    },
  },
  ua: {
    IF: {
      calculation: 'Якщо в A1 стоїть 12, умова A1 > 10 виконується, тому функція вибирає значення "High".',
      result: 'Вхід: A1 = 12, формула =IF(A1 > 10, "High", "Low"). Вихід: "High".',
    },
    IFERROR: {
      calculation: 'Коли VLOOKUP не знаходить A1 у діапазоні B:C, виникає помилка, і IFERROR підставляє "Not found".',
      result: 'Вхід: A1 = "SKU-9", у діапазоні B:C немає такого ключа. Вихід: "Not found" замість помилки.',
    },
    AND: {
      calculation: 'За A1 = 5 і B1 = 3 обидві умови (>0) істинні, отже підсумок буде TRUE.',
      result: 'Вхід: A1 = 5 і B1 = 3 у формулі =AND(A1>0, B1>0). Вихід: TRUE.',
    },
    OR: {
      calculation: 'Якщо A1 = -2, а B1 = 3, одна з умов (>0) істинна, отже OR поверне TRUE.',
      result: 'Вхід: A1 = -2 і B1 = 3 у формулі =OR(A1>0, B1>0). Вихід: TRUE.',
    },
    NOT: {
      calculation: 'За A1 = 12 вираз A1>10 дає TRUE, а NOT інвертує його в FALSE.',
      result: 'Вхід: A1 = 12, перевірка A1>10 дає TRUE. Вихід: FALSE після застосування NOT.',
    },
    IFS: {
      calculation: 'Якщо A1 = 85, умова A1>90 хибна, але A1>70 істинна, тому вибирається "B".',
      result: 'Вхід: A1 = 85, формула =IFS(A1>90, "A", A1>70, "B"). Вихід: "B". Якщо жодна умова не спрацює, функція поверне #N/A.',
    },
    SWITCH: {
      calculation: 'Якщо A1 = 2, значення expression збігається з case 2, тому повертається "Two".',
      result: 'Вхід: A1 = 2, формула =SWITCH(A1, 1, "One", 2, "Two"). Вихід: "Two". Якщо збігу й значення за замовчуванням немає, функція поверне #N/A.',
    },
    ISBLANK: {
      calculation: 'Якщо A1 порожня, ISBLANK(A1) поверне TRUE.',
      result: 'Вхід: комірка A1 справді порожня. Вихід: TRUE. Комірка з формулою, що повертає "", порожньою не вважається.',
    },
    ISNUMBER: {
      calculation: 'Якщо в A1 число 150, функція визначає його як числовий тип.',
      result: 'Вхід: у A1 значення 150. Вихід: TRUE.',
    },
    ISTEXT: {
      calculation: 'Якщо в A1 записано "ID-01", функція розпізнає тип як текст.',
      result: 'Вхід: у A1 значення "ID-01". Вихід: TRUE.',
    },
    VLOOKUP: {
      calculation: 'Функція шукає ключ з A1 у першому стовпці діапазону A:C і бере значення з 2-го стовпця.',
      result: 'Вхід: A1 = "SKU-2", в A:C є рядок "SKU-2 | 450 | В наявності". Вихід: 450.',
    },
    HLOOKUP: {
      calculation: 'HLOOKUP("Feb", A1:D2, 2, FALSE) шукає "Feb" у першому рядку діапазону й повертає значення з 2-го рядка того самого стовпця.',
      result: 'Вхід: перший рядок A1:D2 = Jan, Feb, Mar, а другий = 100, 120, 90. Вихід: 120 зі стовпця Feb.',
    },
    XLOOKUP: {
      calculation: 'Значення з A1 шукається в стовпці A:A, а відповідь береться з тієї самої позиції у стовпці B:B. Якщо збігу немає, функція може повернути текст "Not found".',
      result: 'Вхід: A1 = "Код-15", в A:A знайдено "Код-15", а в тому самому рядку B:B стоїть "Доставка". Вихід: "Доставка".',
    },
    INDEX: {
      calculation: 'INDEX(A1:C10, 2, 3) звертається до 2-го рядка і 3-го стовпця, це комірка C2.',
      result: 'Вхід: у діапазоні A1:C10 значення C2 = "Оплачено". Вихід: "Оплачено".',
    },
    MATCH: {
      calculation: 'MATCH шукає значення A1 у B:B і повертає його порядкову позицію.',
      result: 'Вхід: A1 = "Іван", у B:B значення = Олег, Іван, Анна. Вихід: 2.',
    },
    FILTER: {
      calculation: 'FILTER(A1:B10, B1:B10>10) залишає лише рядки, де в другому стовпці число більше за 10.',
      result: 'Вхід: рядки (Товар A, 8), (Товар B, 15), (Товар C, 21). Вихід: (Товар B, 15) і (Товар C, 21).',
    },
    LOOKUP: {
      calculation: 'LOOKUP шукає значення у відсортованому діапазоні A:A і, якщо точного збігу немає, бере останню позицію, що менша або дорівнює ключу.',
      result: 'Вхід: A1 = 220, A:A = 100, 200, 300, B:B = Bronze, Silver, Gold. Оскільки 220 лежить між 200 і 300, функція бере рядок для 200. Вихід: "Silver".',
    },
    CHOOSE: {
      calculation: 'CHOOSE(2, "A", "B") вибирає елемент з індексом 2 зі списку аргументів.',
      result: 'Вхід: формула =CHOOSE(2, "A", "B"). Вихід: "B".',
    },
    OFFSET: {
      calculation: 'OFFSET(A1, 2, 1) зміщує посилання на 2 рядки вниз і 1 стовпець праворуч, до B3.',
      result: 'Вхід: початкова точка A1, зміщення на 2 рядки і 1 стовпець, у B3 зберігається 980. Вихід: 980.',
    },
    INDIRECT: {
      calculation: 'INDIRECT("A1") перетворює текст "A1" на робоче посилання на комірку.',
      result: 'Вхід: в A1 записано "Звіт", формула =INDIRECT("A1"). Вихід: "Звіт".',
    },
    SPLIT: {
      calculation: 'Якщо A1 містить "Іван,Петров", SPLIT за комою розділить рядок на частини.',
      result: 'Вхід: A1 = "Іван,Петров". Вихід: у сусідніх комірках "Іван" і "Петров".',
    },
    JOIN: {
      calculation: 'JOIN(",", A1:A5) обʼєднує всі значення діапазону в один рядок через кому.',
      result: 'Вхід: A1:A3 = Київ, Львів, Одеса. Вихід: "Київ,Львів,Одеса".',
    },
    CONCAT: {
      calculation: 'CONCAT(A1, B1) склеює вміст двох комірок без роздільника.',
      result: 'Вхід: A1 = "INV-", B1 = "105". Вихід: "INV-105".',
    },
    TEXTJOIN: {
      calculation: 'TEXTJOIN(",", TRUE, A1:A5) обʼєднує діапазон через кому і пропускає порожні комірки.',
      result: 'Вхід: A1:A4 = Анна, (порожньо), Ігор, Оля. Вихід: "Анна,Ігор,Оля".',
    },
    LEFT: {
      calculation: 'LEFT(A1, 4) бере перші 4 символи з тексту в A1.',
      result: 'Вхід: A1 = "ABCD-789", формула =LEFT(A1, 4). Вихід: "ABCD".',
    },
    RIGHT: {
      calculation: 'RIGHT(A1, 2) повертає останні 2 символи значення.',
      result: 'Вхід: A1 = "ABCD-789", формула =RIGHT(A1, 2). Вихід: "89".',
    },
    MID: {
      calculation: 'MID(A1, 2, 3) починає з 2-го символу і витягує 3 символи підряд.',
      result: 'Вхід: A1 = "ABCD-789", формула =MID(A1, 2, 3). Вихід: "BCD".',
    },
    LEN: {
      calculation: 'LEN(A1) підраховує всі символи в комірці, включно з цифрами, літерами і пробілами.',
      result: 'Вхід: A1 = "ID 105". Вихід: 6.',
    },
    LOWER: {
      calculation: 'LOWER(A1) перетворює всі літери в тексті на нижній регістр.',
      result: 'Вхід: A1 = "Sales Q1". Вихід: "sales q1".',
    },
    UPPER: {
      calculation: 'UPPER(A1) робить усі літери великими.',
      result: 'Вхід: A1 = "Sales Q1". Вихід: "SALES Q1".',
    },
    QUERY: {
      calculation: 'QUERY(A1:C10, "select A", 1) вибирає з діапазону лише стовпець A і явно вважає перший рядок заголовками.',
      result: 'Вхід: A1:C10, де рядок 1 містить заголовки, а нижче у стовпці A стоять Іван, Ольга, Марія. Вихід: стовпець A без неоднозначності через автовизначення заголовків.',
    },
    ARRAYFORMULA: {
      calculation: 'ARRAYFORMULA(A1:A*B1:B) застосовує множення построково до всього діапазону одразу.',
      result: 'Вхід: A1:A3 = 2,3,4 і B1:B3 = 10,5,8. Вихід: стовпець 20, 15, 32.',
    },
    UNIQUE: {
      calculation: 'UNIQUE(A1:A) проходить списком і видаляє повторювані значення.',
      result: 'Вхід: A1:A5 = A, B, A, C, B. Вихід: A, B, C.',
    },
    SORT: {
      calculation: 'SORT(A1:B, 2, TRUE) сортує таблицю за 2-м стовпцем у зростаючому порядку.',
      result: 'Вхід: (Товар A, 30), (Товар B, 10), (Товар C, 20). Вихід: (Товар B, 10), (Товар C, 20), (Товар A, 30).',
    },
    SORTN: {
      calculation: 'SORTN(A1:B, 5) сортує дані й залишає перші 5 рядків.',
      result: 'Вхід: таблиця з 7 рядків і n = 5. Вихід: перші 5 рядків відсортованого результату.',
    },
    TRANSPOSE: {
      calculation: 'TRANSPOSE(A1:B2) міняє місцями рядки і стовпці вибраного діапазону.',
      result: 'Вхід: матриця [1 2; 3 4]. Вихід: матриця [1 3; 2 4].',
    },
    SEQUENCE: {
      calculation: 'SEQUENCE(5) генерує послідовність 1, 2, 3, 4, 5 в одному стовпці.',
      result: 'Вхід: формула =SEQUENCE(5). Вихід: 1, 2, 3, 4, 5 по рядках.',
    },
    FLATTEN: {
      calculation: 'FLATTEN(A1:C3) збирає значення з матриці в один довгий стовпець.',
      result: 'Вхід: діапазон [A B C; D E F]. Вихід: стовпець A, B, C, D, E, F.',
    },
    WRAPROWS: {
      calculation: 'WRAPROWS(A1:A7, 3, "") групує потік значень у рядки по 3 елементи й заповнює порожні клітинки в останньому рядку порожнім рядком.',
      result: 'Вхід: A1:A7 = 1,2,3,4,5,6,7 і count = 3. Вихід: рядки [1,2,3], [4,5,6], [7,"",""] без #N/A у хвості.',
    },
    WRAPCOLS: {
      calculation: 'WRAPCOLS(A1:A7, 3, "") розбиває список на стовпці по 3 елементи й заповнює порожні клітинки в останньому стовпці порожнім рядком.',
      result: 'Вхід: A1:A7 = 1,2,3,4,5,6,7 і count = 3. Вихід: стовпці [1,2,3], [4,5,6], [7,"",""] без #N/A у хвості.',
    },
    IMPORTRANGE: {
      calculation: 'IMPORTRANGE("url", "Sheet1!A1:B10") підтягує діапазон із зовнішньої таблиці.',
      result: 'Вхід: зовнішній діапазон Sheet1!A1:B3 = Товар/Ціна: Кава-120, Чай-80, Сік-95. Вихід: ті самі 3 рядки на поточному аркуші.',
    },
    IMPORTHTML: {
      calculation: 'IMPORTHTML("url", "table", 1) отримує першу HTML-таблицю зі сторінки.',
      result: 'Вхід: сторінка з таблицею (Місто | Населення). Вихід: ця таблиця зʼявляється в комірках Google Sheets.',
    },
    IMPORTXML: {
      calculation: 'IMPORTXML("url", "//title") витягує текст тега title за XPath.',
      result: 'Вхід: URL сторінки і XPath //title. Вихід: текст заголовка сторінки, наприклад "Google Sheets Help".',
    },
    IMPORTDATA: {
      calculation: 'IMPORTDATA("url") завантажує CSV або TSV-файл за посиланням і розбиває його на колонки.',
      result: 'Вхід: CSV з колонками date, sales і рядком 2026-03-01,1200. Вихід: окремі стовпці date і sales з даними.',
    },
    GOOGLEFINANCE: {
      calculation: 'GOOGLEFINANCE("NASDAQ:GOOG", "price") запитує поточне значення атрибута price для GOOG на NASDAQ.',
      result: 'Вхід: тикер "NASDAQ:GOOG" і атрибут "price". Вихід: поточне значення ціни для інструмента, якщо Google Finance його підтримує.',
    },
    IMAGE: {
      calculation: 'IMAGE("url") вставляє зображення за посиланням у комірку.',
      result: 'Вхід: URL зображення товару. Вихід: картинка відображається прямо в комірці.',
    },
    HYPERLINK: {
      calculation: 'HYPERLINK("url", "Open") створює клікабельне посилання з підписом.',
      result: 'Вхід: url = "https://example.com", label = "Open". Вихід: клікабельний текст "Open".',
    },
    ENCODEURL: {
      calculation: 'ENCODEURL(A1) замінює пробіли та спецсимволи на безпечний URL-формат.',
      result: 'Вхід: A1 = "sales report 2026". Вихід: "sales%20report%202026".',
    },
    GOOGLETRANSLATE: {
      calculation: 'GOOGLETRANSLATE(A1, "en", "uk") перекладає текст з A1 з англійської на українську.',
      result: 'Вхід: A1 = "Hello", source = "en", target = "uk". Вихід: "Привіт".',
    },
    SPARKLINE: {
      calculation: 'SPARKLINE(A1:A10) будує мініграфік за набором чисел прямо в комірці.',
      result: 'Вхід: A1:A5 = 12, 16, 14, 20, 18. Вихід: мініграфік з піком на значенні 20.',
    },
    SUM: {
      calculation: 'SUM(A1:A10) додає всі числові значення у вказаному діапазоні й ігнорує порожні комірки.',
      result: 'Вхід: A1:A4 = 120, 80, 50, 30. Вихід: 280.',
    },
    AVERAGE: {
      calculation: 'AVERAGE(B1:B10) підсумовує числа діапазону і ділить суму на кількість числових значень.',
      result: 'Вхід: B1:B4 = 10, 20, 30, 40. Вихід: 25.',
    },
    COUNT: {
      calculation: 'COUNT(C1:C20) рахує лише комірки з числами, текст і порожні значення не враховуються.',
      result: 'Вхід: C1:C6 = 5, "тест", 12, (порожньо), 7, "N/A". Вихід: 3.',
    },
    COUNTA: {
      calculation: 'COUNTA(A1:A20) рахує всі непорожні комірки незалежно від типу даних: число, текст, дата, логічне значення.',
      result: 'Вхід: A1:A5 = "Іван", 120, (порожньо), TRUE, "Звіт". Вихід: 4.',
    },
    MAX: {
      calculation: 'MAX(D1:D30) проходить діапазоном і повертає найбільше числове значення.',
      result: 'Вхід: D1:D5 = 18, 42, 7, 35, 29. Вихід: 42.',
    },
    MIN: {
      calculation: 'MIN(D1:D30) визначає мінімальне число в діапазоні.',
      result: 'Вхід: D1:D5 = 18, 42, 7, 35, 29. Вихід: 7.',
    },
    ROUND: {
      calculation: 'ROUND(E1, 2) округлює число за стандартними правилами до 2 знаків після коми.',
      result: 'Вхід: E1 = 12.3456. Вихід: 12.35.',
    },
    ROUNDUP: {
      calculation: 'ROUNDUP(E1, 0) округлює число вгору до цілого, навіть якщо дробова частина менша за 0.5.',
      result: 'Вхід: E1 = 12.01. Вихід: 13.',
    },
    ROUNDDOWN: {
      calculation: 'ROUNDDOWN(E1, 0) завжди округлює число вниз до цілого, відкидаючи дробову частину.',
      result: 'Вхід: E1 = 12.99. Вихід: 12.',
    },
    TODAY: {
      calculation: 'TODAY() повертає поточну системну дату без часу й оновлюється під час перерахунку таблиці.',
      result: 'Вхід: формула =TODAY() за системної дати 30.03.2026. Вихід: 30.03.2026.',
    },
    COUNTIF: {
      calculation: 'COUNTIF(A1:A100, ">10") перевіряє кожну комірку діапазону і рахує лише значення, більші за 10.',
      result: 'Вхід: A1:A6 = 5, 11, 18, 9, 14, 3. Вихід: 3.',
    },
    COUNTIFS: {
      calculation: 'COUNTIFS(A1:A100, ">10", B1:B100, "Yes") рахує рядки, де одночасно виконуються обидві умови.',
      result: 'Вхід: рядки (12, Yes), (15, No), (8, Yes), (21, Yes). Вихід: 2.',
    },
    SUMIF: {
      calculation: 'SUMIF(A1:A100, "Sales", B1:B100) знаходить рядки, де в стовпці A вказано "Sales", і підсумовує відповідні значення зі стовпця B.',
      result: 'Вхід: (Sales, 1200), (Marketing, 500), (Sales, 800). Вихід: 2000.',
    },
    SUMIFS: {
      calculation: 'SUMIFS(C1:C100, A1:A100, "Sales", B1:B100, ">="&DATE(2026, 1, 1)) підсумовує C лише для рядків, де відділ = "Sales" і дата не раніше 1 січня 2026 року.',
      result: 'Вхід: (Sales, 2026-01-05, 900), (Sales, 2025-12-20, 700), (Sales, 2026-02-15, 1100). Вихід: 2000.',
    },
    NOW: {
      calculation: 'NOW() повертає поточні дату й час відповідно до системних налаштувань таблиці.',
      result: 'Вхід: формула =NOW() за системних дати й часу 30.03.2026 16:45. Вихід: 30.03.2026 16:45.',
    },
    IFNA: {
      calculation: 'IFNA(VLOOKUP(A1, D:E, 2, FALSE), "No data") показує запасний текст лише якщо пошук повертає помилку #N/A.',
      result: 'Вхід: A1 = "SKU-9", у D:E немає такого ключа. Вихід: "No data".',
    },
    TRIM: {
      calculation: 'TRIM(A1) видаляє зайві пробіли на початку і в кінці рядка, а між словами залишає лише один пробіл.',
      result: 'Вхід: A1 = "  Звіт   за   березень  ". Вихід: "Звіт за березень".',
    },
    SUBSTITUTE: {
      calculation: 'SUBSTITUTE(A1, "-", "/") замінює всі входження символу "-" на "/" у тексті.',
      result: 'Вхід: A1 = "2026-03-30". Вихід: "2026/03/30".',
    },
    REGEXMATCH: {
      calculation: 'REGEXMATCH(A1, "^[A-Z]{3}-\\\\d{4}$") перевіряє, чи відповідає текст шаблону: 3 великі літери, дефіс і 4 цифри.',
      result: 'Вхід: A1 = "ABC-1234". Вихід: TRUE.',
    },
    EOMONTH: {
      calculation: 'EOMONTH(A1, 1) бере дату з A1, зсуває її на 1 місяць уперед і повертає останній день цього місяця.',
      result: 'Вхід: A1 = 15.01.2026. Вихід: 28.02.2026.',
    },
    DATE: {
      calculation: 'DATE(2026, 4, 15) формує коректну дату з окремих числових компонентів року, місяця і дня.',
      result: 'Вхід: year = 2026, month = 4, day = 15. Вихід: 15.04.2026.',
    },
    DATEDIF: {
      calculation: 'DATEDIF(A1, B1, "D") повертає кількість днів між початковою і кінцевою датою.',
      result: 'Вхід: A1 = 01.04.2026, B1 = 10.04.2026, unit = "D". Вихід: 9.',
    },
    WORKDAY: {
      calculation: 'WORKDAY(A1, 10, D1:D5) додає 10 робочих днів до дати A1, пропускаючи вихідні та дати зі списку свят.',
      result: 'Вхід: A1 = 01.04.2026, holidays = 07.04.2026. Вихід: робоча дата через 10 робочих днів без урахування вихідних і свята.',
    },
    NETWORKDAYS: {
      calculation: 'NETWORKDAYS(A1, B1, D1:D5) рахує лише робочі дні між двома датами, виключаючи вихідні та свята.',
      result: 'Вхід: A1 = 01.04.2026, B1 = 10.04.2026, у періоді є 1 святковий день. Вихід: кількість робочих днів за період.',
    },
    WEEKDAY: {
      calculation: 'WEEKDAY(A1, 2) повертає номер дня тижня, де понеділок = 1, вівторок = 2 і т.д.',
      result: 'Вхід: A1 = 06.04.2026 (понеділок), type = 2. Вихід: 1.',
    },
    MONTH: {
      calculation: 'MONTH(A1) витягує номер місяця з дати.',
      result: 'Вхід: A1 = 15.04.2026. Вихід: 4.',
    },
    YEAR: {
      calculation: 'YEAR(A1) витягує рік з дати.',
      result: 'Вхід: A1 = 15.04.2026. Вихід: 2026.',
    },
    TIME: {
      calculation: 'TIME(14, 30, 0) формує значення часу з годин, хвилин і секунд.',
      result: 'Вхід: hour = 14, minute = 30, second = 0. Вихід: 14:30:00.',
    },
    HOUR: {
      calculation: 'HOUR(A1) повертає годинну частину з часу або дати-часу.',
      result: 'Вхід: A1 = 14:45:20. Вихід: 14.',
    },
    MINUTE: {
      calculation: 'MINUTE(A1) повертає хвилинну частину з часу або дати-часу.',
      result: 'Вхід: A1 = 14:45:20. Вихід: 45.',
    },
  },
};

const ARGUMENT_HINTS = {
  en: {
    condition: 'condition to check',
    value_if_true: 'value to return when the condition is true',
    value_if_false: 'value to return when the condition is false',
    value: 'main expression or value to evaluate',
    value_if_error: 'value to show instead of an error',
    logical1: 'first logical condition',
    logical2: 'additional logical condition',
    logical_expression: 'logical expression to invert',
    cond1: 'first condition to test',
    val1: 'result for the first condition',
    cond2: 'second condition to test',
    val2: 'result for the second condition',
    expression: 'value compared against the cases',
    case1: 'first comparison case',
    value1: 'result for the matching case',
    search_key: 'value to search for',
    missing_value: 'value to return when no match is found',
    match_mode: 'exact, approximate, or wildcard match mode',
    search_mode: 'direction or strategy for scanning the range',
    range: 'cell range used by the function',
    index: 'row, column, or result position number',
    is_sorted: 'whether the source is sorted (TRUE/FALSE)',
    lookup_range: 'range where the lookup runs',
    result_range: 'range that returns the result',
    row: 'row number inside the range',
    column: 'column number inside the range',
    type: 'exact or approximate match mode',
    search_range: 'range where the search is performed',
    ref: 'base reference for the offset',
    rows: 'row offset or row count',
    cols: 'column offset or column count',
    ref_text: 'text reference to a cell or range',
    delimiter: 'text separator',
    text: 'source text',
    search_for: 'text fragment to replace',
    replace_with: 'replacement text fragment',
    occurrence_number: 'which occurrence to replace',
    regular_expression: 'regular expression pattern used for the check',
    ignore_empty: 'whether empty cells should be skipped',
    num_chars: 'number of characters to return',
    start: 'starting position for extraction',
    start_value: 'number to start the sequence from',
    length: 'length of the extracted fragment',
    data: 'table or data range',
    query: 'SQL-like query text',
    headers: 'how many leading rows should be treated as headers',
    formula: 'expression applied to the entire range',
    n: 'number of records to keep',
    is_asc: 'sort order: TRUE for ascending',
    criterion: 'condition that the values must meet',
    criteria_range1: 'first range checked against a condition',
    criterion1: 'first filter condition',
    criteria_range2: 'second range checked against a condition',
    criterion2: 'second filter condition',
    sum_range: 'range whose values should be summed',
    places: 'how many digits to round to',
    start_date: 'starting date for the calculation',
    end_date: 'ending date for the calculation',
    end_date_or_num_days: 'end date of the period or number of historical days',
    months: 'month offset from the start date',
    unit: 'date difference unit such as D, M, or Y',
    num_days: 'number of working days to shift',
    holidays: 'range of holiday dates to exclude',
    date: 'date to extract a component from',
    day: 'day of the month',
    month: 'month number',
    year: 'year in numeric form',
    hour: 'hour value',
    minute: 'minute value',
    second: 'second value',
    time: 'time or datetime value',
    count: 'how many values to group together',
    columns: 'how many columns to create in the sequence',
    step: 'step used to increment the sequence',
    pad_with: 'value used to fill empty cells in an incomplete group',
    url: 'link to an external resource',
    xpath: 'XPath path to the target element',
    ticker: 'market ticker symbol',
    attribute: 'which market-data attribute to return',
    interval: 'frequency of historical data such as DAILY or WEEKLY',
    label: 'visible link text',
    source: 'source language',
    target: 'target language',
    value2: 'additional value or range used by the function',
    value_if_na: 'value to return when the function gets a #N/A error',
  },
  ua: {
    condition: 'умова для перевірки',
    value_if_true: 'що повернути, якщо умова істинна',
    value_if_false: 'що повернути, якщо умова хибна',
    value: 'основний вираз або значення для перевірки',
    value_if_error: 'що показати замість помилки',
    logical1: 'перша логічна умова',
    logical2: 'додаткова логічна умова',
    logical_expression: 'логічний вираз для інверсії',
    cond1: 'перша умова перевірки',
    val1: 'результат для першої умови',
    cond2: 'друга умова перевірки',
    val2: 'результат для другої умови',
    expression: 'значення, яке порівнюється з варіантами',
    case1: 'перший варіант для порівняння',
    value1: 'результат для відповідного варіанта',
    search_key: 'що потрібно знайти',
    missing_value: 'що повернути, якщо збіг не знайдено',
    match_mode: 'режим точного, приблизного або wildcard-збігу',
    search_mode: 'напрямок або стратегія обходу діапазону',
    range: 'діапазон комірок для роботи функції',
    index: 'номер рядка, стовпця або позиції результату',
    is_sorted: 'ознака сортування (TRUE/FALSE)',
    lookup_range: 'діапазон, де виконується пошук',
    result_range: 'діапазон, звідки береться знайдений результат',
    row: 'номер рядка всередині діапазону',
    column: 'номер стовпця всередині діапазону',
    type: 'режим точного або приблизного збігу',
    search_range: 'діапазон, у якому виконується пошук',
    ref: 'базове посилання для зміщення',
    rows: 'зміщення або кількість рядків',
    cols: 'зміщення або кількість стовпців',
    ref_text: 'текстове посилання на комірку або діапазон',
    delimiter: 'роздільник тексту',
    text: 'вихідний текст',
    search_for: 'який фрагмент тексту потрібно замінити',
    replace_with: 'на що замінити знайдений фрагмент',
    occurrence_number: 'яке за рахунком входження замінювати',
    regular_expression: 'шаблон регулярного виразу для перевірки',
    ignore_empty: 'чи потрібно пропускати порожні комірки',
    num_chars: 'скільки символів повернути',
    start: 'позиція початку витягання',
    start_value: 'з якого числа починати послідовність',
    length: 'довжина фрагмента',
    data: 'таблиця або діапазон даних',
    query: 'текст SQL-подібного запиту',
    headers: 'скільки початкових рядків вважати заголовками',
    formula: 'вираз, що застосовується до всього діапазону',
    n: 'кількість записів у результаті',
    is_asc: 'порядок сортування: TRUE для зростання',
    criterion: 'умова, якій мають відповідати значення',
    criteria_range1: 'перший діапазон для перевірки умови',
    criterion1: 'перша умова відбору',
    criteria_range2: 'другий діапазон для перевірки умови',
    criterion2: 'друга умова відбору',
    sum_range: 'діапазон, значення з якого потрібно підсумувати',
    places: 'до скількох знаків округляти число',
    start_date: 'початкова дата для розрахунку',
    end_date: 'кінцева дата для розрахунку',
    end_date_or_num_days: 'кінцева дата періоду або кількість історичних днів',
    months: 'зміщення в місяцях від початкової дати',
    unit: 'одиниця різниці дат, наприклад D, M або Y',
    num_days: 'кількість робочих днів для зсуву',
    holidays: 'діапазон святкових дат, які слід виключити',
    date: 'дата, з якої береться частина значення',
    day: 'день місяця',
    month: 'номер місяця',
    year: 'рік у числовому форматі',
    hour: 'значення години',
    minute: 'значення хвилини',
    second: 'значення секунди',
    time: 'значення часу або дати-часу',
    count: 'скільки значень об’єднати в групу',
    columns: 'скільки стовпців створити в послідовності',
    step: 'з яким кроком збільшувати послідовність',
    pad_with: 'чим заповнювати порожні клітинки в неповній групі',
    url: 'посилання на зовнішній ресурс',
    xpath: 'XPath-шлях до потрібного елемента',
    ticker: 'біржовий тикер інструмента',
    attribute: 'який тип ринкових даних повернути',
    interval: 'частота історичних даних, наприклад DAILY або WEEKLY',
    label: 'видимий текст посилання',
    source: 'мова оригіналу',
    target: 'мова перекладу',
    value2: 'додаткове значення або діапазон для функції',
    value_if_na: 'що повернути, якщо функція отримала помилку #N/A',
  },
  ru: {
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
    missing_value: 'что вернуть, если совпадение не найдено',
    match_mode: 'режим точного, приблизительного или wildcard-поиска',
    search_mode: 'направление или способ обхода диапазона',
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
    search_for: 'какой фрагмент текста нужно заменить',
    replace_with: 'на что заменить найденный фрагмент',
    occurrence_number: 'какое по счёту вхождение заменять',
    regular_expression: 'шаблон регулярного выражения для проверки текста',
    ignore_empty: 'нужно ли пропускать пустые ячейки',
    num_chars: 'сколько символов извлечь',
    start: 'позиция начала извлечения',
    start_value: 'с какого числа начинать последовательность',
    length: 'длина извлекаемого фрагмента',
    data: 'таблица или диапазон данных',
    query: 'текст SQL-подобного запроса',
    headers: 'сколько строк в начале диапазона считать заголовками',
    formula: 'выражение, которое применится ко всему диапазону',
    n: 'количество записей в результате',
    is_asc: 'порядок сортировки: TRUE по возрастанию',
    criterion: 'условие, которому должны соответствовать значения',
    criteria_range1: 'первый диапазон для проверки условия',
    criterion1: 'первое условие отбора',
    criteria_range2: 'второй диапазон для проверки условия',
    criterion2: 'второе условие отбора',
    sum_range: 'диапазон, значения из которого нужно суммировать',
    places: 'до скольких знаков округлять число',
    start_date: 'начальная дата для расчета',
    end_date: 'конечная дата для расчета',
    end_date_or_num_days: 'конечная дата периода или число дней истории',
    months: 'смещение в месяцах относительно начальной даты',
    unit: 'единица измерения разницы дат ("D", "M", "Y" и т.д.)',
    num_days: 'количество рабочих дней для сдвига даты',
    holidays: 'диапазон праздничных дат, которые нужно исключить',
    date: 'дата, из которой извлекается часть значения',
    day: 'номер дня месяца',
    month: 'номер месяца',
    year: 'год в числовом формате',
    hour: 'часы времени',
    minute: 'минуты времени',
    second: 'секунды времени',
    time: 'значение времени или дата-время',
    count: 'сколько значений объединять в группу',
    columns: 'сколько столбцов создать в последовательности',
    step: 'с каким шагом увеличивать последовательность',
    pad_with: 'чем заполнять пустые ячейки в неполной группе',
    url: 'ссылка на внешний ресурс',
    xpath: 'XPath-путь к нужному элементу',
    ticker: 'биржевой тикер инструмента',
    attribute: 'какой тип рыночных данных вернуть',
    interval: 'частота исторических данных, например DAILY или WEEKLY',
    label: 'отображаемый текст ссылки',
    source: 'язык исходного текста',
    target: 'язык перевода',
    value2: 'дополнительное значение или диапазон для функции',
    value_if_na: 'что вернуть, если функция получила ошибку #N/A',
  },
};

const LOCALIZED_DETAIL_TEXT = {
  en: {
    noArguments: 'no arguments — the function works only with its own settings',
    unknownArgument: 'working function argument',
    calculation: (formula) => `Use the example ${formula.example} and replace the ranges or values with your own data using the same pattern.`,
    result: (formula) => `The result will show the calculated output for ${formula.name}.`,
  },
  ua: {
    noArguments: 'без аргументів — функція працює лише з власними параметрами',
    unknownArgument: 'робочий аргумент функції',
    calculation: (formula) => `Візьміть приклад ${formula.example} та підставте свої діапазони або значення за тим самим шаблоном.`,
    result: (formula) => `Результат покаже підсумкове обчислення для функції ${formula.name}.`,
  },
  ru: {
    noArguments: 'без аргументов — функция работает только с собственными настройками',
    unknownArgument: 'рабочий аргумент функции',
    calculation: (formula) => `Используйте пример ${formula.example} и подставьте свои диапазоны/значения по аналогии.`,
    result: (formula) => `Результат покажет итог вычисления для функции ${formula.name}.`,
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

const buildVariablesLegend = (syntax, locale) => {
  const dictionary = ARGUMENT_HINTS[locale] ?? ARGUMENT_HINTS[DEFAULT_LOCALE];
  const detailsText = LOCALIZED_DETAIL_TEXT[locale] ?? LOCALIZED_DETAIL_TEXT[DEFAULT_LOCALE];
  const uniqueArgs = [...new Set(extractSyntaxArgs(syntax))];

  if (!uniqueArgs.length) {
    return [detailsText.noArguments];
  }

  return uniqueArgs.map((arg) => `${arg} — ${dictionary[arg] ?? detailsText.unknownArgument}`);
};

const buildLocalizedDetails = (formula, locale) => {
  const detailsText = LOCALIZED_DETAIL_TEXT[locale] ?? LOCALIZED_DETAIL_TEXT[DEFAULT_LOCALE];
  const narrative = FORMULA_EXAMPLE_NARRATIVES[locale]?.[formula.name];

  return {
    purpose: formula.description,
    variables: buildVariablesLegend(formula.syntax, locale),
    calculation: narrative?.calculation ?? detailsText.calculation(formula),
    result: narrative?.result ?? detailsText.result(formula),
  };
};

const localizeFormula = (formula, locale) => {
  const safeLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const categoryId = SOURCE_CATEGORY_ID_MAP[formula.category] ?? formula.category;

  if (safeLocale === 'ru') {
    return {
      ...formula,
      categoryId,
      categoryLabel: getCategoryLabel(categoryId, safeLocale),
      category: getCategoryLabel(categoryId, safeLocale),
    };
  }

  const description = FORMULA_DESCRIPTIONS[safeLocale]?.[formula.name] ?? formula.description;
  const example = FORMULA_EXAMPLE_OVERRIDES[safeLocale]?.[formula.name] ?? formula.example;
  const localizedFormula = {
    ...formula,
    categoryId,
    categoryLabel: getCategoryLabel(categoryId, safeLocale),
    category: getCategoryLabel(categoryId, safeLocale),
    description,
    example,
  };

  return {
    ...localizedFormula,
    exampleDetails: buildLocalizedDetails(localizedFormula, safeLocale),
  };
};

export const getFormulas = (locale) => rawFormulas.map((formula) => localizeFormula(formula, locale));
