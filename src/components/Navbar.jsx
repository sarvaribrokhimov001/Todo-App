import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full h-[100px] bg-[rgb(24,23,23)]'>
        <ul className='flex justify-center items-center gap-[100px] py-[30px]'>
            <li> <NavLink className='text-[30px] text-white hover:text-red-500' to="/"> Dashboard </NavLink> </li>
            <li> <NavLink className='text-[30px] text-white hover:text-red-500' to="/tasks"> Tasks </NavLink> </li>
        </ul>
    </div>
  )
}
export default Navbar