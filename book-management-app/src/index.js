import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/appRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import { noop } from 'lodash';

ReactDOM.render(<AppRouter />, document.getElementById('root'));