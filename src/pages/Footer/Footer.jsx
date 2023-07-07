
import CopyRight from "../CopyRight";
import './footer.css'
const Footer = () => {
  return (
    <section className="mx-12">
      <hr className="line__bar" />
      <br />
      <br />
      <div className="flex flex-col lg:flex-row justify-between sm:items-enter">
        <div className="w-2/2 lg:w-3/7 ">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <span>Support</span>
                 <div className="text-footer flex flex-col ">
                 <i className="fa-solid fa-phone"></i>
                    <p>10:00am to 12:00am</p>
                   
                 </div>
                 <div className="text-footer flex flex-col">
                 <i className="fa-solid fa-location-dot"></i>
                    <p>Store Locator</p>
                   
                 </div>
            </div>
            <div>
            <span>Quick Link</span>
              <p>Upcoming Live Batch</p>
              <p>Live Workshop.</p>
              <p>Guide to Writing a Travel Blog</p>
              <p>Stay connected with the community.</p>
              <p>Help Center All Support</p>
            </div>
            <div>
            <span>Contacts</span>
              <p>+08801703059461</p>
              <p>nxshipon@gamil.com</p>
              <p>Level-4, House-6 Cumilla Kandipar Dhaka Bangladesh</p>
              <p>(Available : 10:00am to 12:00am)</p>
              <p> Contact Us</p>
            </div>
            <div>
            <span>tems</span>
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
        <span className="-mt-10">Follow us</span> 
        <div className="mx-10 my-6">
            <input
              type="text"
              placeholder="Search here"
              className="input input-bordered input-secondary sm:w-full max-w-xs"
            />
          </div>

          <div>
           
          <div className='flex gap-5 mt-6 text-2xl text-white sm:order-1 -order-1 '>
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

        <a className="text-white text-right block text-3xl font-semibold py-6 text-fuchsia-700" id="#" href=""><i className="fa-solid fa-arrow-up"></i></a>
    </section>
  );
};

export default Footer;
