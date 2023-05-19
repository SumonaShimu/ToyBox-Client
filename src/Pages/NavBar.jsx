import { Link } from 'react-router-dom';

const NavBar = () => {
    const navitems = (
        <>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/all-toys">All Toys</Link></li>
          <li><Link to="/add-a-toy">Add a Toy</Link></li>
          <li><Link to="/my-toys">My Toys</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </>
      );
    
      return (
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {navitems}
              </ul>
            </div >
            
            <h1 className='h-36 w-52 flex items-center'>
            <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/logo.png" className="object-scale-down h-24 w-24" />
            <Link to="/" className="font-bold btn btn-ghost normal-case text-xl">T<span className='text-teal-600'>o</span>yB<span className='text-teal-600'>o</span>x</Link>
            </h1>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navitems}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-accent">Login</a>
          </div>
        </div>
      )
};

export default NavBar;