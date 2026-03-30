import { Card } from '../Card/Card';
import s from './CardList.module.css';

export const CardList = ({ formulas, activeCategory, onGoHome }) => {
    const sectionTitle = `Категория: ${activeCategory}`;

    return (
        <section className={s.section}>
            <header className={s.head}>
                <div>
                    <h1 className={s.title}>{sectionTitle}</h1>
                    <p className={s.subtitle}>
                        Выберите формулу, скопируйте синтаксис и используйте расширенный блок Example,
                        чтобы быстро понять логику расчета.
                    </p>
                </div>

                <button type="button" className={s.homeButton} onClick={onGoHome}>
                    На стартовую
                </button>
            </header>

            {formulas.length ? (
                <div className={s.grid}>
                    {formulas.map((formula) => (
                        <Card key={formula.id} formula={formula} />
                    ))}
                </div>
            ) : (
                <p className={s.emptyState}>Для этой категории формулы не найдены.</p>
            )}
        </section>
    );
};
