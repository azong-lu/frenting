import React, { useEffect, useState } from 'react';
import StatusBar from 'components/status-bar/index';
import { LeftOutlined } from '@ant-design/icons';
import { findProduct } from 'services/productview'
import Swiper from 'swiper';

import styles from './ProductView.less'
import 'swiper/swiper-bundle.css';

const ProductView = (props) => {
    const [productView, setProductView] = useState([]);
    useEffect(() => {
        findProduct().then(res => {
            const { data } = res
            setProductView(data)
        })
        // 初始化swiper
        const mySwiper = new Swiper('.swiper-container', {
            loop: true,
        })
    }, [])
    const goBack = () => {
        const { history } = props;
        history.go(-1);
    }

    const renderStatusBar = () => (
        <StatusBar>
            <LeftOutlined className={styles.barIcon} onClick={goBack} />
        </StatusBar>
    )

    const renderSwiper = () => {
        const { agency_house_photo_info = [] } = productView
        return (<div className="swiper-container">
            <div className="swiper-wrapper">
                {agency_house_photo_info.map(item => {
                    const { src } = item;
                    return (<div className="swiper-slide">
                        <img src={src} />
                    </div>)
                })}
            </div>
        </div>)
    }

    return <div>
        {renderStatusBar()}
        {renderSwiper()}
    </div>;
}

export default ProductView
