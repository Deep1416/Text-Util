import React, { useState } from "react";
import data from "./data.json";
import { IoIosArrowDown } from "react-icons/io";
function About() {
    const [text , setText] = useState('');
   
  return (
    <div className="h-[65vh]">
      <div className="px-10  mx-24 ">
        <h1 className="text-4xl font-medium text-center mt-20 mb-10">About App</h1>
        <div>
          {data.map((title) => {
            
            return (
              <div key={title.id} className="border bg-white p-2 px-5">
                <div className="flex justify-between mb-3 ">
                  <h2 className="text-black font-medium">{title.title}</h2>
                  <button onClick={()=>setText(title.id)}><IoIosArrowDown /></button>
                </div>
                {
                    text == title.id && <p className="mb-3 font-bold">{title.disc}</p>
                }
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
