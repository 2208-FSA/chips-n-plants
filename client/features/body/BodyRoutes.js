import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Body from './Body';
import SingleProductView from '../singleproductview/SingleProductView';
import AllProducts from '../allproducts/AllProducts';
import AuthForm from '../auth/AuthForm';

const BodyRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="*" element={<AllProducts />} />
                <Route path="/products/:productId" element={<SingleProductView />} />
            </Routes>
        </div>
    );
};

export default BodyRoutes;