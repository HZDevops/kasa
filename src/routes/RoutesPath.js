import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';


function RoutesPath() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default RoutesPath;