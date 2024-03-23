import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
function Header() {
    const toggle = ()=>{
        false
    };
    
  return (
    <nav>
      <div>
        <div className="flex justify-between p-5 bg-red-500">
          <div className="flex items-center gap-6">
            <h1>TextUtils</h1>
            <ul className="flex items-center gap-5 ">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="text-3xl" onClick={toggle} >
           
            {
                !toggle ? <MdLightMode /> : <MdDarkMode />
            }

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
