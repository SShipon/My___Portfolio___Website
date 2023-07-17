/* eslint-disable react/prop-types */
 import './cssProject.css'

const CssProject = ({project}) => {
    // eslint-disable-next-line no-unused-vars
    const {name, img, id}=project
    return (
        <div className='image___warp  w-[100%]'>
             <img src={img} alt="" />
        </div>
    );
};

export default CssProject;