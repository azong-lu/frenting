import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import GetLocation from 'components/get-location/index';
import StatusBar from 'components/status-bar/index'

import styles from './HomePage.less'

const HomePage = (props) => {
  const toCitySelect = () => {
     const {history}=props;
     history.push('/choosecity')
  }

  const renderStatusBar = () => {
    return (
      <StatusBar>
        <span onClick={toCitySelect}><GetLocation /></span>
        <UserOutlined />
      </StatusBar>
    )
  };
  return (
    <div>
      <div>{renderStatusBar()}</div>
    </div>
  );
};

export default HomePage;
