import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import Swal from 'sweetalert2'

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const signOutbtn=()=>{
        logOut()
        .then(()=>{
            Swal.fire(
                'Sign Out!',
              )
        })
        .catch(error=>console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-purple-600 text-white px-36 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link>Item 1</Link></li>
                  
                    <li><Link>Item 3</Link></li>
                </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-2xl">Sign<span className='text-gray-600'>App</span></Link>
            </div>
            <div className="navbar-center flex items-center">
                    <ul className="menu menu-horizontal p-0">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/order">Gallery</NavLink></li>
                    </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ? 
                    <>
                    <Link>{user?.email}</Link>
                    {user?.uid && <button onClick={signOutbtn} className="btn ml-3">Sign Out</button>}              
                    </>:
                    <>
                    <NavLink to="/login"><button className="btn ml-3">Log in</button></NavLink>
                    {/* <NavLink to="/registration"><button className="btn ml-3">Registration</button></NavLink> */}
                    </>
                }
                
            </div>
            </div>
        </div>
    );
};

export default Header;