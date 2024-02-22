import React from 'react';

import { NavLinkStyled } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
        <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
