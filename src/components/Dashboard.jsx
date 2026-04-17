import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
        <div className='flex'>
          <Sidebar/>

          <div className='w-full'>
            <Navbar/>

            <main>
              <Outlet/>
            </main>
          </div>
        </div>
    </div>
  )
}
export default Dashboard