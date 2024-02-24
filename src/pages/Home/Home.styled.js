import styled from 'styled-components';

export const HomeWrapper = styled.div`
  max-width: 1184px;
  padding: 0 8px;
  margin: 0 auto;
`;

export const HomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 40px;
`;

export const HomeTitle = styled.h1`
  font-size: 124px;
  text-shadow: -5px -6px 15px ${props => props.theme.colors.accentColor};
`;

export const AccentWord = styled.span`
  color: ${props => props.theme.colors.accentColor};
`;

export const HomeSlogan = styled.h1`
  font-size: 54px;
  margin-top: 40px;
`;

export const HomeDescr = styled.p`
  font-size: 24px;
  margin: 0 auto;
  margin-top: 80px;
  text-align: center;
`;
