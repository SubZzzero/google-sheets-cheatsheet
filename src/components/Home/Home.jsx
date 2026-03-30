import s from './Home.module.css';

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
                <h2 className={s.categoryTitle}>Перейти к категориям</h2>
                <div className={s.categoryGrid}>
                    {categories.map((category) => (
                        <button
                            key={category.name}
                            type="button"
                            className={s.categoryButton}
                            onClick={() => onSelectCategory(category.name)}
                        >
                            <span>{category.name}</span>
                            <span className={s.categoryCount}>{category.count} формул</span>
                        </button>
                    ))}
                </div>
            </section>
        </section>
    );
};
