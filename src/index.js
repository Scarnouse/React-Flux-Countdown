import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import CountdownDispatcher from './dispatcher/CountdownDispatcher';
import countdownActions from './actions/countdownActions'
import CoundownStore from './stores/CountdownStore';
import Countdown from './views/Countdown';

const appDispatcher = new CountdownDispatcher()
const actions = countdownActions(appDispatcher)
const store = new CoundownStore(10, appDispatcher)

const render = count => ReactDOM.render(
  <Countdown count={count} {...actions} />,
  document.getElementById('root')
)

store.on("TICK", () => render(store.count))
store.on("RESET", () => render(store.count))
render(store.count)

registerServiceWorker();
