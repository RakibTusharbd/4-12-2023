import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Fotter from '../Fotter/Fotter';

const Home = () => {
    return (
        <div>
           <Header></Header> 
           <Outlet></Outlet>
           <Fotter></Fotter>
        </div>
    );
};

export default Home;