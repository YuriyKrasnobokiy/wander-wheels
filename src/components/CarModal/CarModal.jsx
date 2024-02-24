import React, { useEffect } from 'react';
import {
  CarModalDescr,
  CarModalFeatures,
  CarModalImg,
  CarModalTag,
  CarModalTagsList,
  CarModalTitle,
  CarModalTitleWrap,
  CarModalWrapper,
  CloseButton,
  ModalBtn,
  ModalFeaturesLi,
  ModalFeaturesList,
  ModalFeaturesTitle,
  ModalRentalPriceStyled,
  ModalStyled,
  RentalCondLi,
  RentalCondList,
  RentalCondTitle,
  RentalCondWrapper,
} from './CardModal.styled';
import { ReactComponent as IconCross } from 'assets/icons/crossSvg.svg';
import { CarModel } from 'components/CarCard/CarCard.styled';
import { closeModal } from 'redux/modal/modalSlice';
import { useDispatch } from 'react-redux';

export const CarModal = ({ modalData }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      // componentWillUnmount(
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleOverlayClick = evt => {
    if (evt.target === evt.currentTarget) {
      dispatch(closeModal());
    }
  };

  const {
    id,
    img,
    photoLink,
    make,
    model,
    type,
    year,
    accessories,
    engineSize,
    rentalPrice,
    rentalConditions,
    fuelConsumption,
    address,
    mileage,
    functionalities,
    description,
  } = modalData;

  // Перетворив адресу на масив та розділив елементи комою з пробілом
  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  const rentalConditionsParts = rentalConditions.split('\n');

  const formattedMileage = mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const formattedPrice = rentalPrice.slice(1, 3);
  const formattedPriceCurrency = `${formattedPrice}$`;

  return (
    <CarModalWrapper onClick={handleOverlayClick}>
      <ModalStyled>
        <CloseButton onClick={() => dispatch(closeModal())} type="button">
          <IconCross />
        </CloseButton>
        {img && <CarModalImg src={img} alt="car" />}
        {photoLink && <CarModalImg src={photoLink} alt="car" />}
        <CarModalTitleWrap>
          <CarModalTitle>
            {make}
            <span>&nbsp;</span>
            <CarModel>{model}</CarModel>, {year}
          </CarModalTitle>
        </CarModalTitleWrap>
        <CarModalTagsList>
          <CarModalTag>{city}</CarModalTag>
          <CarModalTag>{country}</CarModalTag>
          <CarModalTag>Id: {id}</CarModalTag>
          <CarModalTag>Year: {year}</CarModalTag>
          <CarModalTag>Type: {type}</CarModalTag>
          <CarModalTag>Fuel Consumption: {fuelConsumption}</CarModalTag>
          <CarModalTag>Engine Size: {engineSize}</CarModalTag>
        </CarModalTagsList>
        <CarModalDescr>{description}</CarModalDescr>

        <CarModalFeatures>
          <ModalFeaturesTitle>
            Accessories and functionalities:
          </ModalFeaturesTitle>
          <li>
            <ModalFeaturesList>
              <ModalFeaturesLi>{accessories[0]}</ModalFeaturesLi>
              <ModalFeaturesLi>{accessories[1]}</ModalFeaturesLi>
              <ModalFeaturesLi>{accessories[2]}</ModalFeaturesLi>
            </ModalFeaturesList>
          </li>
          <li>
            <ModalFeaturesList>
              <ModalFeaturesLi>{functionalities[0]}</ModalFeaturesLi>
              <ModalFeaturesLi>{functionalities[1]}</ModalFeaturesLi>
              <ModalFeaturesLi>{functionalities[2]}</ModalFeaturesLi>
            </ModalFeaturesList>
          </li>
        </CarModalFeatures>

        <RentalCondWrapper>
          <RentalCondTitle>Rental Conditions:</RentalCondTitle>
          <RentalCondList>
            <RentalCondLi>{rentalConditionsParts[0]}</RentalCondLi>
            <RentalCondLi>{rentalConditionsParts[1]}</RentalCondLi>
            <RentalCondLi>{rentalConditionsParts[2]}</RentalCondLi>
            <RentalCondLi>
              Mileage:{' '}
              <ModalRentalPriceStyled>
                {formattedMileage}
              </ModalRentalPriceStyled>
            </RentalCondLi>
            <RentalCondLi>
              Price:{' '}
              <ModalRentalPriceStyled>
                {formattedPriceCurrency}
              </ModalRentalPriceStyled>
            </RentalCondLi>
          </RentalCondList>
        </RentalCondWrapper>
        <ModalBtn type="button">Rental car</ModalBtn>
      </ModalStyled>
    </CarModalWrapper>
  );
};
