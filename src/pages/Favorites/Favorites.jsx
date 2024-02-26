import { CarCard } from 'components/CarCard/CarCard';
import { CarModal } from 'components/CarModal/CarModal';
import { CatalogList, CatalogWrapper } from 'pages/Catalog/Catalog.styled';
import React, { useEffect } from 'react';
import { NotificationContainer } from 'react-notifications';
import { useDispatch, useSelector } from 'react-redux';
import { selectfavoriteCars } from 'redux/cars/carsSelectors';
import { fetchCars } from 'redux/cars/carsSlice';
import { openModal } from 'redux/modal/modalSlice';

const Favorites = () => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectfavoriteCars);
  console.log('favoriteCars: ', favoriteCars);
  const isOpenModal = useSelector(state => state.modal.isOpenModal);
  const modalData = useSelector(state => state.modal.modalData);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const openCarModal = car => {
    dispatch(openModal(car));
  };

  return (
    <>
      <CatalogWrapper>
        <CatalogList>
          {favoriteCars.map(car => (
            <CarCard
              key={car.id}
              // id={car.id}
              // img={car.img}
              // photoLink={car.photoLink}
              // make={car.make}
              // model={car.model}
              // year={car.year}
              // rentalPrice={car.rentalPrice}
              // type={car.type}
              // mileage={car.mileage}
              // address={car.address}
              // functionalities={car.functionalities}
              // rentalCompany={car.rentalCompany}
              // fuelConsumption={car.fuelConsumption}
              // engineSize={car.engineSize}
              // description={car.description}
              // accessories={car.accessories}
              // rentalConditions={car.rentalConditions}
              openModal={openCarModal}
              car={car}
            />
          ))}
        </CatalogList>

        {isOpenModal && <CarModal modalData={modalData} />}
        <NotificationContainer />
      </CatalogWrapper>
    </>
  );
};

export default Favorites;
