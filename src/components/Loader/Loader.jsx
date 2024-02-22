import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#f7f7fb"
        color="#0b44cd"
      />
    </div>
  );
};
