

import CopyRight from '../CopyRight';
import './footer.css'
const Footer = () => {
  return (
    <section className="mx-4">
      <hr className="line__bar" />
      <br />
      <br />
      <div className="flex flex-col lg:flex-row justify-between sm:items-enter">
        <div className="w-2/2 lg:w-3/7 ">
          <div className="grid grid-cols-2 lg:gap-10 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <span className="text-xl text-white">Support</span>
            
                 <div className="mt-4">
                     <div className="flex gap-2 justify-center items-center p-2 contact__page__color">
                       <i className="fa-solid fa-phone"></i>
                        <p>10:00am to 12:00am</p>
                       </div>
                       <br />
                       <div className="flex gap-2 justify-center items-center p-2 contact__page__color">
                        <i className="fa-solid fa-location-dot"></i>
                       <p>Store Locator Details</p>
                       </div>
                  </div> 
            </div>
            <div className="text-color">
            <span  className="text-xl text-white">Quick Link</span>
              <p>Upcoming Live Batch</p>
              <p>Live Workshop.</p>
              <p>Guide to Writing a Travel Blog</p>
              <p>Stay connected with the community.</p>
              <p>Help Center All Support</p>
            </div>
            <div className="text-color">
            <span  className="text-xl text-white">Contacts</span>
              <a href=""> <p>+08801703059461</p></a>
              <a href=""><p>nxshipon@gamil.com</p></a>
              <a href=""><p>Level-4, House-6 Cumilla Kandipar Dhaka Bangladesh</p></a>
              <a href=""><p>(Available : 10:00am to 12:00am)</p></a>
               <a href=""><p> Contact Us</p></a>
            </div>
            <div className="text-color">
            <span  className="text-xl text-white">Details Center</span>
              <p>Home</p>
              <p>About us</p>
              <p>Success Page</p>
              <p>Terms and condition</p>
              <p>Privacy Policy</p>
              <p>Refund Policy and Terms</p>
            </div>
          </div>
        </div>
         
        <div className="w-2/2 my-10 lg:w-1/8 flex flex-col justify-center items-center">
        <span className="-mt-10 text-xl text-white ">Follow us</span> 
        <div className="mx-10 my-6">
            <input
              type="text"
              placeholder="Search here"
              className="input input-bordered input-info sm:w-full max-w-xs"
            />
          </div>

          <div>
           
          <div className='flex gap-5 mt-6 text-2xl text-white sm:order-1 -order-1 '>
                <a href="https://www.facebook.com/mdshipon.chowdhury.940/"><i className="fa-brands fa-facebook text__icon"></i></a>
                <a href="https://www.linkedin.com/in/sh-shipon-5373b9241/"><i className="fa-brands fa-linkedin text__icon"></i></a>
                <a href="https://github.com/SShipon"><i className="fa-brands fa-github text__icon"></i></a>
                <a href=""><i className="fa-brands fa-square-instagram text__icon"></i></a>
                <a href=""><i className="fa-brands fa-twitter"></i></a>
               
            </div>
          
          </div>
          
        </div>
        
      </div>
        <CopyRight></CopyRight>

        <a className="text-white text-right block text-3xl font-semibold py-6 text-fuchsia-700" id="#" href=""><i className="fa-solid fa-arrow-up"></i></a>
    </section>
  );
};

export default Footer;
