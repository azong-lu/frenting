import React from 'react';

import styles from './index.less';

const ProductComponent = (props) => {
  const { products = [] } = props;
  return (
    <div className={styles.productContent}>
      {products.map((productItem) => {
        const {
          uid,
          house_address_desc,
          house_tags = [],
          house_title,
          house_main_image,
          house_desc,
          month_rent,
        } = productItem;
        return (
          <div key={uid} className={styles.productItem}>
            <img
              src={house_main_image}
              alt='mainImage'
              className={styles.productImg}
            />
            <div className={styles.productDes}>
              <div className={styles.productTitle}>{house_title}</div>
              <div className={styles.productSmallTit}>{house_desc}</div>
              <div className={styles.productAddress}>{house_address_desc}</div>
              <div className={styles.productTags}>
                {house_tags.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
              <div className={styles.productMoney}>{month_rent}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductComponent;
