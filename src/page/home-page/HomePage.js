import React, { useState, useEffect } from 'react';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import GetLocation from 'components/get-location/index';
import StatusBar from 'components/status-bar/index';
import ProductComponent from 'components/productcomponent';
import uid from 'utils/Uid';

import banner1 from 'asserts/banner.png';
import jointrent from 'asserts/jointrent.png';
import brandapartment from 'asserts/brandapartment.png';
import shortrent from 'asserts/shortrental.png';
import entiretenancy from 'asserts/entiretenancy.png';

import { fetchList } from 'services/homepage';

import styles from './HomePage.less';

const houseTypeList = [
  {
    key: 'guessLike',
    value: '猜你喜欢',
  },
  {
    key: 'straightRent',
    value: '业主直租',
  },
  {
    key: 'professionBroker',
    value: '职业经纪',
  },
  {
    key: 'convenienceAgent',
    value: '省心中介',
  },
];

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
  const [activityIndex, setActivityIndex] = useState(0);
  const [productList, setProductList] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchList().then((res) => {
      const { data: { modelList = [] } = {} } = res;
      modelList.forEach((item) => {
        item.uid = uid();
      });
      console.log(modelList);
      setProductList(modelList);
      setProducts(modelList)
    });

  }, []);
  const toCitySelect = () => {
    const { history } = props;
    history.push('/choosecity');
  };

  const handleClick = (index, key) => {
    setActivityIndex(index);
    if (key !== 'guessLike') {
      const newArr = productList.filter(item => item.house_src_type === key)
      setProducts(newArr)
    }else{
      setProducts(productList)
    }

  };

  const renderHouseList = () => (
    <div className={styles.houseTotal}>
      {houseTypeList.map((item, index) => {
        const { value, key } = item;
        return (
          <span
            key={key}
            onClick={() => handleClick(index, key)}
            className={activityIndex === index ? styles.active : ''}
          >
            {value}
          </span>
        );
      })}
    </div>
  );

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
      {renderHouseList()}
      <ProductComponent products={products} />
    </div>
  );
};

export default HomePage;
