
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import resume from '../../../assets/Shipon resume (3).pdf'
const Banner = () => {
    const [text] = useTypewriter({
        words: ['I am ', 'Shipon', 'Typewriter', 'Hook!'],
        loop: 0
      })
    
    return (
        <div className='mx-6 my-6'>
            <h1 className='text-4xl' >Hey There  { ''}
            <span className='text-gradient text-4xl' style={{fontWeight:'bold',}}>{text}</span>
           <span className='text-4xl text-sky-600'>
           <Cursor cursorStyle='//' />
           </span>
           </h1>
           <br />
           <p>I am Professional SEO Marketer With Frontend And Backend <br /> Web Development Skills Based on Client Desire.</p>
           <br />
          <div>
          <a href={resume} download>
           <button className="btn btn_hero"><i className="fa-solid fa-download"></i> Resume</button>
          </a>
          </div>
         
        </div>
    );
};

export default Banner;