import styled from 'styled-components';

export const CarCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 274px;
`;

export const CarImg = styled.img`
  height: 268px;
  border-radius: 14px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
`;

export const CarTitle = styled.h2`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;

export const CarModel = styled.p`
  color: ${props => props.theme.colors.secondAccentColor};
`;
