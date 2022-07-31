import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import search from '../../images/icons/search.png'
import heart from '../../images/icons/heart.png'
import cart from '../../images/icons/shopping-cart.png'

const Navbar = () => {

    const menuItems = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/shop'>SHOP</Link></li>
        <li><Link to='/lookbook'>LOOKBOOK</Link></li>
        <li><Link to='/features'>FEATURES</Link></li>
        <li><Link to='/pages'>PAGES</Link></li>
        <li><Link to='/blog'>BLOG</Link></li>
    </>
    return (
        <div className='flex justify-center'>
            <div class="navbar bg-base-100 lg:max-w-6xl">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg text-black">
                            <div></div>
                            {menuItems}

                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl"><img src={logo} alt="" srcset="" /></a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 text-lg text-black">

                        {menuItems}

                    </ul>
                </div>
                <div class="navbar-end">
                    <ul class="menu menu-horizontal p-0">
                    <li><img src={search} alt="" srcset="" /></li>
                    <li><img src={heart} alt="" srcset="" /></li>
                    <li><img src={cart} alt="" srcset="" /></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;