import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { useStateContext } from '../contexts/ContextProvider';
import Button from './Button';
import { Link } from 'react-router-dom';

const UserProfile = ({ user, onLogout }) => {
  const { currentColor } = useStateContext();

  function handleLogout() {
    fetch("https://ecommerce-production-921a.up.railway.app/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        {user ? (
           <div>
           <p className="font-semibold text-xl dark:text-gray-200">{user.username}</p>
         </div>
        ) : (<Link to="https://ecommerce-production-921a.up.railway.app/login">Click Here to Login</Link>)}

       
      </div>
      <div>
       
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>

  );
};

export default UserProfile;