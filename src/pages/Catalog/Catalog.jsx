import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CatalogList, CatalogWrapper } from './Catalog.styled';
import { Filters } from 'components/Filters/Filters';
import { CarCard } from 'components/CarCard/CarCard';

const getAllCars = async () => {
  try {
    const response = await axios.get(
      'https://654f6668358230d8f0cd4625.mockapi.io/contacts/adverts'
    );
    const allCars = response.data;
    return allCars;
  } catch (error) {
    console.error('Error fetching cars:', error);
  }
};

const Catalog = () => {
  const [cars, setCars] = useState([]);

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
              img={car.img}
              photoLink={car.photoLink}
              make={car.make}
              model={car.model}
              year={car.year}
            />
          ))}
        </CatalogList>
      </CatalogWrapper>
    </>
  );
};

export default Catalog;
