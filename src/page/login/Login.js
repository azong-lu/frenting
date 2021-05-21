import React, { useState, useEffect } from 'react';
import StatusBar from 'components/status-bar/index';
import { useStore } from 'store/store';
import { observer } from 'mobx-react-lite';
import { LeftOutlined, LoginOutlined } from '@ant-design/icons';
import styles from './Login.less';
import { Input, Button, message } from 'antd';
import LoginPic from 'asserts/login.png';


const tabs = ['登录', '注册'];

const Login = (props) => {
  const { changeLoginMessage, changeUserInfo, userInfo } = useStore();
  const [activityIndex, setActivityIndex] = useState(0);
  const [flag, setFlag] = useState(false);
  const [userLoginMessage, setUserLoginMessage] = useState({
    userName: undefined,
    userPassWord: undefined,
  });
  const [userRegisterInfo, setRegisterInfo] = useState({
    userNameRegister: undefined,
    userNamePawAgain: undefined,
    userNamePaw: undefined,
  });

  useEffect(() => {

    return () => {
      setUserLoginMessage({})
      setRegisterInfo({})
    }
  }, []);



  const goBack = () => {
    const { history } = props;
    history.go(-1);
  };

  const handleChange = (index) => {
    setActivityIndex(index);
    setRegisterInfo({})
    setUserLoginMessage({})
    setFlag(false)
  };

  const inputChange = (e, type) => {
    const newValue = e.target.value;
    const newUserInfo = userLoginMessage;
    setUserLoginMessage({ ...newUserInfo, [type]: newValue });
  };

  const registerInputChange = (e, type) => {
    const newValue = e.target.value;
    const newRegisterInfo = userRegisterInfo;
    setRegisterInfo({ ...newRegisterInfo, [type]: newValue });
  };

  const handelLogin = () => {
    const { userName, userPassWord } = userLoginMessage
    const { userNameRegister, userNamePaw } = userInfo
    if (userName) {
      setFlag(true)
      if (userName === userNameRegister && userPassWord === userNamePaw) {
        setFlag(false)
      }
      if(!userName||!userPassWord||!flag){
        return
      }
      changeLoginMessage(userLoginMessage)
    }
    const { history } = props;
    history.go(-1)
  };

  const handleRegister = () => {
    if (!userLoginMessage) {
      return
    } else {
      changeUserInfo(userRegisterInfo)
      setActivityIndex(0)
      setRegisterInfo({})
    }

  };

  const renderStatusBar = () => {
    return (
      <StatusBar>
        <LeftOutlined className={styles.barIcon} onClick={goBack} />
      </StatusBar>
    );
  };
  const { userPassWord, userName } = userLoginMessage;
  const { userNameRegister, userNamePaw, userNamePawAgain } = userRegisterInfo;
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
              onChange={(e) => inputChange(e, 'userName')}
            />
            {userName === '' ? (
              <div className={styles.errMes}>用户名不能为空</div>
            ) : null}
            <Input
              type='password'
              placeholder='密码'
              value={userPassWord}
              onChange={(e) => inputChange(e, 'userPassWord')}
            />
            {userPassWord === '' ? (
              <div className={styles.errMes}>密码不能为空</div>
            ) : null}
            {flag ? <div className={styles.errMes}>用户名或密码不正确</div> : null}
            <Button className={styles.loginBtn} onClick={handelLogin}>
              登录
            </Button>
          </div>
        ) : (
          <div className={styles.formStyle}>
            <Input
              placeholder='用户名（6-20）个字符'
              value={userNameRegister}
              onChange={(e) => registerInputChange(e, 'userNameRegister')}
            />
            {userNameRegister === '' ? (
              <div className={styles.errMes}>用户名不能为空</div>
            ) : null}
            <Input
              type='password'
              placeholder='密码(6-20位)'
              value={userNamePaw}
              onChange={(e) => registerInputChange(e, 'userNamePaw')}
            />
            {userNamePaw === '' ? (
              <div className={styles.errMes}>密码不能为空</div>
            ) : null}
            <Input
              type='password'
              placeholder='再次输入密码'
              value={userNamePawAgain}
              onChange={(e) => registerInputChange(e, 'userNamePawAgain')}
            />
            {userNamePawAgain && userNamePawAgain !== userNamePaw ? (
              <div className={styles.errMes}>两次输入密码不一致</div>
            ) : null}
            <Button className={styles.loginBtn} onClick={handleRegister}>
              注册
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default observer(Login);
