import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

const SignupPage =async () => {
    return (
        <>
          <RegisterLink postLoginRedirectURL="/login">Sign up</RegisterLink>
        </>
    )
}

export default SignupPage