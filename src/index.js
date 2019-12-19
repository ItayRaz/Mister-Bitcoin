import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import './styles/global.scss'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store'
import { HashRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    ,
    document.getElementById('root'));


serviceWorker.unregister();
