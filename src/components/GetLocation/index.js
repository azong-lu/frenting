import { message } from 'antd';
import React, { useState, useEffect } from 'react';

export default function GetLocation() {
  const [currentLocal, setCurrentLocal] = useState('');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        // setCurrentLocal(res);
        console.log(res);
      },
      (err) => {
        message.error(`定位失败，当前设备不支持定位`);
      }
    );
  }, [currentLocal]);
  return <div>{currentLocal}</div>;
}
