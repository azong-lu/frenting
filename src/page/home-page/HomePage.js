import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import GetLocation from 'components/get-location/index';
import StatusBar from 'components/status-bar/index'

import styles from './HomePage.less'

const HomePage = (props) => {
  console.log(props.history);
  const toCitySelect = () => {
     const {history}=props;
     console.log(history);
     history.push('/choosecity')
  }

  const renderStatusBar = () => {
    return (
      <StatusBar>
        <span onClick={toCitySelect}><GetLocation /></span>
        <UserOutlined style={{ color: '#fff' }} />
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
