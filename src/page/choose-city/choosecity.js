import React, { useState, useEffect } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import StatusBar from 'components/status-bar/index';
import { acquireDistrict } from 'services/AmapAPI';
import styles from './choosecity.less';

const ChooseCity = (props) => {
  const [cityList, setCityList] = useState([]);
  useEffect(() => {
    const key = 'f09c9da07eeed2b4c43f598e8f00d162';
    acquireDistrict({ key }).then((res) => {
      console.log(res);
    });
  }, [setCityList]);
  const handleBack = () => {
    const { history } = props;
    history.goBack(-1);
  };
  const renderStatusBar = () => {
    return (
      <StatusBar>
        <LeftOutlined className={styles.barIcon} onClick={handleBack} />
        <span className={styles.barTitle}>选择城市</span>
      </StatusBar>
    );
  };

  const renderCity = () => (
    <div>
      <div>当前城市</div>
      <div></div>
      <div>热门城市</div>
      <div></div>
    </div>
  );

  return (
    <div>
      <div>{renderStatusBar()}</div>
      {renderCity()}
    </div>
  );
};

export default ChooseCity;
