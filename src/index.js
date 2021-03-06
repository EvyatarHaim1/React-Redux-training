import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initState = {
  siteName: 'React-Redux'
}

const reducer = (state = initState, action ) => {
  switch(action.type){
    case "CHANGE_SITE_NAME":
      state = {...state, siteName: action.payload}
      break;
  }

  return state;
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


