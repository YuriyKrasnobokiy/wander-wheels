import React from 'react';
import {
  FilterSelect,
  FiltersBtn,
  FiltersWrapper,
  SelectLabel,
  SelectWrapper,
} from './Filters.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterWord } from 'redux/cars/carsSlice';
import { selectFilterWord } from 'redux/cars/carsSelectors';

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
  'Mercedes',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Chrysler',
  'Kia',
  'Land',
];

export const Filters = () => {
  const filterWord = useSelector(selectFilterWord);
  const dispatch = useDispatch();
  const onChange = evt => {
    dispatch(setFilterWord(evt.target.value));
  };

  return (
    <FiltersWrapper>
      <SelectWrapper>
        <SelectLabel htmlFor="make_filter">Car brand</SelectLabel>
        <FilterSelect
          placeholder="Enter the text"
          name="carMakeFilter"
          id="make_filter"
          value={filterWord}
          onChange={onChange}
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
