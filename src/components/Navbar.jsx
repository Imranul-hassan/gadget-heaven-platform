import { Link, NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";



const Navbar = () => {
    return (
        <div className="navbar bg-[#9538E2] text-[white] ">
            <div className="navbar-start">
                <Link to='/' className="btn btn-ghost text-2xl">Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-base">
                    <NavLink className={({isActive})=> `font-bold ${isActive? 'text-warning': 'hover:text-warning'}`} to='/'>Home</NavLink>
                    <NavLink className={({isActive})=> `font-bold ${isActive? 'text-warning': 'hover:text-warning'}`} to='/statistics'>Statistics</NavLink>
                    <NavLink className={({isActive})=> `font-bold ${isActive? 'text-warning': 'hover:text-warning'}`} to='/dashboard'>Dashboard</NavLink>
                </ul>
            </div>
            <div className="navbar-end mr-3">
                <button className="border rounded-full p-2 text-lg">
                <IoCartOutline />
                </button>
                <button className="btn btn-ghost btn-circle">
                <div className="border rounded-full p-2 text-lg">
                    <CiHeart />
                </div>
                </button>
            </div>
            
           
          
            
        </div>
    );
};

export default Navbar;