import React, { Fragment, useEffect, useRef, useState } from 'react';
import StatusBar from 'components/status-bar/index';
import ProductComponent from 'components/productcomponent';
import GetLocation from 'components/get-location/index';
import { fetchList } from 'services/homepage';
import { acquireDistrict } from 'services/AmapAPI'
import { fetchRentAmt } from 'services/productlist'
import { observer } from 'mobx-react-lite';
import { useStore } from 'store/store';
import { DownOutlined, FrownOutlined, HomeOutlined, LockFilled, UpOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import classNames from 'classnames'
import uid from 'utils/Uid';

import styles from './ProductList.less'


const ProductList = (props) => {
  const [productList, setProductList] = useState([]);
  const [products, setProducts] = useState([]);
  const [isExtend, setIsExtend] = useState(false);
  const { currentLocal } = useStore();
  const [activityKey, setActivityKey] = useState(undefined);
  const [district, setDistrict] = useState([]);
  const [activeDistrict, setActiveDistrict] = useState(undefined);
  const [activeTown, setActiveTown] = useState(undefined);
  const [towm, setTown] = useState([]);
  const [rentAmtList, setRentAmtList] = useState([]);
  const [activityAmt, setActivityAmt] = useState('');
  const productRef = useRef(null)
  const { match: { params: { keyWord } = {} } = {} } = props

  useEffect(() => {
    const key = 'f09c9da07eeed2b4c43f598e8f00d162';
    fetchList().then((res) => {
      const { data: { modelList = [] } = {} } = res;
      modelList.forEach((item) => {
        item.uid = uid();
      });
      let data = []
      if (keyWord) {
        data = modelList.filter(item => item.house_title.indexOf(keyWord) > -1)
      }
      setProductList(modelList);

      setProducts(data)


    });
    // 通过城市名称请求当前城市的下级行政区
    acquireDistrict({ keywords: currentLocal, key, subdistrict: 3 }).then(res => {
      const { districts = [] } = res
      const { districts: cityDistricts = [], level } = districts[0] || {}
      if (level === 'city') {
        setDistrict(cityDistricts)
      } else {
        const { districts: districtList } = cityDistricts[0] || {}
        setDistrict(districtList)
      }
    })
    fetchRentAmt().then(res => {
      const { data: { modelList } = {} } = res
      setRentAmtList(modelList)
    })

  }, []);

  const handleClick = (key) => {
    setActivityKey(key)
    setIsExtend(!isExtend)
  }

  const handleDistrictClick = (town, name) => {
    setActiveDistrict(name);
    setTown(town)
  }

  const handleTownClick = (name) => {
    setActiveTown(name)
    setIsExtend(!isExtend)
  }

  const filterType = {
    location: { key: 'location', label: '位置', activeLabel: activeTown },
    rentAmt: { key: 'rentAmt', label: '租金', activeLabel: activityAmt },
    houseType: { key: 'houseType', label: '户型' },
    more: { key: 'more', label: '更多' }
  }

  const renderDesBar = () => (
    <Fragment>
      <div className={styles.filterBar}>
        {Object.values(filterType).map(item => {
          const { label, key, activeLabel } = item
          return <span key={key}
            onClick={() => handleClick(key)}
            className={
              activityKey === key ? styles.active : null
            }>
            <div className={styles.activeLabel}>{activeLabel || label}</div>
            <DownOutlined />
          </span>
        })}
      </div>
    </Fragment>
  )

  const renderDistrict = () => (
    <div className={styles.locationContent}>
      <div className={styles.districtContent}>
        {district.map(item => {
          const { name, districts: town } = item
          return <div
            key={name}
            onClick={() => handleDistrictClick(town, name)}
            className={activeDistrict === name ? styles.districtActive : null}
          >{name}</div>
        })}
      </div>
      <div className={styles.streetContent}>
        {towm.map(item => {
          const { name } = item
          return (
            <div key={name}
              onClick={() => handleTownClick(name)}
              className={activeTown === name ? styles.districtActive : null}
            >
              {name}
            </div>
          )
        })}
      </div>
    </div>
  )

  const renderRentAmt = () => {
    const handleAmtClick = (item) => {
      setActivityAmt(item)
      setIsExtend(!isExtend)
    }
    return <div className={styles.rentAmtContent}>
      {rentAmtList.map((item) =>
        <span
          key={item}
          className={classNames(styles.rentAmtItem, activityAmt === item ? styles.active : null)}
          onClick={() => handleAmtClick(item)}
        >{item}</span>)}
    </div>
  }

  const renderHouseType = () => { }

  const renderActiveBar = () => {
    return <Fragment>
      <div className={styles.filterBar}>
        {Object.values(filterType).map((item) => {
          const { label, key, activeLabel } = item
          return <span
            key={key}
            onClick={() => handleClick(key)}
            className={
              activityKey === key ? styles.active : null
            }>
            <div className={styles.activeLabel}>{activeLabel || label}</div><UpOutlined /></span>
        })}
      </div>
      <div className={styles.locationContent}>
        {activityKey === 'location' ? renderDistrict() : null}
        {activityKey === 'rentAmt' ? renderRentAmt() : null}
        {activityKey === 'houseType' ? renderHouseType() : null}
        {activityKey === 'more' ? renderMore() : null}
      </div>
    </Fragment>
  }

  const renderFilterBar = () => {
    return isExtend ? renderActiveBar() : renderDesBar()
  }

  const renderStatusBar = () => {
    const { history } = props;
    const toHome = () => {
      history.push('/')
    }

    const toSelect = () => {
      history.push('/choosecity')
    }

    const toSearch = () => {
      history.push('/search')
    }

    const toMy = () => {
      history.push('/my')
    }

    return (
      <StatusBar>
        <HomeOutlined onClick={toHome} />
        <div onClick={toSelect}>
          <GetLocation />
        </div>
        <div className={styles.searchInput} onClick={toSearch}>{keyWord ? keyWord : '请输入商圈、小区'}</div>
        <UserOutlined onClick={toMy} />
      </StatusBar>
    );
  };

  return <div>
    {renderStatusBar()}
    <div >
      {renderFilterBar()}
    </div>
    <div className={styles.productContent}>
      {products.length ?
        <ProductComponent products={products} ref={productRef} {...props} /> :
        <div className={styles.productNon}><FrownOutlined style={{ marginRight: '0.5rem' }} />暂无数据</div>
      }
    </div>
  </div>
};

export default observer(ProductList);
