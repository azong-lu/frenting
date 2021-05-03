import React, { useState } from 'react';
import StatusBar from 'components/status-bar/index';
import { LeftOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form';
import styles from './Login.less'
import { Input, Form, } from 'antd';



const tabs = ['登录', '注册']

const Login = (props) => {
    const [activityIndex, setActivityIndex] = useState(0);
    const [form1] = useForm();

    const goBack = () => {
        const { history } = props;
        history.go(-1)
    }

    const handleChange = (index) => {
        setActivityIndex(index)
    }

    const handelLogin = () => {

    }

    const renderStatusBar = () => {
        return (
            <StatusBar>
                <LeftOutlined className={styles.barIcon} onClick={goBack} />
            </StatusBar>
        );
    };

    return (
        <div className={styles.loginPage}>
            {renderStatusBar()}
            <div className={styles.loginContent}>
                <div className={styles.loginContentTab}>
                    <div>
                        {tabs.map((item, index) =>
                            <span key={index} onClick={() => handleChange(index)}>{item}</span>
                        )}
                    </div>
                    {!activityIndex ?
                        <Form form={form1} onFinish={handelLogin} name='basic'>
                            <Form.Item
                                rules={[{ required: true, message: '请输入11位电话号码' }]}
                                name='usePhone'
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item rules={
                                [
                                    {
                                        required: true,
                                        message: '请输入密码'
                                    }
                                ]
                            }
                                name='userPaw'
                            >
                                <Input type='password' />
                            </Form.Item>
                        </Form>
                        : <div>111</div>}
                </div>

            </div>
        </div >

    )
}

export default Login