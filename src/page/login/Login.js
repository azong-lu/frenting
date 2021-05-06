import React, { useState } from 'react';
import StatusBar from 'components/status-bar/index';
import { LeftOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form';
import styles from './Login.less';
import { Input, Form, Button } from 'antd';
import LoginPic from 'asserts/login.png';

const tabs = ['登录', '注册'];

const Login = (props) => {
  const [activityIndex, setActivityIndex] = useState(0);
  const [form1] = useForm();

  const goBack = () => {
    const { history } = props;
    history.go(-1);
  };

  const handleChange = (index) => {
    setActivityIndex(index);
  };

  const handelLogin = () => {};

  const renderStatusBar = () => {
    return (
      <StatusBar>
        <LeftOutlined className={styles.barIcon} onClick={goBack} />
      </StatusBar>
    );
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBar}>{renderStatusBar()}</div>

      <img src={LoginPic} alt='bg' className={styles.loginBg} />

      <div className={styles.loginContent}>
        <div className={styles.loginContentTab}>
          {tabs.map((item, index) => (
            <span
              key={index}
              onClick={() => handleChange(index)}
              className={index === activityIndex ? styles.active : null}
            >
              {item}
            </span>
          ))}
        </div>
        {!activityIndex ? (
          <div className={styles.formStyle}>
            <Input placeholder='用户名（6-20）个字符' />
            <Input type='password' placeholder='密码(6-20位)' />
            <Button>登录</Button>
          </div>
        ) : (
          <div>111</div>
        )}
      </div>
    </div>
  );
};

export default Login;
