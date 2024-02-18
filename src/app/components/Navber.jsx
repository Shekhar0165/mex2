import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='sticky top-0 z-40'>
      <div className=" flex justify-between  items-center bg-[#0573f0]">
      <div className="text-2xl ml-10 m-4 pl-6 text-white font-semibold">
        <Link href="/">
        <Image src="/logo.svg" width={120} height={120} alt='logo'/>
        </Link>
      </div>
      <nav className="flex ">
        <ul className="flex my-5 mr-4 text-lg">
          <li className="mx-4 cursor-pointer text-white hover:underline hover:translate-y-0.5">
            <Link href="/">
            Smart Phones
            </Link>
          </li>
          <li className="mx-4 cursor-pointer text-white hover:underline hover:translate-y-0.5">
            <Link href="/">
            Laptops
            </Link>
          </li>
          <li className="mx-4 cursor-pointer text-white hover:underline hover:translate-y-0.5">
            <Link href="/">
            Mens Watches
            </Link>
          </li>
          <li className="mx-4 cursor-pointer text-white hover:underline hover:translate-y-0.5">
            <Link href="/">
            Womens Watches
            </Link>
          </li>
        </ul>
      </nav>
      <div className='flex mr-20'>
        <img className='w-7 h-7 my-1' src="/cart.png" alt='cart'/>
        <p className='text-gray-100 text-lg font-bold my-1'>{"Cart"}</p>
      </div>
    </div>
    </div>
  )
}
