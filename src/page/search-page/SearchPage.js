import React from 'react';
import StatusBar from 'components/status-bar/index';
import { Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store/store';

import styles from './SearchPage.less';
import { DeleteOutlined } from '@ant-design/icons';

const SearchPage = (props) => {
  const { historyView = [], historyChange, removeHistory } = useStore();
  const goBack = () => {
    const { history } = props;
    history.go(-1);
  };

  const remove = () => {
    removeHistory();
  };

  const goProductView = () => {
    // const { history } = props;
    // history.push()
  };

  const handleBlur = (e) => {
    const { value } = e.target;
    const { history } = props
    historyChange(value);
    history.push(`/list/${value}`)
  };
  const renderStatusBar = () => {
    return (
      <StatusBar>
        <Input
          placeholder='请输入商圈、小区'
          className={styles.searchInput}
          onPressEnter={(e) => handleBlur(e)}
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
              <div key={item} className={styles.historyItem}>
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
