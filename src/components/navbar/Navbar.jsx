// "use client"

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
const Navbar = async() => {

    
const {isAuthenticated} = getKindeServerSession();
const isUserAuthenticated = await isAuthenticated();

// const handleLogout = () =>{
// const router = useRouter()
// router.push('/login')
// }


    return (
<>

<div className="navbar bg-purple-500">
  <div className="navbar-start">
    <div className="dropdown relative">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-purple-500 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute left-0">
       <li>Home</li>
       <li><Link href='/profile'> Profile</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BlogPost</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  ">
    <li ><Link href='/' >Home</Link> </li> <li>
      <Link href='/profile'> Profile</Link></li>
    
    </ul>
  </div>
  <div className="navbar-end">
    {
        isUserAuthenticated ? <LogoutLink   className="btn">Log out</LogoutLink> :  <Link href={`/login`} className="btn">Login</Link>
    }
   
    
  </div>
</div>
</>
    )
}

export default Navbar