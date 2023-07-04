/* eslint-disable react/prop-types */

const Blog = ({ professional }) => {
  const { name, description, icon, bgClass } = professional;
  return (
    <div className={`card sm:mt-8 text-white lg:p-6 py-[40px] sm:w-[100%] sm:h-[100%] w-[300px] sh-[450px] shadow-3xl ${bgClass}`}>
      <div className="card-body">
        <figure><img className=" mr-[100px]" style={{width:'80px'}} src={icon} alt="" /></figure>
        <h1 className="text-2xl font-bold text-gradient_color">{name}</h1>
        <p className="text-gradient_color_sm"> <br/>{description}</p> 
      </div>
        <button className="about__hero__btn about__hero__btn:hover font-bold">Learn More <i className="fa-solid fa-angles-right"></i></button>
    </div>
  );
};

export default Blog;