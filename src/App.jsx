import { useMemo, useState } from 'react';
import s from './App.module.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { CardList } from './components/CardList/CardList';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { formulas } from './data/formulas';

const CATEGORY_ORDER = [
  'Базовые',
  'Часто используемые',
  'Логические',
  'Поиск',
  'Текст',
  'Данные',
  'Массивы',
  'Дата и время',
  'Импорт',
];

function App() {
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(formulas.map((item) => item.category))];
    const orderedCategories = CATEGORY_ORDER.filter((category) => uniqueCategories.includes(category));
    const customCategories = uniqueCategories.filter((category) => !CATEGORY_ORDER.includes(category));

    return [...orderedCategories, ...customCategories];
  }, []);

  const categoriesWithCount = useMemo(
    () =>
      categories.map((category) => ({
        name: category,
        count: formulas.filter((item) => item.category === category).length,
      })),
    [categories]
  );

  const [activeCategory, setActiveCategory] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const filteredFormulas = useMemo(() => {
    if (!activeCategory) {
      return [];
    }

    return formulas.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleSelectCategory = (category) => {
    setActiveCategory(category);
    setSidebarOpen(false);
  };

  const handleGoHome = () => {
    setActiveCategory(null);
    setSidebarOpen(false);
  };

  return (
    <div className={s.app}>
      <Header
        showMenu={Boolean(activeCategory)}
        isSidebarOpen={isSidebarOpen}
        onMenuClick={() => setSidebarOpen((prevState) => !prevState)}
      />

      <div className={`${s.pageLayout} ${!activeCategory ? s.pageLayoutHome : ''}`}>
        {activeCategory ? (
          <Sidebar
            categories={categories}
            activeCategory={activeCategory}
            isOpen={isSidebarOpen}
            onClose={() => setSidebarOpen(false)}
            onSelectCategory={handleSelectCategory}
          />
        ) : null}

        <main className={s.mainContent}>
          {activeCategory ? (
            <CardList
              formulas={filteredFormulas}
              activeCategory={activeCategory}
              onGoHome={handleGoHome}
            />
          ) : (
            <Home categories={categoriesWithCount} onSelectCategory={handleSelectCategory} />
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
