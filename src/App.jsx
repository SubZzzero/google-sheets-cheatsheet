import { useEffect, useMemo, useState } from 'react';
import s from './App.module.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { CardList } from './components/CardList/CardList';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import {
  CATEGORY_ORDER,
  getCategoryLabel,
  getStoredLocale,
  getUiText,
  persistLocale,
} from './i18n';
import { getFormulas } from './data/localizedFormulas';

const THEME_STORAGE_KEY = 'gs-cheatsheet-theme';
const DEFAULT_THEME = 'light';

const isSupportedTheme = (theme) => theme === 'light' || theme === 'dark';

const getSystemTheme = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return DEFAULT_THEME;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getStoredTheme = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  return isSupportedTheme(storedTheme) ? storedTheme : null;
};

const getInitialTheme = () => getStoredTheme() ?? getSystemTheme();

const persistTheme = (theme) => {
  if (typeof window === 'undefined' || !isSupportedTheme(theme)) {
    return;
  }

  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
};

function App() {
  const [locale, setLocale] = useState(() => getStoredLocale());
  const [theme, setTheme] = useState(() => getInitialTheme());
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const ui = useMemo(() => getUiText(locale), [locale]);
  const formulas = useMemo(() => getFormulas(locale), [locale]);

  useEffect(() => {
    persistLocale(locale);
    document.documentElement.lang = locale === 'ua' ? 'uk' : locale;
    document.title = ui.documentTitle;
  }, [locale, ui.documentTitle]);

  useEffect(() => {
    persistTheme(theme);
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(formulas.map((item) => item.categoryId))];
    const orderedCategories = CATEGORY_ORDER.filter((categoryId) => uniqueCategories.includes(categoryId));
    const customCategories = uniqueCategories.filter((categoryId) => !CATEGORY_ORDER.includes(categoryId));

    return [...orderedCategories, ...customCategories];
  }, [formulas]);

  const categoriesWithCount = useMemo(
    () =>
      categories.map((categoryId) => ({
        id: categoryId,
        label: getCategoryLabel(categoryId, locale),
        count: formulas.filter((item) => item.categoryId === categoryId).length,
      })),
    [categories, formulas, locale]
  );

  const filteredFormulas = useMemo(() => {
    if (!activeCategoryId) {
      return [];
    }

    return formulas.filter((item) => item.categoryId === activeCategoryId);
  }, [activeCategoryId, formulas]);

  const handleSelectCategory = (categoryId) => {
    setActiveCategoryId(categoryId);
    setSidebarOpen(false);
  };

  const handleGoHome = () => {
    setActiveCategoryId(null);
    setSidebarOpen(false);
  };

  return (
    <div className={s.app}>
      <Header
        locale={locale}
        theme={theme}
        onLocaleChange={setLocale}
        onThemeToggle={() => setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))}
        ui={ui.header}
        showMenu={Boolean(activeCategoryId)}
        isSidebarOpen={isSidebarOpen}
        onMenuClick={() => setSidebarOpen((prevState) => !prevState)}
      />

      <div className={`${s.pageLayout} ${!activeCategoryId ? s.pageLayoutHome : ''}`}>
        {activeCategoryId ? (
          <Sidebar
            categories={categoriesWithCount}
            activeCategoryId={activeCategoryId}
            isOpen={isSidebarOpen}
            ui={ui.sidebar}
            onClose={() => setSidebarOpen(false)}
            onSelectCategory={handleSelectCategory}
          />
        ) : null}

        <main className={s.mainContent}>
          {activeCategoryId ? (
            <CardList
              formulas={filteredFormulas}
              activeCategoryLabel={getCategoryLabel(activeCategoryId, locale)}
              ui={ui.cardList}
              cardUi={ui.card}
              onGoHome={handleGoHome}
            />
          ) : (
            <Home
              categories={categoriesWithCount}
              locale={locale}
              ui={ui.home}
              onSelectCategory={handleSelectCategory}
            />
          )}
        </main>
      </div>

      <ScrollToTop ui={ui.scrollToTop} />

      <Footer ui={ui.footer} />
    </div>
  );
}

export default App;
