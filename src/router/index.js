import React from 'react';
import { Route } from 'react-router-dom';

const RouterView = (props) => {
  return props.routes.map((item) => {
    const { path,key ,exact =true,children} = item;
    return (
      <Route
        key={key}
        path={path}
        exact={exact}
        render={(routeProps) => {
          if (children.length) {
            // 存在路由嵌套
           return <item.component {...routeProps} routes={children} />;
          } else {
            // 不存在路由嵌套
           return <item.component {...routeProps} />;
          }
        }}
      />
    );
  });
};

export default RouterView;
