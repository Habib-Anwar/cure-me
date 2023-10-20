import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div><div className="navbar">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to='/'>Home</Link></li>
          <li>
            <a>About</a>
          </li>
          <li><a>Appointment</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl lg:-ml-96">Cure Me</a>
    </div>
    <div className="navbar-center hidden lg:flex ml-96 text-white">
      <ul className="menu menu-horizontal px-1">
        <li><Link to='/'>Home</Link></li>
        <li tabIndex={0}>
          <details>
            <summary>About</summary>
          </details>
        </li>
        <li><a>Appointment</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Login</a>
    </div>
  </div></div>
  )
}
