import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='w-[17%] h-screen bg-black'>
        <ul className='flex flex-col justify-center gap-[20px] my-[100px] mx-[20px] text-[30px]'>
            <li> <NavLink className='text-red-500 hover:text-green-500' to="/"> Dashboard </NavLink> </li>
            <li> <NavLink className='text-red-500 hover:text-green-500' to="/tasks"> Tasks </NavLink> </li>
        </ul>
    </div>
  )
}
export default Sidebar