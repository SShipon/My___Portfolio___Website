/* eslint-disable react/prop-types */
 import './cssProject.css'

const CssProject = ({project}) => {
    // eslint-disable-next-line no-unused-vars
    const {name, img, id}=project
    return (
        <div className='image___warp w-[330px] h-[300px] md:w-[360px] md:h-[300px] lg:w-[400px] lg:h-[330px] overflow-hidden'>
             <img className="w-[100%] h-[100%] object-cover " src={img} alt="" />
        </div>
    );
};

export default CssProject;