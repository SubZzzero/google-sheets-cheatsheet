import { useEffect, useMemo, useState } from 'react';
import s from './App.module.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { CardList } from './components/CardList/CardList';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import {
  CATEGORY_ORDER,
  getCategoryLabel,
  getStoredLocale,
  getUiText,
  persistLocale,
} from './i18n';
import { getFormulas } from './data/localizedFormulas';

function App() {
  const [locale, setLocale] = useState(() => getStoredLocale());
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const ui = useMemo(() => getUiText(locale), [locale]);
  const formulas = useMemo(() => getFormulas(locale), [locale]);

  useEffect(() => {
    persistLocale(locale);
    document.documentElement.lang = locale === 'ua' ? 'uk' : locale;
    document.title = ui.documentTitle;
  }, [locale, ui.documentTitle]);

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
        onLocaleChange={setLocale}
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

      <Footer ui={ui.footer} />
    </div>
  );
}

export default App;
