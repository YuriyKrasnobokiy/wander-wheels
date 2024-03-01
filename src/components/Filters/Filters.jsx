import React, { useState } from 'react';
import {
  FiltersBtn,
  FiltersWrapper,
  SelectLabel,
  SelectWrapper,
} from './Filters.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterWord } from 'redux/cars/carsSlice';
import { selectFilterWord } from 'redux/cars/carsSelectors';
import Select from 'react-select';

const filterOptions = [
  { value: '', label: 'All brands' },
  { value: 'Buick', label: 'Buick' },
  { value: 'Volvo', label: 'Volvo' },
  { value: 'HUMMER', label: 'HUMMER' },
  { value: 'Subaru', label: 'Subaru' },
  { value: 'Mitsubishi', label: 'Mitsubishi' },
  { value: 'Nissan', label: 'Nissan' },
  { value: 'Lincoln', label: 'Lincoln' },
  { value: 'GMC', label: 'GMC' },
  { value: 'Hyundai', label: 'Hyundai' },
  { value: 'MINI', label: 'MINI' },
  { value: 'Bentley', label: 'Bentley' },
  { value: 'Mercedes', label: 'Mercedes' },
  { value: 'Aston Martin', label: 'Aston Martin' },
  { value: 'Pontiac', label: 'Pontiac' },
  { value: 'Lamborghini', label: 'Lamborghini' },
  { value: 'Audi', label: 'Audi' },
  { value: 'BMW', label: 'BMW' },
  { value: 'Chevrolet', label: 'Chevrolet' },
  { value: 'Chrysler', label: 'Chrysler' },
  { value: 'Kia', label: 'Kia' },
  { value: 'Land', label: 'Land' },
];

const customStyles = {
  control: provided => ({
    ...provided,
    border: 'none',
    backgroundColor: '#f7f7fb',
    borderRadius: '14px',
    padding: '6px',
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: '#fff',
    borderRadius: '14px',
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isFocused ? '#121417' : 'rgba(18, 20, 23, 0.2)',
    backgroundColor: 'transparent',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: 1.25,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),
  indicatorsContainer: provided => ({
    ...provided,
    cursor: 'pointer',
  }),
};

export const Filters = () => {
  const filterWord = useSelector(selectFilterWord);
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(
    filterOptions.find(option => option.value === filterWord) || null
  );

  const onChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  const onSearchClick = () => {
    if (selectedOption) {
      dispatch(setFilterWord(selectedOption.value));
    } else {
      dispatch(setFilterWord(''));
    }
  };

  return (
    <FiltersWrapper>
      <SelectWrapper>
        <SelectLabel>Car brand</SelectLabel>
        <Select
          placeholder="Enter the text"
          name="carMakeFilter"
          id="make_filter"
          styles={customStyles}
          options={filterOptions}
          value={selectedOption}
          onChange={onChange}
        ></Select>
      </SelectWrapper>
      <FiltersBtn onClick={onSearchClick}>Search</FiltersBtn>
    </FiltersWrapper>
  );
};
