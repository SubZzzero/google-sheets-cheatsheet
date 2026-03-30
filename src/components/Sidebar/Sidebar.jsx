import s from './Sidebar.module.css';

export const Sidebar = ({
    categories,
    activeCategory,
    isOpen,
    onClose,
    onSelectCategory,
}) => {
    return (
        <>
            <button
                type="button"
                className={`${s.backdrop} ${isOpen ? s.backdropVisible : ''}`}
                aria-label="Закрыть панель категорий"
                onClick={onClose}
            />

            <aside className={`${s.sidebar} ${isOpen ? s.open : ''}`}>
                <nav aria-label="Категории формул">
                    <ul className={s.list}>
                        {categories.map((category) => (
                            <li key={category}>
                                <button
                                    type="button"
                                    className={`${s.categoryButton} ${activeCategory === category ? s.active : ''
                                        }`}
                                    onClick={() => onSelectCategory(category)}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};
