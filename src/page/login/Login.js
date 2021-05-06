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
  const [{ userName, userPassWord }, setUserLoginMessage] = useState({});
  const goBack = () => {
    const { history } = props;
    history.go(-1);
  };

  const handleChange = (index) => {
    setActivityIndex(index);
  };

  const inputChange = (e, type) => {
    const newValue = e.target.value
    setUserLoginMessage({ [type]: newValue })
  }

  const handelLogin = () => { };

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
            <Input
              placeholder='用户名'
              value={userName}
              onChange={(e) => inputChange(e, 'userName')} />
            {userName === '' ? <div className={styles.errMes}>用户名不能为空</div> : null}
            <Input
              type='password'
              placeholder='密码'
              value={userPassWord}
              onChange={(e) => inputChange(e, 'userPassWord')}
            />
            <div className={styles.errMes}>密码不能为空</div>
            <Button className={styles.loginBtn} onClick={handelLogin}>登录</Button>
          </div>
        ) : (
          <div className={styles.formStyle}>
            <Input placeholder='用户名（6-20）个字符' />
            <div className={styles.errMes}>用户名不能为空</div>
            <Input type='password' placeholder='密码(6-20位)' />
            <div className={styles.errMes}>密码不能为空</div>
            <Input type='password' placeholder='再次输入密码' />
            <Button className={styles.loginBtn} onClick={handleRegister}>注册</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
