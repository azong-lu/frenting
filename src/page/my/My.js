import React from 'react';
import StatusBar from 'components/status-bar/index';
import { LeftOutlined, RedditOutlined } from '@ant-design/icons';

import styles from './My.less';

const My = (props) => {
  const renderStatusBar = () => {
    return (
      <StatusBar>
        <LeftOutlined className={styles.barIcon} />
        <span className={styles.barTitle}>我的</span>
      </StatusBar>
    );
  };

  const renderTitle = () => {
    return (
      <div className={styles.headInfo}>
        <RedditOutlined />
        <span>登录/注册</span>
      </div>
    );
  };

  return (
    <div>
      <div>{renderStatusBar()}</div>
      <div>{renderTitle()}</div>
    </div>
  );
};

export default My;
