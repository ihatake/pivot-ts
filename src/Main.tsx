import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Router from './routers';
import registerServiceWorker from './registerServiceWorker';
import todoListStore from './stores/todolistStore';

const stores = {
  todoListStore
};
ReactDOM.render(
  <Provider {...stores}>
    <Router />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
