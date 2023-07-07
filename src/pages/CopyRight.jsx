/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

export default function CopyRight() {

    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
  return (
    <>
    <p className=' text-center lg:py-10  text-bold text-white'>  Copyright &copy; {date} oxshipon@gmail.com-</p>
    </>
  );
}