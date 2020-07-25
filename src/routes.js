import React  from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/404/NotFound';
import AdminPage from './pages/AdminPage/AdminPage';
import CustomerPage from './pages/CustomerPage/CustomerPage';
import ProductPage from './pages/ProductPage/ProductPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import ProductDetailPage from './pages/ProductPage/ProductDetailPage';
const routes = [
    {
        path: '/', 
        exact: true,
        main: () => <HomePage/>
    },
    {
        path:"/admin",
        exact: false,
        main: () => <AdminPage/>
    },
    {
        path: '/customer', 
        exact: false,
        main: () => <CustomerPage/>
    },
    {
        path: '/product', 
        exact: false,
        main: () => <ProductPage/>
    },
    
    {
        path: '/productdetail', 
        exact: false,
        main: () => <ProductDetailPage/>
    },
    {
        path: '/cart', 
        exact: false,
        main: () => <CheckoutPage/>
    },
    {
        path: '', 
        exact: false,
        main: () => <NotFound/>
    }
   
  
];
export default routes;
