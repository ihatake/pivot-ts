import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import todoListStore from './stores/todolistStore';

const stores = {
  todoListStore
};
ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
