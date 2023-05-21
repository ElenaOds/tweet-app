import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import { Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import Loader from '../Loader/Loader';


const Layout = () => {
    return (       
    <div display="grid" gridtemplaterows="300px 1fr">
         <AppBar />
         <Suspense fallback={<Loader />}> 
            <Outlet />
         </Suspense> 
        <ToastContainer autoClose={3000} theme="colored"/>  
    </div>
    );
};

export default Layout;