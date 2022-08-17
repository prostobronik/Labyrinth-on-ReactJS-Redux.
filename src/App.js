import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './assets/css/App.scss';
import Component from './components/component';

const App = (props) => {
   return (
         <Provider store={store}>
            <Component />
         </Provider>
   )
}

export default App;
