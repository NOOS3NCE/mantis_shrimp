import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './custom.css';

require('dotenv').config()
console.log(process.env.NODE_ENV)

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
