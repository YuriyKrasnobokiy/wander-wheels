import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CatalogList, CatalogWrapper } from './Catalog.styled';
import { Filters } from 'components/Filters/Filters';
import { CarCard } from 'components/CarCard/CarCard';
import { CarModal } from 'components/CarModal/CarModal';
import { fetchCars } from 'redux/cars/carsSlice';
import { openModal } from 'redux/modal/modalSlice';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.carsStore.cars);
  const isOpenModal = useSelector(state => state.modal.isOpenModal);
  const modalData = useSelector(state => state.modal.modalData);

  ////fetchCars при монтажі компонента////
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  ////Відкриваємо модалку з даними про автомобіль////
  const openCarModal = car => {
    dispatch(openModal(car));
  };

  return (
    <>
      <Filters />
      <CatalogWrapper>
        <CatalogList>
          {cars.map(car => (
            <CarCard
              key={car.id}
              id={car.id}
              img={car.img}
              photoLink={car.photoLink}
              make={car.make}
              model={car.model}
              year={car.year}
              rentalPrice={car.rentalPrice}
              type={car.type}
              mileage={car.mileage}
              address={car.address}
              functionalities={car.functionalities}
              rentalCompany={car.rentalCompany}
              fuelConsumption={car.fuelConsumption}
              engineSize={car.engineSize}
              description={car.description}
              accessories={car.accessories}
              rentalConditions={car.rentalConditions}
              openModal={openCarModal}
            />
          ))}
        </CatalogList>
        {isOpenModal && <CarModal modalData={modalData} />}
      </CatalogWrapper>
    </>
  );
};

export default Catalog;
