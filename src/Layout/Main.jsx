import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import LoadingSpinner from "../shared/spinner/LoadingSpinner";
// Create this component

const Main = () => {
    return (
        <div>
            <Navbar />
            <Suspense fallback={<LoadingSpinner />}>
                <Outlet />
            </Suspense>
            <Footer />
        </div>
    );
};

export default Main;
