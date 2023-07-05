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
    <p className=' text-right lg:mr-10 text-bold text-white'> &copy; oxshipon@gmail.com - {date}</p>
    </>
  );
}