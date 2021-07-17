import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './containers/App'
import configureStore from './configureStore';

const MOUNT_NODE = document.getElementById('root');
const INITIAL_STATE = {};

const store = configureStore(INITIAL_STATE);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  MOUNT_NODE
);
