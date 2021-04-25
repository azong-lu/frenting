import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { acquireIp } from 'services/AmapAPI';
import location from 'asserts/location.png';
import { useStore } from 'store/store';

import styles from './index.less';

const GetLocation = (props) => {
  const { newLocation, currentLocal } = useStore();
  useEffect(() => {
    const key = 'f09c9da07eeed2b4c43f598e8f00d162';
    if (currentLocal === '全国') {
      acquireIp({ key }).then((res) => {
        const { city } = res;
        newLocation(city);
      });
    }

  }, []);

  return (
    <div className={styles.location}>
      <span>{currentLocal}</span>
      <img src={location} alt='location' />
    </div>
  );
};


export default observer(GetLocation);
