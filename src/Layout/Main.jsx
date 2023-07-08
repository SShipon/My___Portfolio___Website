import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";
import { Suspense } from "react";
import Loading from "../pages/Loading/Loading";



const Main = () => {
    return (
        <div>
            <Suspense fallback={<Loading />}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </Suspense>
        </div>
    );
};

export default Main;