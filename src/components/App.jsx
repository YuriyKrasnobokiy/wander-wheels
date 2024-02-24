import { Suspense } from 'react';
import Layout from './Layout/Layout';
import { Loader } from './Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Catalog from 'pages/Catalog/Catalog';
import Favorites from 'pages/Favorites/Favorites';

export const theme = {
  colors: {
    buttonBgColor: '#3470ff',
    textColor: '#121417',
    secondTextColor: '#8a8a89',
    accentColor: '#0b44cd',
    secondAccentColor: '#3470ff',
    buttonTextColor: '#fff',
    heartIconStrokeColor: '#858688',
    filterLabelColor: '#8a8a89',
    filterInputBackground: '#f7f7fb',
    favoriteIconStroke: 'rgba(255, 255, 255, 0.8)',
    modarOverlayColor: 'rgba(18, 20, 23, 0.5)',
    modalBgColor: '#fff',
    rentalCondLiBGColor: '#f9f9f9;',
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
