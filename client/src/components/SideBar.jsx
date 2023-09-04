import React, { useRef } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, closeSidebar }) => {
  const overlayRef = useRef(null);

  const toggleSidebar = () => {
    if (isOpen) {
      closeSidebar();
    }
  };

  const sidebarClasses = isOpen
    ? "fixed top-24 mt-2 left-0 h-full w-64 bg-gray-800 text-white shadow-lg transform translate-x-0 transition-transform ease-in-out duration-300 z-20"
    : "fixed top-24 mt-2 left-0 h-full w-64 bg-gray-800 text-white shadow-lg transform -translate-x-full transition-transform ease-in-out duration-300 z-20";

  const overlayClasses = isOpen
    ? "fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
    : "hidden";

  return (
    <>
      <div className={overlayClasses} ref={overlayRef} onClick={toggleSidebar}></div>
      <div className={sidebarClasses}>

        <div className="p-4">
          <ul>
            <li className="mb-2">
              <Link to="/" onClick={toggleSidebar}>Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/about" onClick={toggleSidebar}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
