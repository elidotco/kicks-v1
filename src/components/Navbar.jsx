import React from "react";
import { HiBars4 } from "react-icons/hi2";
import Logo from "../logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { AiOutlineClose, AiOutlineBell } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  var [add, setAdd] = useState(0);
  return (
    <div>
      <div className="nav-container">
        <div className="nav">
          <div className="menubar" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AiOutlineClose /> : <HiBars4 />}
          </div>
          <div className={isOpen ? "smallmenu" : "menu"}>
            <a href="/">New shoes</a>
            <a href="/">Men</a>
            <a href="/">Women</a>
          </div>

          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="noti">
            <span>
              <AiOutlineSearch />
            </span>
            <span>
              <AiOutlineBell />
            </span>

            <div className="store" onClick={() => setAdd(add + 1)}>
              {add}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
