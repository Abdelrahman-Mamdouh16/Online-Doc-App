import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/js/all.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import UserTokenProvider from './Context/UserToken';
import { store } from './Redux/Store.redux';
import { Provider } from 'react-redux';
// import AppointmentApiProvider from './Context/appointmentApi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <UserTokenProvider>
                <App />
        </UserTokenProvider>
    </Provider>
);


reportWebVitals();
