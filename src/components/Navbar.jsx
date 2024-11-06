import { Link, NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { getAllCarts } from "../utils";
import { useLocation } from 'react-router-dom';



const Navbar = () => {

    const location = useLocation();

    const getNavbarColor = () => {
        if (location.pathname === '/') {
          return '#9538E2';
        } else {
          return 'white'; 
        }
      };

      const navbarStyle = {
        backgroundColor: getNavbarColor(),
        color: 'black', 
        padding: '10px',
        textAlign: 'center'
      };

      useEffect(() => {
        switch (location.pathname) {
          case '/':
            document.title = 'Home - Gadget Heaven';
            break;
          case '/about':
            document.title = 'About Us - Gadget Heaven';
            break;
          case '/statistics':
            document.title = 'Statistics - Gadget Heaven';
            break;
          case '/dashboard':
            document.title = 'Dashboard - Gadget Heaven';
            break;
          case '/dashboard/cart':
            document.title = 'Dashboard | Card - Gadget Heaven';
            break;
          case '/dashboard/heart':
            document.title = 'Dashboard | Wishlist - Gadget Heaven';
            break;
          case '/category/:category':
             document.title = 'Dashboard | Card - Gadget Heaven';
             break;
          default:
            document.title = 'Gadget Heaven';
            break;
        }
      }, [location.pathname]);
    
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const carts = getAllCarts()
        setProducts(carts)
    },[])
    return (
        <div style={navbarStyle} className="navbar bg-[#9538E2] text-white ">
            <div className="navbar-start">
                <Link to='/' className="btn btn-ghost text-2xl">Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-base">
                    <NavLink className={({isActive})=> `font-bold ${isActive? 'text-warning': 'hover:text-warning'}`} to='/'>Home</NavLink>
                    <NavLink className={({isActive})=> `font-bold ${isActive? 'text-warning': 'hover:text-warning'}`} to='/statistics'>Statistics</NavLink>
                    <NavLink className={({isActive})=> `font-bold ${isActive? 'text-warning': 'hover:text-warning'}`} to='/about'>About</NavLink>
                    <NavLink className={({isActive})=> `font-bold ${isActive? 'text-warning': 'hover:text-warning'}`} to='/dashboard'>Dashboard</NavLink>
                </ul>
            </div>
            <div className="navbar-end mr-3">
                <button className="border rounded-full p-2 text-lg">
                <div className="relative">
                    <div>
                        <IoCartOutline />
                    </div>
                    <div className="absolute -top-7 left-3">
                        {products.length}
                    </div>
                </div>
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