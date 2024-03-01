import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  margin: 0 auto 50px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 224px;
`;

export const SelectLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.filterLabelColor};
`;

export const FiltersBtn = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  border-radius: 12px;
  padding: 14px 44px;
  width: 136px;
  margin: 0 0 0 18px;
  height: 48px;
  color: ${props => props.theme.colors.buttonTextColor};
  background-color: ${props => props.theme.colors.secondAccentColor};
  transition: background-color 300ms linear;

  &:hover {
    background-color: ${props => props.theme.colors.accentColor};
  }
`;
