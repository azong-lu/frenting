import React from 'react';

const ProductComponent = (props) => {
  const { products = [] } = props;
  return (
    <div>
      {products.map((productItem) => {
        const { id, name } = productItem;
        return <div key={id}></div>;
      })}
    </div>
  );
};

export default ProductComponent;
