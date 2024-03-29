import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, theme } from 'components/App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter basename="/wander-wheels">
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
