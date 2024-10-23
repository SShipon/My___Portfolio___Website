import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  
  console.log(id, "hello world ")
 



  return (
    <div className="details-page my-20">
      {id}
    </div>
  );
};

export default Details;
