import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { useStateContext } from '../contexts/ContextProvider';
import Cart from './Cart';

const NavButton = ({ customFunc, icon, color, dotColor }) => (
  <button type="button" onClick={() => customFunc()} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
    <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
    {icon}
  </button>
);

const Navbar = ({ user }) => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
      <div className="flex">
        <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick('userProfile')}>
           {user ? (
             <p>
              <span className="text-gray-400 text-14">Hello, </span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                {user.username}
              </span>
              </p>
           ) : (<Link to="/login">Click Here to Login</Link>)}
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        {isClicked.cart && (<Cart />)}
      </div>
    </div>
  );
};

export default Navbar;
