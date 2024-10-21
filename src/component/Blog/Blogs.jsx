
import Blog from './Blog';
import BlogIcon from './SvgIcon/BlogIcon';
import Four from './SvgIcon/Four';
import Second from './SvgIcon/Second';
import Third from './SvgIcon/Third';




const Blogs = () => {
    const professionalServices =[
        {
            id:1,
            icon: <BlogIcon/>,
            name:'Licenced Providers',
            description:'Service Content means the audio and visual information, documents, software, products and services contained or made available',
            bgClass:'bg-gradient'
        },
        {
            id:2,
            icon:<Second/>,
            name:' Telemedicine Available',
            description:'Service Content means the audio and visual information, documents, software, products and services contained or made available',
            bgClass:'bg-gradient_one'
        },
        {
            id:3,
            icon:<Third/>,
            name:' Insurance Partners',
            description:'Service Content means the audio and visual information, documents, software, products and services contained or made available.',
            phone:'+880170305946512',
            bgClass:'bg-gradient_there'
        },
        {
            id:4,
            icon:<Four/>,
            name:' Schedules   Visits.',
            description:'Service Content means the audio and visual information, documents, software, products and services contained or made available.',
            phone:'+880170305946512',
            bgClass:'bg-gradient_four'
        }
    ]
   
    
    return (
       <section id='blogs' className='flex justify-center items-center  flex-col'>
                <div className='text-center '>
                  <h4 className=' text-3xl lg:text-5xl font-bold italic text-white  lg:my-6 text-gradient'>  What we care for</h4>
                  <p className='text-2xl lg:text-3xl text-white  italic p-4'>Making professional therapy accessible</p>
                </div>
                <br />
                <br />
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 '>
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