import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CatalogList, CatalogWrapper } from './Catalog.styled';
import { Filters } from 'components/Filters/Filters';
import { CarCard } from 'components/CarCard/CarCard';
import { CarModal } from 'components/CarModal/CarModal';

const getAllCars = async () => {
  try {
    const response = await axios.get(
      'https://654f6668358230d8f0cd4625.mockapi.io/adverts'
    );
    const allCars = response.data;
    return allCars;
  } catch (error) {
    console.error('Error fetching cars:', error);
  }
};

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  //////ВІДКРИТТЯ МОДАЛКИ//////
  const openModal = someDataToModal => {
    setIsOpenModal(true);
    setModalData(someDataToModal);
  };

  //////ЗАКРИТТЯ МОДАЛКИ//////
  const closeModal = () => {
    setIsOpenModal(false);
    setModalData(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const carsData = await getAllCars();
      setCars(carsData);
    };

    fetchData();
  }, []);

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
              openModal={openModal}
            />
          ))}
        </CatalogList>
        {isOpenModal && (
          <CarModal modalData={modalData} closeModal={closeModal}></CarModal>
        )}
      </CatalogWrapper>
    </>
  );
};

export default Catalog;
