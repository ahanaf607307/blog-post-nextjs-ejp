import { getKindeServerSession, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
const profile = async() => {
    const {isAuthenticated} = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    return (
        <div className="bg-white/90 flex flex-col justify-center items-center py-32">
            {
                isUserAuthenticated ? <h1 className='text-3xl text-purple-600 font-bold text-center  '>"Welcome to your profile!" </h1> :   <>
                <h1 className="text-2xl my-14 text-purple-500 font-semibold">Login to see profile </h1>
                <LoginLink className="btn bg-purple-600 text-white px-10" postLoginRedirectURL="/">Sign in</LoginLink>
                </>
            }
            
        </div>
    );
};

export default profile;
