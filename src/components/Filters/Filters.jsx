import React from 'react';
import {
  FilterSelect,
  FiltersBtn,
  FiltersWrapper,
  SelectLabel,
  SelectWrapper,
} from './Filters.styled';

const filterOptions = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];

export const Filters = () => {
  return (
    <FiltersWrapper>
      <SelectWrapper>
        <SelectLabel htmlFor="car_filter">Car brand</SelectLabel>
        <FilterSelect
          placeholder="Enter the text"
          name="carNameFilter"
          id="car_filter"
        >
          {filterOptions.map((item, idx) => (
            <option key={idx}>{item}</option>
          ))}
        </FilterSelect>
      </SelectWrapper>
      <FiltersBtn>Search</FiltersBtn>
    </FiltersWrapper>
  );
};
