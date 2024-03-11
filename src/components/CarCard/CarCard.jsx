import React from 'react';
import {
  CarCardBtn,
  CarCardWrapper,
  CarImg,
  CarModel,
  CarPrice,
  CarTag,
  CarTagsList,
  CarTitle,
  CarTitleWrap,
  FavoriteBtn,
} from './CarCard.styled';
import { ReactComponent as IconFavorite } from 'assets/icons/favoriteSvg.svg';
import { ReactComponent as IconFavorite2 } from 'assets/icons/favorite2Svg.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
  toggleSelectedCar,
} from 'redux/cars/carsSlice';
import { selectToggleSelectedCar } from 'redux/cars/carsSelectors';

export const CarCard = ({ car, openModal }) => {
  const {
    id,
    img,
    engineSize,
    photoLink,
    make,
    model,
    type,
    year,
    rentalPrice,
    address,
    rentalCompany,
    mileage,
    functionalities,

    fuelConsumption,
    description,
    accessories,
    rentalConditions,
  } = car;
  //// Перетворив адресу на масив та розділив елементи комою з пробілом////
  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  const dispatch = useDispatch();

  const selectedCarIds = useSelector(selectToggleSelectedCar);
  const isFavorite = selectedCarIds.includes(id);

  const toggleFavorite = car => {
    if (isFavorite) {
      dispatch(removeFromFavorites(car));
    } else {
      dispatch(addToFavorites(car));
    }
    dispatch(toggleSelectedCar(car.id));
  };

  return (
    <CarCardWrapper>
      <FavoriteBtn onClick={() => toggleFavorite(car)}>
        {isFavorite ? <IconFavorite2 /> : <IconFavorite />}
      </FavoriteBtn>
      {img && <CarImg src={img} alt="car" />}
      {photoLink && <CarImg src={photoLink} alt="car" />}
      <CarTitleWrap>
        <CarTitle>
          {make}
          <span>&nbsp;</span>
          <CarModel>{model}</CarModel>, {year}
        </CarTitle>
        <CarPrice>{rentalPrice}</CarPrice>
      </CarTitleWrap>
      <CarTagsList>
        <CarTag>{city}</CarTag>
        <CarTag>{country}</CarTag>
        <CarTag>{rentalCompany}</CarTag>
        <CarTag>{type}</CarTag>
        <CarTag>{model}</CarTag>
        <CarTag>{mileage}</CarTag>
        <CarTag>{functionalities[0]}</CarTag>
      </CarTagsList>
      <CarCardBtn
        type="button"
        onClick={() =>
          openModal({
            id,
            img,
            photoLink,
            make,
            model,
            type,
            year,
            rentalPrice,
            address,
            rentalCompany,
            mileage,
            functionalities,
            fuelConsumption,
            engineSize,
            description,
            accessories,
            rentalConditions,
          })
        }
      >
        Learn more
      </CarCardBtn>
    </CarCardWrapper>
  );
};
