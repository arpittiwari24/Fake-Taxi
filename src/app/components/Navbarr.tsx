'use client'

import { useSession } from "next-auth/react"
import SigninButton from "./SignInButton"

export default function Navbarr() {
    const {data: session} = useSession()

    if(session && session.user){
      return(
        <div className="navbar text-gray-700">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <h1 className=" normal-case text-4xl max-sm:text-2xl font-extrabold font-mono">FAKE-TAXI</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li className="mb-2 px-4">
  <a href="#" className="bg-gradient-to-tr from-blue-500 to-pink-500 rounded-full text-white flex items-center justify-center  font-semibold transform transition-transform hover:scale-110">
    +
  </a>
</li>

            <li tabIndex={0} className="px-4"><a className="bg-gradient-to-tr from-blue-500 to-pink-500 rounded-full text-white flex items-center justify-center  font-semibold transform transition-transform hover:scale-110">Explore</a></li>
            <li className="px-4"><a className="bg-gradient-to-tr from-blue-500 to-pink-500 rounded-full text-white flex items-center justify-center  font-semibold transform transition-transform hover:scale-110">Organization</a></li>
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <img src={session.user?.image?.toString()} alt="" className="rounded-full" />
      </label>
       <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52">
       <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
      </ul> 
    </div>
        
        </div>
      </div>
      )
    }
   
    return(
        <div className="navbar text-gray-700">
        <div className="navbar-start">
          <h1 className=" normal-case text-4xl max-sm:text-2xl font-extrabold font-mono">FAKE-TAXI</h1>
        </div>
        <div className="navbar-end">
            <div className="flex-none gap-2">
                <SigninButton />
            </div>
        </div>
      </div>
    )
}