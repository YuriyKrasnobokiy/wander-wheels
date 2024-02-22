import React from 'react';
import {
  HomeSlogan,
  HomeTextWrapper,
  HomeTitle,
  HomeWrapper,
} from './Home.styled';

const Home = () => {
  return (
    <HomeWrapper>
      <HomeTextWrapper>
        <HomeTitle>WANDER WHEELS</HomeTitle>
        <HomeSlogan>Speed to Success, Drive to Explore!</HomeSlogan>
      </HomeTextWrapper>
    </HomeWrapper>
  );
};

export default Home;
