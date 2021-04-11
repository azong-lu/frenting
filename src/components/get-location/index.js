import React, { useState, useEffect } from 'react';
import { acquireIp } from 'services/AmapAPI';
import location from 'asserts/location.png';

import styles from './index.less'

export default function GetLocation() {
  const [currentLocal, setCurrentLocal] = useState('全国');
  useEffect(() => {
    const key = 'f09c9da07eeed2b4c43f598e8f00d162';
    acquireIp({ key }).then((res) => {
      const { city } = res;
      setCurrentLocal(city);
    });
  }, [currentLocal]);
  return (
    <div className={styles.location}>
      <span>{currentLocal}</span>
      <img src={location} alt='location' />
    </div>
  );
}
