import { Suspense } from 'react';
import Layout from './Layout/Layout';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Catalog from 'pages/Catalog/Catalog';
import Favorites from 'pages/Favorites/Favorites';

export const theme = {
  colors: {
    buttonBgColor: '#3470ff',
    accentColor: '#0b44cd',
    secondAccentColor: '#3470ff',
    buttonTextColor: '#fff',
    heartIconStrokeColor: 'rgba(255, 255, 255, 0.8)',
    filterLabelColor: '#8a8a89',
    filterInputBackground: '#f7f7fb',
    textColor: '#121417',
  },
};

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
};
