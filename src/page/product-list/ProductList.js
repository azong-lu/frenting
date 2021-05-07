import React from 'react';
import StatusBar from 'components/status-bar/index';
import ProductComponent from 'components/productcomponent';
import GetLocation from 'components/get-location/index';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const ProductList = (props) => {
  const renderStatusBar = () => {
    return (
      <StatusBar>
        <HomeOutlined />
        <GetLocation />
        <Input placeholder='输入区域搜索房源' />
        <UserOutlined />
      </StatusBar>
    );
  };
  return <div>{renderStatusBar()}</div>;
};

export default ProductList;
