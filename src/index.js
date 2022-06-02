import React from 'react';
import ReactDOM from 'react-dom';
import "./component/css/Style.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Topbar from './component/Topbar/Topbar';
import App from "../src/App"
import "../src/App.css"

ReactDOM.render(
  <React.StrictMode>
<App/>
  </React.StrictMode>,
  document.getElementById('root')
);

