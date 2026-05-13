import s from './Header.module.css';
import { LOCALE_LABELS, SUPPORTED_LOCALES } from '../../i18n';

export const Header = ({ locale, onLocaleChange, ui, showMenu, isSidebarOpen, onMenuClick }) => {
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
        </header>
    );
};
