import { useEffect, useState } from "react";
import FullStack from "./FullStack";





const FullStacks = () => {
    // eslint-disable-next-line no-unused-vars
    const [fullStacks, setFullStack] = useState([])
    
    useEffect(()=>{
      fetch('fullStack.json')
      .then(res => res.json())
      .then(data => setFullStack(data))
    },[])
    return (
      <div >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">   
       {
        fullStacks.map(fullStack=><FullStack
          key={fullStack.id}
          fullStack={fullStack}
        ></FullStack>)
       }
       </div> 
      </div>
    );
};

export default FullStacks;