import { Suspense, useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import cn from 'classnames';

import './styles/index.scss';
import { ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={ cn('app', theme) }>
      <button onClick={ toggleTheme }>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageLazy />}/>
          <Route path={'/'} element={<MainPageLazy />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;