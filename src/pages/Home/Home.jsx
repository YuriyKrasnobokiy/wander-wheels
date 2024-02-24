import React from 'react';
import {
  AccentWord,
  HomeDescr,
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

        <HomeSlogan>
          <AccentWord>Speed</AccentWord> to <AccentWord>Success</AccentWord>,{' '}
          <AccentWord>Drive</AccentWord> to <AccentWord>Explore</AccentWord>
        </HomeSlogan>
        <HomeDescr>
          WANDER WHEELS is an online platform that allows users to rent cars for
          an hourly or multi-hour period. Users can choose vehicles from various
          models and categories, reserve a specific time and location for
          pick-up, and receive information about the availability and cost of
          the cars. The website may also provide details about rental conditions
          and offer online payment options. Such a service offers a convenient
          and flexible way to use transportation for short-term needs, such as
          city trips or brief travels. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Vitae impedit magnam in ea asperiores ut recusandae
          neque reprehenderit aliquid quaerat magnam in ea recusandae
        </HomeDescr>
      </HomeTextWrapper>
    </HomeWrapper>
  );
};

export default Home;
