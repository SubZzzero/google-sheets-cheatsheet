import s from './Home.module.css';

const CATEGORY_META = {
    'Базовые': {
        icon: '🧮',
        description: 'Сумма, среднее и другие ключевые функции для ежедневных задач.',
    },
    'Часто используемые': {
        icon: '⭐',
        description: 'Популярные формулы для отчётов, сводок и регулярной аналитики.',
    },
    'Дата и время': {
        icon: '⏰',
        description: 'Работа с датами, сроками и временем: периоды, рабочие дни и календарные расчёты.',
    },
    Логические: {
        icon: '🧠',
        description: 'Условия, проверки и сценарии принятия решений в таблицах.',
    },
    Поиск: {
        icon: '🔎',
        description: 'Нахождение значений и связка данных между диапазонами.',
    },
    Текст: {
        icon: '📝',
        description: 'Обработка строк: разбор, объединение и форматирование текста.',
    },
    Данные: {
        icon: '📊',
        description: 'Фильтрация, сортировка и подготовка наборов данных к анализу.',
    },
    Массивы: {
        icon: '🧩',
        description: 'Работа с диапазонами и динамическими массивами в одной формуле.',
    },
    Импорт: {
        icon: '🌐',
        description: 'Подтягивание внешних источников и встроенных онлайн-данных.',
    },
};

const DEFAULT_META = {
    icon: '📁',
    description: 'Подборка формул по теме с готовыми примерами использования.',
};

const getFormulaCountLabel = (count) => {
    const absCount = Math.abs(count);
    const lastTwo = absCount % 100;

    if (lastTwo >= 11 && lastTwo <= 14) {
        return `${count} формул`;
    }

    const lastDigit = absCount % 10;

    if (lastDigit === 1) {
        return `${count} формула`;
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
        return `${count} формулы`;
    }

    return `${count} формул`;
};

export const Home = ({ categories, onSelectCategory }) => {
    // const totalFormulas = categories.reduce((sum, category) => sum + category.count, 0);

    return (
        <section className={s.home}>
            <header className={s.hero}>
                <h1 className={s.title}>Быстро находите нужные формулы и сразу применяйте их в работе</h1>
                <p className={s.description}>
                    Это шпаргалка по функциям Google Sheets. Здесь можно быстро понять,
                    какую формулу выбрать, как её собрать и что именно получится в результате.
                </p>
            </header>

            <div className={s.infoGrid}>
                <article className={s.infoCard}>
                    <h2 className={s.infoTitle}>Зачем это полезно</h2>
                    <ul className={s.points}>
                        <li>Экономит время на поиск синтаксиса.</li>
                        <li>Помогает быстро разбираться в аргументах функций.</li>
                        <li>Даёт практические примеры с пояснением результата.</li>
                    </ul>
                </article>

                <article className={s.infoCard}>
                    <h2 className={s.infoTitle}>Как начать</h2>
                    <ol className={s.steps}>
                        <li>Выберите категорию формул ниже.</li>
                        <li>Откройте карточку нужной функции.</li>
                        <li>Скопируйте формулу и адаптируйте пример под свои данные.</li>
                    </ol>
                </article>
            </div>

            <section className={s.categories} aria-label="Категории формул">
                <h2 className={s.categoryTitle}>Выберите категорию и начните с готовых примеров</h2>
                <p className={s.categorySubtitle}>
                    Каждая карточка показывает назначение раздела и количество доступных материалов.
                </p>

                <ul className={s.categoryGrid}>
                    {categories.map((category) => (
                        <li key={category.name} className={s.categoryItem}>
                            <button
                                type="button"
                                className={s.categoryButton}
                                onClick={() => onSelectCategory(category.name)}
                                aria-label={`${category.name}. ${getFormulaCountLabel(category.count)}. Открыть категорию`}
                            >
                                <div className={s.categoryTop}>
                                    <span className={s.categoryIcon} aria-hidden="true">
                                        {(CATEGORY_META[category.name] ?? DEFAULT_META).icon}
                                    </span>

                                    <span className={s.categoryCount}>{getFormulaCountLabel(category.count)}</span>
                                </div>

                                <span className={s.categoryName}>{category.name}</span>
                                <span className={s.categoryDescription}>
                                    {(CATEGORY_META[category.name] ?? DEFAULT_META).description}
                                </span>
                                <span className={s.categoryAction} aria-hidden="true">
                                    Открыть категорию →
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
};
