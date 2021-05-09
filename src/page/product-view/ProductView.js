import React, { useEffect, useState } from 'react';
import StatusBar from 'components/status-bar/index';
import { LeftOutlined } from '@ant-design/icons';
import { findProduct } from 'services/productview'
import Swiper from 'swiper';

import styles from './ProductView.less'
import 'swiper/swiper-bundle.css';

const ProductView = () => {
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
    })
    const renderStatusBar = () => (
        <StatusBar>
            <LeftOutlined className={styles.barIcon} onClick={goBack} />
        </StatusBar>
    )

    const renderSwiper = () => (
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
        </div>
    )

    return <div>
        {renderStatusBar()}
        {renderSwiper()}
    </div>;
}

export default ProductView
