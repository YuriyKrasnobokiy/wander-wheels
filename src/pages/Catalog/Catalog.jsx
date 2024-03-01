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
import {
  selectCars,
  selectCurrentPage,
  selectFilterWord,
} from 'redux/cars/carsSelectors';
import { selectIsOpenModal, selectModalData } from 'redux/modal/modalSelectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrentPage);
  const isOpenModal = useSelector(selectIsOpenModal);
  const modalData = useSelector(selectModalData);
  const filterWord = useSelector(selectFilterWord);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const openCarModal = car => {
    dispatch(openModal(car));
  };

  const loadMoreCars = () => {
    dispatch(fetchMoreCars(currentPage + 1));
  };

  const filteredCarCards = cars.filter(car =>
    car.make.toLowerCase().includes(filterWord.toLowerCase())
  );

  return (
    <>
      <CatalogWrapper>
        <Filters />
        <CatalogList>
          {filteredCarCards.map(car => (
            <CarCard key={car.id} openModal={openCarModal} car={car} />
          ))}
        </CatalogList>

        {filteredCarCards.length % 12 !== 0 ||
        !cars.length ||
        cars.length % 12 !== 0 ? null : (
          <LoadMoreBtn type="button" onClick={loadMoreCars}>
            Load more
          </LoadMoreBtn>
        )}

        {isOpenModal && <CarModal modalData={modalData} />}
        <NotificationContainer />
      </CatalogWrapper>
    </>
  );
};

export default Catalog;
