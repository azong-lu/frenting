import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import router from './router/router';
import RouterView from './router/index';
import { BrowserRouter, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <RouterView routes={router} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
