import React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import styles from './choosecity.less'

const ChooseCity = (props) => {
    console.log(props);
    const renderStatusBar = () => {
        return (
            <StatusBar>
                <LeftOutlined className={styles.barIcon}/>
                <span className={styles.barTitle}>选择城市</span>
            </StatusBar>
        )
    };
    return (
        <div>
            <div>{renderStatusBar()}</div>
        </div>
    );
};

export default ChooseCity;
