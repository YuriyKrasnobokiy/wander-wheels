import styled from 'styled-components';

export const CatalogWrapper = styled.div`
  max-width: 1184px;
  padding: 0 8px 20px;
  margin: 0 auto;
`;

export const CatalogList = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px 30px;
  margin-bottom: 100px;
`;

export const LoadMoreBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${props => props.theme.colors.secondAccentColor};
  background-color: transparent;

  transition: color 300ms linear;

  &:hover {
    color: ${props => props.theme.colors.accentColor};
  }
`;
