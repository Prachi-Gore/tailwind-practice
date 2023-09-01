// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "./Card";

function Courses() {
  return (
    <div className=" bg-yellow-200 px-20 py-8 grid grid-cols-1 gap-8 justify-center  md:grid-cols-2 lg:grid-cols-3 ">
      
      <Card /> 
      <Card />
      <Card />
      <Card />
      <Card/>  
      {/* <Card/>    */}
      </div>
    
  );
}

export default Courses;
