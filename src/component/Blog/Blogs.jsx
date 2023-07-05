
import background from '../../assets/imgIcon/background.png'
import flight from '../../assets/imgIcon/man.png'
import man from '../../assets/imgIcon/man1.png'
import world from '../../assets/imgIcon/world.png'
import Blog from './Blog';

const Blogs = () => {

    const professionalServices =[
        {
            id:1,
            icon:background,
            name:'Licenced Providers',
            description:'uis pellentesque tincidunt accumsan, in ut, consequat.',
            bgClass:'bg-gradient'
        },
        {
            id:2,
            icon:flight,
            name:' Telemedicine Available',
            description:'Pellentesque habitant morbi tristique senectus et netus.',
            bgClass:'bg-gradient_one'
        },
        {
            id:3,
            icon:man,
            name:' Insurance Partners',
            description:'Sed in anteet urna auctor id, arcu in, dignissim magna.',
            phone:'+880170305946512',
            bgClass:'bg-gradient_there'
        },
        {
            id:4,
            icon:world,
            name:' Schedules   Visits.',
            description:'Nam magna justo, quam ut, consequat fringilla metus.',
            phone:'+880170305946512',
            bgClass:'bg-gradient_four'
        }
    ]
   
    
    return (
       <section className=''>
                <div className='text-center'>
                  <h4 className='sm:text-5xl font-bold italic text-white my-10'>  What we care for</h4>
                  <p className='sm:text-2xl text-white  italic'>Making professional therapy accessible</p>
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
             {
              professionalServices.map(professional=><Blog
              key={professional.id}
              professional={professional}
              ></Blog>)  
             }       
        </div>
  
       </section>
    );
};

export default Blogs;