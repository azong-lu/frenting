import React from 'react';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import GetLocation from 'components/get-location/index';
import banner1 from 'asserts/banner.png';
import jointrent from 'asserts/jointrent.png';
import brandapartment from 'asserts/brandapartment.png';
import pic1 from 'asserts/pic1.png';
import pic2 from 'asserts/pic2.png';
import pic3 from 'asserts/pic3.png';
import pic4 from 'asserts/pic4.png';
import shortrent from 'asserts/shortrental.png';
import entiretenancy from 'asserts/entiretenancy.png';
import StatusBar from 'components/status-bar/index';
import { Col, Row } from 'antd';

import styles from './HomePage.less';


const houseTypeList = [
  {
    key: '',
    pic: pic1
  },
  {
    key: '',
    pic: pic2
  }, {
    key: '',
    pic: pic3
  }, {
    key: '',
    pic: pic4
  },
]

const rentTypeList = [
  {
    key: 'entireTenancy',
    value: '整租',
    icon: entiretenancy,
  },
  {
    key: 'jointRent',
    value: '合租',
    icon: jointrent,
  },
  {
    key: 'brandApartment',
    value: '品牌公寓',
    icon: brandapartment,
  },
  {
    key: 'shortRent',
    value: '短租',
    icon: shortrent,
  },
];

const HomePage = (props) => {
  const toCitySelect = () => {
    const { history } = props;
    history.push('/choosecity');
  };

  const renderHouseType = () => (
    <Row>
      {
        houseTypeList.map(item => {
          const { pic } = item
          return <img src={pic} className={styles.houseItem} />
        })}
    </Row>
  )

  const renderRentType = () => (
    <div className={styles.rentTypeContent}>
      <div className={styles.innerContent}>
        {rentTypeList.map((item) => {
          const { key, value, icon } = item;
          return (
            <div key={key} className={styles.rentContentItem}>
              <img src={icon} alt='icon' className={styles.rentContentIcon} />
              <span>{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderStatusBar = () => {
    return (
      <StatusBar>
        <span onClick={toCitySelect}>
          <GetLocation />
        </span>
        <UserOutlined />
      </StatusBar>
    );
  };
  return (
    <div className={styles.homepage}>
      <div>{renderStatusBar()}</div>
      <div className={styles.bannerTotal}>
        <img src={banner1} className={styles.bannerItem} alt='banner' />
        <div className={styles.bannerInput}>
          <SearchOutlined />
          输入区域，搜索房源
        </div>
      </div>
      {renderRentType()}
      {renderHouseType()}
    </div>
  );
};

export default HomePage;
