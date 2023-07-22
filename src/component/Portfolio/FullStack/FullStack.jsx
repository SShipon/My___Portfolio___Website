/* eslint-disable react/prop-types */
import './fullStack.css'
const FullStack = ({fullStack}) => {
    // eslint-disable-next-line no-unused-vars
    const {img, name, id } = fullStack
    return (
        <div className='image___warp w-[330px] h-[300px] md:w-[360px] md:h-[300px] lg:w-[365px] lg:h-[330px] overflow-hidden'>
             <img className="w-[100%] h-[100%] object-cover  overflow-x-hidden" src={img} alt="" />
        </div>
    );
};

export default FullStack;