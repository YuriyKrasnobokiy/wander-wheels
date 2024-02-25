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
`;

export const SelectLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.filterLabelColor};
`;

export const FilterSelect = styled.select`
  border-radius: 14px;
  padding: 14px 18px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  width: 224px;
  border: none;
  background-color: ${props => props.theme.colors.filterSelectBackground};

  &.dropdown {
    width: 100%;
    background-color: gray;
  }

  /* &:hover {
    background-color: gray;
    color: red;
  }

  

  & .dropdown-item {
    background-color: gray;
    color: green;

    &:hover {
      background-color: red !important;
    }
  }

  & .dropdown-item {
    background-color: black !important;
    color: white !important;
  }

  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 8px;
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 4px;
  } */
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
