import s from './Header.module.css';

export const Header = ({ showMenu, isSidebarOpen, onMenuClick }) => {
    return (
        <header className={s.header}>
            <div className={s.inner}>
                {showMenu ? (
                    <button
                        type="button"
                        className={s.menuButton}
                        aria-label="Открыть или закрыть категории"
                        aria-expanded={isSidebarOpen}
                        onClick={onMenuClick}
                    >
                        <span className={s.menuLine} />
                        <span className={s.menuLine} />
                        <span className={s.menuLine} />
                    </button>
                ) : null}

                <img className={s.logo} src="/logo.png" alt="Логотип Google Sheets" />
                <span className={s.productName}>Google Sheets Cheatsheet</span>
            </div>
        </header>
    );
};
