import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';

  const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = ()=>{
      logOut().then(result => console.log(result)).catch(err => console.log(err))
    }
    const navItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Menu</Link></li>
    <li><Link to='/secret'>Secret</Link></li>
    <li><Link to='/order/salads'>Order Food</Link></li>
    {user? <><button onClick={handleLogOut} className='btn btn-primary'>Log Out</button></> : <><li><Link to='/login'>Login</Link></li></>}
    

    </>
    return (
        <div className="navbar fixed z-10 md:text-white p-3 text-xl max-w-7xl bg-black/30">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Bistro Boss <br />Restaurant</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>
  <div className="mt-3 p-2 shadow bg-base-100">
    
  </div>
</div>
    );
};

export default Navbar;