import React from 'react';
import { CarCardWrapper, CarImg, CarModel, CarTitle } from './CarCard.styled';

export const CarCard = ({ img, photoLink, make, model, year }) => {
  return (
    <CarCardWrapper>
      {img && <CarImg src={img} alt="car" />}
      {photoLink && <CarImg src={photoLink} alt="car" />}
      <CarTitle>
        {make} <CarModel>{model}</CarModel>, {year}
      </CarTitle>
      <button>Learn more</button>
    </CarCardWrapper>
  );
};
