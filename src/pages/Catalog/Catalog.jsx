import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CatalogList, CatalogWrapper, LoadMoreBtn } from './Catalog.styled';
import { Filters } from 'components/Filters/Filters';
import { CarCard } from 'components/CarCard/CarCard';
import { CarModal } from 'components/CarModal/CarModal';
import { fetchCars, fetchMoreCars } from 'redux/cars/carsSlice';
import { openModal } from 'redux/modal/modalSlice';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
// import { Loader } from 'components/Loader/Loader';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.carsStore.cars);
  const currentPage = useSelector(state => state.carsStore.currentPage);
  const isOpenModal = useSelector(state => state.modal.isOpenModal);
  const modalData = useSelector(state => state.modal.modalData);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const openCarModal = car => {
    dispatch(openModal(car));
  };

  const loadMoreCars = () => {
    dispatch(fetchMoreCars(currentPage + 1));
  };

  return (
    <>
      <CatalogWrapper>
        <Filters />
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

        <LoadMoreBtn type="button" onClick={loadMoreCars}>
          Load more
        </LoadMoreBtn>
        {isOpenModal && <CarModal modalData={modalData} />}
        <NotificationContainer />
      </CatalogWrapper>
      )
    </>
  );
};

export default Catalog;
