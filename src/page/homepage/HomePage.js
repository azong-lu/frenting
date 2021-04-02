import React from 'react';
import GetLocation from 'components/GetLocation/index';

const HomePage = () => {
  const renderBanner = () => {
    return <GetLocation />;
  };
  return (
    <div>
      <div>{renderBanner()}</div>
    </div>
  );
};

export default HomePage;
