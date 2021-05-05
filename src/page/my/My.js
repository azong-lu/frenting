import React from 'react';
import StatusBar from 'components/status-bar/index';
import { HeartOutlined, LeftOutlined, RedditOutlined, RightOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';

import styles from './My.less';

const My = (props) => {
  const goBack=()=>{
    const {history}=props;
    history.go(-1)
  }

  const toLogin=()=>{
    const {history}=props
    history.push('/login')
  }

  const renderStatusBar = () => {
    return (
      <StatusBar>
        <LeftOutlined className={styles.barIcon} onClick={goBack} />
        <span className={styles.barTitle}>个人中心</span>
      </StatusBar>
    );
  };

  const FlexItem = (props) => {
    const { children } = props
    return (
      <div className={styles.flexbar}>
        <div>
          {children}
        </div>
        <RightOutlined />
      </div>
    )
  }

  const renderContent = () => {
    return (
      <div className={styles.content}>
        <FlexItem>
          <UserOutlined />
          <span className={styles.flexDes}>个人信息</span>
        </FlexItem>
        <div>
          <FlexItem>
            <SmileOutlined />
            <span className={styles.flexDes}>推荐房源</span>
          </FlexItem>
          <FlexItem>
            <HeartOutlined />
            <span className={styles.flexDes}>收藏房源</span>
          </FlexItem>
        </div>
      </div>
    )
  }

  const renderTitle = () => {
    return (
      <div className={styles.headInfo}>
        <span className={styles.headImg}>
          <RedditOutlined />
        </span>

        <div onClick={toLogin}><span>登录</span>/<span>注册</span></div>
      </div>
    );
  };

  return (
    <div>
      <div>{renderStatusBar()}</div>
      <div>{renderTitle()}</div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default My;
