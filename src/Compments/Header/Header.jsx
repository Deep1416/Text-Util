import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
function Header() {
    const [dark , setDark] = useState(false);
    
  return (
    <nav>
      <div>
        <div className="flex justify-between p-5 bg-white text-gray-600">
          <div className="flex items-center gap-6">
            <Link to="/"><h1 className = "text-xl font-semibold text-[#8BC7DB]">TextUtils</h1></Link>
            <ul className="flex items-center gap-5 font-semibold">
              <NavLink to = "/" className={({isActive})=>`${isActive ?"text-sky-400":"black"}`} ><li>Home</li></NavLink>
              <NavLink to = "/About" className={({isActive})=>`${isActive ?"text-sky-400":"black"}`}><li>About</li></NavLink>
              {/* <li>About Us</li> */}
              <NavLink to = "/Contact" className={({isActive})=>`${isActive ?"text-sky-400":"black"}`}><li>Contact</li></NavLink>
            </ul>
          </div>
          <div className="text-3xl" onClick={()=>setDark((prev) => !prev)} >
           
            {
                !dark ? <MdLightMode /> : <MdDarkMode />
            }

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
