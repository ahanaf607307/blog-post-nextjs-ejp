import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

const login = async () => {
    return (
        <>
      <div className=" py-20 flex bg-white text-black flex-col justify-center items-center gap-10">
     <div className="bg-pink-300 flex flex-col gap-5 p-10 rounded-xl">
     <LoginLink className="btn bg-purple-600 text-white px-10" postLoginRedirectURL="/">Sign in </LoginLink>
     <Link className="btn bg-pink-600 text-white px-10 font-bold" href={`/signup`}>Create New Account</Link>
     </div>
      </div>
      
        
        </>
    )
}
export default login