import React from 'react';
import {
  FilterSelect,
  FiltersBtn,
  FiltersWrapper,
  SelectLabel,
  SelectWrapper,
} from './Filters.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
// import { setFilter } from 'redux/cars/carsSlice';

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
  // const [searchParams] = useSearchParams();
  // const dispatch = useDispatch();
  // const initialFilter = useSelector(selectFilter);
  // const handleChange = evt => {
  //   dispatch(setFilter(evt.target.value));
  // };

  return (
    <FiltersWrapper>
      <SelectWrapper>
        <SelectLabel htmlFor="make_filter">Car brand</SelectLabel>
        <FilterSelect
          placeholder="Enter the text"
          name="carMakeFilter"
          id="make_filter"
          // value={initialFilter}
          // onChange={handleChange}
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
