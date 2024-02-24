import React from 'react';

import { HeaderWrapper, NavLinkStyled } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <HeaderWrapper>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
          <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
        </HeaderWrapper>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
