import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import TsParticles from "../hooks/TsParticles";



const Main = () => {
    return (
        <div>
            <TsParticles />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
         
        </div>
    );
};

export default Main;