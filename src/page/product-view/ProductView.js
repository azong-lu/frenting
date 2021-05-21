import React, { useEffect, useState } from 'react';
import StatusBar from 'components/status-bar/index';
import { HeartOutlined, HeartTwoTone, LeftOutlined, RedditOutlined } from '@ant-design/icons';
import { findProduct } from 'services/productview';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAmap, transformAddres } from 'services/AmapAPI'
import { Map } from 'react-amap';
// import { Swiper } from 'swiper';

import styles from './ProductView.less';

const ProductView = (props) => {
    const [productView, setProductView] = useState([]);
    const [location, setLocation] = useState({});
    useEffect(() => {
        const key = 'f09c9da07eeed2b4c43f598e8f00d162';
        findProduct().then((res) => {
            const { data } = res;
            const { subdistrict_address: address } = data
            setProductView(data);
            transformAddres({ key, address, city: '上海' }).then(res => {
                const { geocodes = [] } = res
                const { location } = geocodes[0] || {}
                const newArr = location.split(',');
                setLocation({ longitude: newArr[0], latitude: newArr[1] })
            });

        })

    }, []);

    const goBack = () => {
        const { history } = props;
        history.go(-1);
    };

    const renderSwiper = () => {
        const { agency_house_photo_info = [] } = productView;
        return (
            <div style={{ position: 'relative' }}>
                <div className={styles.barIcon}>
                    <LeftOutlined onClick={goBack} />
                </div>
                <Swiper direction='horizontal' autoplay>
                    {agency_house_photo_info.map((item) => {
                        const { src } = item;
                        return (
                            <SwiperSlide key={src}>
                                <img src={src} className={styles.swiperItem} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        );
    };

    const renderHouseInfo = () => {
        const {
            house_labels = [],
            base_info: { floor_area, floor, direction } = {},
            house_title,
            house_money = 0,
        } = productView;
        return (
            <div className={styles.houseContent}>
                <div className={styles.houseContentTitle}>{house_title}</div>
                <div className={styles.houseContentLabel}>
                    {house_labels.map((item, index) => {
                        return (
                            <span key={index} className={styles.houseContentLabelItem}>
                                {item}
                            </span>
                        );
                    })}
                </div>
                <div className={styles.houseContentMoney}>{house_money}元</div>
                <div className={styles.houseContentDes}>
                    <div>
                        <div>朝向</div>
                        <div>{direction}</div>
                    </div>
                    <div>
                        <div>楼层</div>
                        <div>{floor}</div>
                    </div>
                    <div>
                        <div>面积</div>
                        <div>{floor_area}</div>
                    </div>
                </div>
            </div>
        );
    };

    const renderPublicInfo = () => {
        const { public: { name, score, tel, history } = {} } = productView;
        return (
            <div className={styles.publicInfoContent}>
                <div className={styles.infoCotentIcon}>
                    <RedditOutlined />
                </div>
                <div className={styles.infoContentDes}>
                    <div>
                        <span style={{ fontWeight: 'bold' }}>{name}</span>
                        <span style={{ float: 'right' }}>
                            综合评分：
              <span style={{ color: 'red', fontSize: '0.8rem' }}>{score}</span>
              分
            </span>
                    </div>
                    <div className={styles.infoHistory}>{history}</div>
                    <div className={styles.infoTel}>联系方式：{tel}</div>
                </div>
            </div>
        );
    };

    const renderLocation = () => {
        const {
            subdistrict_address
        } = productView;
        const key = 'f09c9da07eeed2b4c43f598e8f00d162';
        return (
            <div>
                <div className={styles.address}>{subdistrict_address}</div>
                <div style={{ width: '100%', height: 400 }}><Map
                    amapkey={key}
                    zoom={16}
                    center={location} />
                </div>
            </div>
        );
    };

    return (
        <div className={styles.productViewPage}>
            {renderSwiper()}
            {renderHouseInfo()}
            {renderPublicInfo()}
            {renderLocation()}
            <div className={styles.collectBar}>
                <div>
                    {/* {hasCollect ? <HeartTwoTone twoToneColor='red' /> : <HeartOutlined />} */}
                    <HeartOutlined />
                </div>
                <div className={styles.lookHouse}>我要看房</div>
            </div>
        </div>
    );
};

export default ProductView;
