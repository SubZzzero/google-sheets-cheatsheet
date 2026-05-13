import s from './Header.module.css';
import { LOCALE_LABELS, SUPPORTED_LOCALES } from '../../i18n';

export const Header = ({
    locale,
    theme,
    onLocaleChange,
    onThemeToggle,
    ui,
    showMenu,
    isSidebarOpen,
    onMenuClick,
}) => {
    const nextThemeLabel = theme === 'light' ? ui.darkTheme : ui.lightTheme;
    const nextThemeIcon = theme === 'light' ? '/moon.png' : '/sun.png';
    const themeIconClassName = `${s.themeIcon} ${theme === 'dark' ? s.themeIconOnDark : ''}`;

    return (
        <header className={s.header}>
            <div className={s.inner}>
                <div className={s.brandRow}>
                    {showMenu ? (
                        <button
                            type="button"
                            className={s.menuButton}
                            aria-label={ui.menuAriaLabel}
                            aria-expanded={isSidebarOpen}
                            onClick={onMenuClick}
                        >
                            <span className={s.menuLine} />
                            <span className={s.menuLine} />
                            <span className={s.menuLine} />
                        </button>
                    ) : null}

                    <img className={s.logo} src="/logo.png" alt={ui.logoAlt} />
                    <span className={s.productName}>{ui.productName}</span>
                </div>

                <div className={s.controls}>
                    <button
                        type="button"
                        className={s.themeButton}
                        onClick={onThemeToggle}
                        aria-label={`${ui.themeSwitcherLabel}: ${nextThemeLabel}`}
                        aria-pressed={theme === 'dark'}
                        title={`${ui.themeSwitcherLabel}: ${nextThemeLabel}`}
                    >
                        <img className={themeIconClassName} src={nextThemeIcon} alt="" aria-hidden="true" />
                    </button>

                    <div className={s.languageSwitcher} aria-label={ui.languageSwitcherLabel} role="group">
                        {SUPPORTED_LOCALES.map((languageCode) => (
                            <button
                                key={languageCode}
                                type="button"
                                className={`${s.languageButton} ${locale === languageCode ? s.languageButtonActive : ''}`}
                                onClick={() => onLocaleChange(languageCode)}
                                aria-pressed={locale === languageCode}
                            >
                                {LOCALE_LABELS[languageCode]}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};
