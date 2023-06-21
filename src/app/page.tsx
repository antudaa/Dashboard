'use client';

import SideNav from '@/Components/Global/SideNav/SideNav'
import TopNav from '@/Components/Global/TopNav/TopNav'
import Image from 'next/image'

export default function Home() {
  return (
    // <div className="flex w-screen h-screen text-gray-400 bg-gray-900">
    //   <SideNav />
    //   <div className="flex flex-col flex-grow">
    //     <TopNav />
    //     <div className="flex-grow p-6 overflow-auto bg-gray-800">
    //       <h1>Antu</h1>
    //     </div>
    //   </div>
    // </div>

    // <h1>Antu</h1>
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="bg-gray-200 w-full md:w-64">
        {/* Sidebar content here */}
      </div>

      <div className="flex-grow bg-white p-4">
        <div className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          {/* Top navigation links here */}
        </div>

        <div className='text-black mt-6 ml-6'>
        Antu Das
        </div>
      </div>
    </div>
  )
}
