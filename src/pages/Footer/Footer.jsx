import { ColorRing } from "react-loader-spinner";
import CopyRight from "../CopyRight";

const Footer = () => {
  return (
    <section className="mx-12">
      <div className="flex flex-col lg:flex-row justify-between sm:items-enter">
        <div className="w-3/5 ">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <span>tems</span>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
            </div>
            <div>
            <span>tems</span>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
            </div>
            <div>
            <span>tems</span>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
            </div>
            <div>
            <span>tems</span>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
              <p>Lorem ipsum dolor sit amet .</p>
            </div>
          </div>
        </div>

        <div className="w-1/8 flex flex-col justify-center items-center">

        <div className="mx-10 ">
            <input
              type="text"
              placeholder="Search here"
              className="input input-bordered input-secondary sm:w-full max-w-xs"
            />
          </div>

          <div>
           
          <div className='flex gap-5 my-8 text-2xl text-white sm:order-1 -order-1 '>
                <a href="https://www.facebook.com/mdshipon.chowdhury.940/"><i className="fa-brands fa-facebook text__icon"></i></a>
                <a href="https://www.linkedin.com/in/sh-shipon-5373b9241/"><i className="fa-brands fa-linkedin text__icon"></i></a>
                <a href="https://github.com/SShipon"><i className="fa-brands fa-github text__icon"></i></a>
                <a href=""><i className="fa-brands fa-square-instagram text__icon"></i></a>
                <a href=""><i className="fa-brands fa-twitter"></i></a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"><i className="fa-solid fa-envelope"></i></a>
                
            </div>
          
          </div>
          
        </div>
        
      </div>
      <CopyRight></CopyRight>
        <ColorRing></ColorRing>
        <a className="text-white text-right block text-3xl font-semibold py-6 text-fuchsia-700" id="#" href=""><i className="fa-solid fa-arrow-up"></i></a>
    </section>
  );
};

export default Footer;
