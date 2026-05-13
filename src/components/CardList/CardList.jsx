import { Card } from '../Card/Card';
import s from './CardList.module.css';

export const CardList = ({ formulas, activeCategoryLabel, ui, cardUi, onGoHome }) => {
    const sectionTitle = `${ui.titlePrefix}: ${activeCategoryLabel}`;

    return (
        <section className={s.section}>
            <header className={s.head}>
                <div>
                    <h1 className={s.title}>{sectionTitle}</h1>
                    <p className={s.subtitle}>{ui.subtitle}</p>
                </div>

                <button type="button" className={s.homeButton} onClick={onGoHome}>
                    {ui.homeButton}
                </button>
            </header>

            {formulas.length ? (
                <div className={s.grid}>
                    {formulas.map((formula) => (
                        <Card key={formula.id} formula={formula} ui={cardUi} />
                    ))}
                </div>
            ) : (
                <p className={s.emptyState}>{ui.emptyState}</p>
            )}
        </section>
    );
};
