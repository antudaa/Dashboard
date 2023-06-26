'use client';

import SideNav from '@/Components/Global/SideNav/SideNav'
import TopNav from '@/Components/Global/TopNav/TopNav'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  console.log(isSidebarOpen)

  return (
    <div>Content</div>
  )
}
