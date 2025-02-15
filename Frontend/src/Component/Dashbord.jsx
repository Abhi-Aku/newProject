import React from 'react'
import { Outlet } from 'react-router-dom'
const Dashbord = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="flex gap-4 items-center">
          <input type="text" placeholder="Search..." className="px-3 py-1 rounded text-black" />
          <button 
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
            onClick={() => navigate('/logout')}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4">
          <ul>
            <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={() => navigate('/')}>Home</li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={() => navigate('/profile')}>Profile</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
    </div>
  )
}

export default Dashbord
