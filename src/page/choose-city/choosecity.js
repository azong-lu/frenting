import React, { useState, useEffect, useRef } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import StatusBar from 'components/status-bar/index';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store/store';
import cityData from 'utils/city';
import styles from './choosecity.less';
import { Input } from 'antd';
import { Fragment } from 'react';

const ChooseCity = (props) => {
  const cityRef = useRef(null);
  const [cityList, setCityList] = useState([]);
  const [newList, setNewList] = useState([]);
  const [nameList, setNameList] = useState([]);
  const { currentLocal, newLocation } = useStore();

  useEffect(() => {
    const nameList = [];
    cityData.forEach((item) => {
      const { name } = item;
      const newName = name.slice(0, 1);
      nameList.push(newName);
    });
    setCityList(cityData);
    setNewList(cityData);
    setNameList(nameList);
  }, []);
  useEffect(() => {
    const key = 'f09c9da07eeed2b4c43f598e8f00d162';
    // acquireDistrict({ key }).then((res) => {
    // });
  }, []);

  const handleBack = () => {
    const { history } = props;
    history.goBack(-1);
  };

  const handleSearch = (e) => {
    const value = e.target.defaultValue.trim();
    const newCityObj = {};
    cityList.forEach((item) => {
      const { cities, name } = item;

      const cityArr = cities.find((items) => items.name.indexOf(value) > -1);
      if (cityArr) {
        if (!newCityObj[name]) {
          newCityObj[name] = { name, cities: [] };
        }
        newCityObj[name].cities.push(cityArr);
      }
    });
    const newArr=[]
    Object.values(newCityObj).forEach(item=>{
      newArr.push(item)
    })
  
    console.log(newArr);
    setNewList(newArr);
  };

  const handleCityChoose = (city) => {
    newLocation(city);
    handleBack();
  };

  const handleWordClick = () => {
    const itemTop = cityRef.offsetTop;
    console.log(itemTop);
  };

  const renderStatusBar = () => {
    return (
      <StatusBar>
        <LeftOutlined className={styles.barIcon} onClick={handleBack} />
        <span className={styles.barTitle}>选择城市</span>
      </StatusBar>
    );
  };

  const renderCity = () => {
    return (
      <div className={styles.cityScroll}>
        {newList.map((item, index) => {
          const { name, cities = [] } = item;
          return (
            <div key={item.citysName} key={index}>
              <div>
                <div className={styles.cityDes}>{name}</div>
                <Fragment>
                  {cities.map((items) => {
                    const { tags, name: cityName } = items;
                    return (
                      <div
                        onClick={() => handleCityChoose(cityName)}
                        key={tags}
                        className={styles.cityItem}
                      >
                        {cityName}
                      </div>
                    );
                  })}
                </Fragment>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderCityFirstWord = () => {
    return (
      <div className={styles.cityFirstWord}>
        {nameList.map((item) => {
          return (
            <span key={item} onClick={handleWordClick}>
              {item}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div>{renderStatusBar()}</div>
      <div className={styles.cityContent}>
        <Input
          placeholder='搜索热门城市'
          onPressEnter={handleSearch}
          className={styles.searchInput}
        />
        <div className={styles.currentLocal}>
          <div>{currentLocal}</div>
          <div className={styles.localTitle}>当前城市</div>
        </div>
        {renderCity()}
        {/* {renderCityFirstWord()} */}
      </div>
    </div>
  );
};

export default observer(ChooseCity);
