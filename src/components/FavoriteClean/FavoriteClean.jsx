import React from 'react';
import { FavCleanText, FavCleanWrap } from './FavoriteClean.styled';

export const FavoriteClean = () => {
  return (
    <>
      <FavCleanWrap>
        <FavCleanText>
          There are no favorite cars currently,
          <br /> but you can always add some...
          <br />
          😀😊😉
        </FavCleanText>
      </FavCleanWrap>
    </>
  );
};
