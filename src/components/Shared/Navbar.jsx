import { Link } from "react-router";

const Navbar = () => {
  return (
    <div  className=" bg-[#A2B9A7] w-full sticky top-0 z-10">
      {/* Please create navbar here /src/components/Navbar.jsx */}
   

      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="flex-1">
            <Link to={'/'} className="btn btn-ghost text-xl">daisyUI</Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <Link className="btn mx-3" to='/'>Home</Link>
            <Link className="btn mx-3" to='/terms-and-condition'>Terms and Conditions</Link>
            <Link className="btn mx-3" to='/about-us'>About Us</Link>
              
              <Link className="btn mx-3" to='/join-us'>Join Us</Link>
  
            </ul>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;