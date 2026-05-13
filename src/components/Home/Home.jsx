import s from './Home.module.css';
import { formatFormulaCount, getCategoryMeta } from '../../i18n';

export const Home = ({ categories, locale, ui, onSelectCategory }) => {

    return (
        <section className={s.home}>
            <header className={s.hero}>
                <h1 className={s.title}>{ui.title}</h1>
                <p className={s.description}>{ui.description}</p>
            </header>

            <div className={s.infoGrid}>
                <article className={s.infoCard}>
                    <h2 className={s.infoTitle}>{ui.benefitsTitle}</h2>
                    <ul className={s.points}>
                        {ui.benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                        ))}
                    </ul>
                </article>

                <article className={s.infoCard}>
                    <h2 className={s.infoTitle}>{ui.startTitle}</h2>
                    <ol className={s.steps}>
                        {ui.startSteps.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </article>
            </div>

            <section className={s.categories} aria-label={ui.categoriesAriaLabel}>
                <h2 className={s.categoryTitle}>{ui.categoriesTitle}</h2>
                <p className={s.categorySubtitle}>{ui.categoriesSubtitle}</p>

                <ul className={s.categoryGrid}>
                    {categories.map((category) => (
                        <li key={category.id} className={s.categoryItem}>
                            <button
                                type="button"
                                className={s.categoryButton}
                                onClick={() => onSelectCategory(category.id)}
                                aria-label={`${category.label}. ${formatFormulaCount(locale, category.count)}. ${ui.openCategoryLabel}`}
                            >
                                <div className={s.categoryTop}>
                                    <span className={s.categoryIcon} aria-hidden="true">
                                        {getCategoryMeta(category.id, locale).icon}
                                    </span>

                                    <span className={s.categoryCount}>{formatFormulaCount(locale, category.count)}</span>
                                </div>

                                <span className={s.categoryName}>{category.label}</span>
                                <span className={s.categoryDescription}>
                                    {getCategoryMeta(category.id, locale).description}
                                </span>
                                <span className={s.categoryAction} aria-hidden="true">
                                    {ui.openCategoryLabel} →
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
};
