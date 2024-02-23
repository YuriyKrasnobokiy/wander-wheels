import styled from 'styled-components';

export const CatalogWrapper = styled.div`
  max-width: 1184px;
  padding: 0 8px;
  margin: 0 auto;
`;

export const CatalogList = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px 30px;
`;
