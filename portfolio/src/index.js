import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddlware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddlware(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root'));

