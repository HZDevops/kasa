import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import AccomodationForm from './pages/AccomodationForm';
import About from './pages/About';
import Error from './pages/Error';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      <Layout>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/accomodation/:id' element={<AccomodationForm />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error/>} />
      </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();