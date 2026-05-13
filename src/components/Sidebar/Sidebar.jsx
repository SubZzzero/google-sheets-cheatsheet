import s from './Sidebar.module.css';

export const Sidebar = ({
    categories,
    activeCategoryId,
    isOpen,
    ui,
    onClose,
    onSelectCategory,
}) => {
    return (
        <>
            <button
                type="button"
                className={`${s.backdrop} ${isOpen ? s.backdropVisible : ''}`}
                aria-label={ui.closePanelAriaLabel}
                onClick={onClose}
            />

            <aside className={`${s.sidebar} ${isOpen ? s.open : ''}`}>
                <nav aria-label={ui.navAriaLabel}>
                    <ul className={s.list}>
                        {categories.map((category) => (
                            <li key={category.id}>
                                <button
                                    type="button"
                                    className={`${s.categoryButton} ${activeCategoryId === category.id ? s.active : ''
                                         }`}
                                    onClick={() => onSelectCategory(category.id)}
                                >
                                    {category.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};
