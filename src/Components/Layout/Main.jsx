import React from 'react';
import Heaer from '../Heaer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Heaer></Heaer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;