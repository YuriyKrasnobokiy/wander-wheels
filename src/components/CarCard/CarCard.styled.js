import styled from 'styled-components';

export const CarCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 274px;

  position: relative;
`;

export const FavoriteBtn = styled.button`
  background-color: transparent;
  position: absolute;
  color: ${props => props.theme.colors.favoriteIconStroke};
  top: 16px;
  right: 16px;

  transition: color 300ms linear;

  &:hover {
    color: ${props => props.theme.colors.secondAccentColor};
  }
`;

export const CarImg = styled.img`
  height: 268px;
  border-radius: 14px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
`;

export const CarTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`;

export const CarTitle = styled.h2`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const CarModel = styled.p`
  color: ${props => props.theme.colors.secondAccentColor};
`;

export const CarPrice = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const CarTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
  height: 40px;
  overflow: hidden;
`;

export const CarTag = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${props => props.theme.colors.secondTextColor};
  border-right: 1px solid;
  border-color: ${props => props.theme.colors.secondTextColor};
  padding-right: 6px;
  padding-bottom: 4px;
  margin-right: 6px;

  &:last-child {
    border: none;
    padding-right: 0;
  }
`;

export const CarCardBtn = styled.button`
  display: flex;
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 12px;
  padding: 12px;
  justify-content: center;
  color: ${props => props.theme.colors.buttonTextColor};
  background-color: ${props => props.theme.colors.buttonBgColor};
  transition: background-color 300ms linear;

  &:hover {
    background-color: ${props => props.theme.colors.accentColor};
  }
`;
