import React, { useState } from 'react';
import StatusBar from 'components/status-bar/index';
import { Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store/store';

import styles from './SearchPage.less';
import { DeleteOutlined } from '@ant-design/icons';

const SearchPage = (props) => {
  const { historyView = [], historyChange, removeHistory } = useStore();
  const [inputValue, setValue] = useState('');
  const goBack = () => {
    const { history } = props;
    history.go(-1);
  };

  const remove = () => {
    removeHistory();
  };


  const handleBlur = (value) => {
    const { history } = props
    if(value.trim()){
    const flag = historyView.some(item => item === value)
    if(!flag){
      historyChange(value);
    }
  }
    if(value.trim()){
      history.push(`/list/${value}`)
    }else{
      history.push(`/list`)
    }



  };

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value)
  }
  const renderStatusBar = () => {
    return (
      <StatusBar>
        <Input
          placeholder='请输入商圈、小区'
          className={styles.searchInput}
          value={inputValue}
          onChange={e => handleChange(e)}
          onPressEnter={(e) => handleBlur(e.target.value)}
        />
        <span onClick={goBack}>取消</span>
      </StatusBar>
    );
  };

  return (
    <div className={styles.searchPage}>
      {renderStatusBar()}
      <div className={styles.searchContent}>
        {historyView.length ? (
          <div className={styles.searchRecord}>
            <span>历史记录</span>
            <DeleteOutlined onClick={remove} />
          </div>
        ) : null}
        <div>
          {historyView.map((item) => {
            return (
              <div key={item}
                className={styles.historyItem}
                onClick={() => handleBlur(item)}>

                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default observer(SearchPage);
