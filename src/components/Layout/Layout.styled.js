import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.textColor};
  font-size: 18px;
  font-weight: 600;
  padding: 20px;
  display: inline-flex;
  transition: color 0.3s linear;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.accentColor};
  }

  &.active {
    color: ${props => props.theme.colors.accentColor};
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
