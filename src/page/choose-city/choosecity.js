import React, { useState, useEffect } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import StatusBar from 'components/status-bar/index';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store/store';
import cityData from 'utils/city';
import styles from './choosecity.less';
import { Input } from 'antd';

const ChooseCity = (props) => {
  const [cityList, setCityList] = useState([]);
  const [newList, setNewList] = useState([]);
  const { currentLocal, newLocation } = useStore();
  const [nameList, setNameList] = useStore({});
  useEffect(() => {
    const newArr = [];
    const nameList = {};
    cityData.forEach((item) => {
      const { cities, name } = item;
      newArr.push(...cities);
      const newName = name.slice(0, 1);
      nameList[newName] = newName;
    });
    setCityList(newArr);
    setNewList(newArr);
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
    const value = e.target.defaultValue;
    const newArr = cityList.filter(
      (item) => item.citysName.indexOf(value) > -1
    );
    setNewList(newArr);
  };

  const handleCityChoose = (city) => {
    newLocation(city);
    handleBack();
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
      <div>
        {newList.map((item) => {
          return (
            <div
              key={item.citysName}
              className={styles.cityItem}
              onClick={() => handleCityChoose(item.citysName)}
            >
              {item.citysName}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div>{renderStatusBar()}</div>
      <Input
        placeholder='搜索热门城市'
        onPressEnter={handleSearch}
        className={styles.searchInput}
      />
      <div>
        <div className={styles.localTitle}>当前城市</div>
        <div className={styles.currentLocal}>{currentLocal}</div>
      </div>
      {renderCity()}
    </div>
  );
};

export default observer(ChooseCity);
