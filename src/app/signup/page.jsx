import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

const SignupPage =async () => {
    return (
        <>
         <div className=" py-20 flex bg-white text-black flex-col justify-center items-center gap-10">

          <RegisterLink className="btn bg-purple-500 text-white/90 px-4" postLoginRedirectURL="/login">Sign up</RegisterLink>
         </div>
        </>
    )
}

export default SignupPage