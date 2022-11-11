import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import CustomProvider from "./components/CustomProvider/CustomProvider";
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <CustomProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </CustomProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
