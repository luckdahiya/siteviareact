import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Nav from './Navigation Bar/Nav';
import Navbar from './Navbar+hp/Navbar';
import reportWebVitals from './reportWebVitals';
// import Navbar from './Navbar+hp/Navbar';
// import About from './About/About';
// import Map from './Map/Map';
// import Footer from './Footer/Footer';
// // import Menu from './Menu/Menu';
// import Exploremenu from './Explore Menu/Exploremenu.jsx';
// import Dishes from './Dishes/Dishes.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={< App/>}/>
            {/* <Route path="/cart" element={< Nav/>}/> */}

        </Routes>
        </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
