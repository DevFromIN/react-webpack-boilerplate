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

// If you do not want offline experience, then you should probably 
// * comment these lines below
// * and remove both Workbox plugin and ManifestPwa from internals/webpack/webpack.prod.js

if (process.env.NODE_ENV === "production" && 'serviceWorker' in navigator) {
   window.addEventListener('load', () => {
     navigator.serviceWorker.register('/service-worker.js').then(registration => {
       console.log('SW registered: ', registration);
      //  do your works here
     }).catch(registrationError => {
       console.log('SW registration failed: ', registrationError);
      //  handle the error!
     });
   });
}

