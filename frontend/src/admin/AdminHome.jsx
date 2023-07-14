import React from 'react'
import AdminNav from '../navbar/AdminNav';

const AdminHome = () => {
  return (
    <div>
        <AdminNav/>
        <div className="flex justify-center mt-20 text-5xl  text-black font-bold ">
            <h2 className='border-2 p-8 bg-neutral-300'>Welcome to Admin</h2>
        </div>
    </div>
  )
}

export default AdminHome;