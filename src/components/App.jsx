import { Suspense, lazy } from 'react';
import Layout from './Layout/Layout';
import { Loader } from './Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home/Home'));
const Catalog = lazy(() => import('pages/Catalog/Catalog'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));

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
    filterSelectBackground: '#f7f7fb',
    filterOptionColor: 'rgba(18, 20, 23, 0.2)',
    filterOptionColorHover: '#121417',
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
