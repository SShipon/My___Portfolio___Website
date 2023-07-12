
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import resume from '../../../assets/Shipon resume (3).pdf'
import BannerAnimate from './BannerAnimate';
import Icons from '../../../shared/Icons/Icons';

const Banner = () => {
    const [text] = useTypewriter({
        words: ['I am ', 'Shipon', 'Professional','Frontend Developer ', 'Mern Stack Developer','SEO Developer',''],
        loop: 0
      })
    
    return (
        <div id='home' className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between items-center'>
           <div>
           <h1 className='text-xl lg:text-3xl font-extrabold mt-20 lg:mt-8 text-white' >Hey There  { ''}
            <span className='text-gradient text-xl lg:text-3xl font-extrabold' style={{fontWeight:'bold',}}>{text}</span>
           <span className='text-3xl text-sky-600'>
           <Cursor cursorStyle='//' />
           </span>
           </h1>
           <br />
           <p className='text-white lg:w-2/3 text-lg  lg:text-xl'>I am Professional <span className=' text-cyan-400'>SEO Developer</span> With <span className=' text-cyan-500'>Frontend And Backend </span>Web Development Skills Based on Client Desire.</p>
           <br />
          <div>
          <a href={resume} download>
           <button className="btn btn_hero"><i className="fa-solid fa-download"></i> Resume</button>
          </a>
          </div>
            <div>
              <Icons></Icons>
            </div>
           </div>

           <div className='w-3/2 mb-9'>
            <BannerAnimate></BannerAnimate>
           </div>
        </div>
    );
};

export default Banner;