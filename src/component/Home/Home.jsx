import Blogs from "../Blog/Blogs";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="mx-6 lg:mx-20 sm:my-12">
            <Banner></Banner>
            <Portfolio />
            <Blogs />
            <Contact />
        </div>
    );
};

export default Home;