
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import resume from '../../../assets/Shipon resume (3).pdf'
import Icons from '../../../pages/Icons/Icons';
import BannerAnimate from './BannerAnimate';

const Banner = () => {
    const [text] = useTypewriter({
        words: ['I am ', 'Shipon 👨', 'Professional','Frontend Developer ', 'Mern Stack Developer','SEO Developer',''],
        loop: 0
      })
    
    return (
        <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between items-center'>
           <div>
           <h1 className='text-3xl font-extrabold' >Hey There  { ''}
            <span className='text-gradient text-3xl' style={{fontWeight:'bold',}}>{text}</span>
           <span className='text-3xl text-sky-600'>
           <Cursor cursorStyle='//' />
           </span>
           </h1>
           <br />
           <p className='text-white'>I am Professional <span className=' text-cyan-400'>SEO Developer</span> With <span className=' text-cyan-500'>Frontend And Backend </span><br /> Web Development Skills Based on Client Desire.</p>
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