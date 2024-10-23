/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const AllProject = ({project}) => {
    // eslint-disable-next-line no-unused-vars
    const {name, img, id}=project
    return (
        <div className='image___warp w-[330px] h-[300px] md:w-[360px] md:h-[300px] lg:w-[365px] lg:h-[330px] gradient-border overflow-hidden relative game__box'>
        <img className="w-[100%] h-[100%] object-cover  overflow-x-hidden relative " src={img} alt="" />
        
       <Link to={`/details/${id}`}>
       <button className='gradient-border btn btn-sm w-40 service__hero__btn service__hero__btn:hover   hover:text-white top-0 right-0 bottom-0 left-0 m-auto bg-transparent video__btn' >Details</button>
       </Link>
       </div>
    );
};

export default AllProject;