import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore from './configureStore';
import * as serviceWorker from '../internals/scripts/serviceWorker';

const MOUNT_NODE = document.getElementById('root');
const INITIAL_STATE = {};

const store = configureStore(INITIAL_STATE);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  MOUNT_NODE,
);

// If you want your app to work offline and load faster, you can change
// unregisterSW() to registerSW() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.registerSW();

// Also if you want to disable permanently, then you should probably need to
// * remove both Workbox plugin and ManifestPwa from internals/webpack/webpack.prod.js
