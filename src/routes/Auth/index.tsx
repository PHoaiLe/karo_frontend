import { Route } from "react-router-dom";
import AuthLayout from "../../pages/Auth/layout";
import SignInPage from "../../pages/Auth/SignIn/page";
import SignUpPage from "../../pages/Auth/SignUp/page";


function AuthRouter()
{
    return(
        <Route path={"auth"} element={<AuthLayout />}>
            <Route index element={<SignInPage />}/>
            <Route index path="sign-in" element={<SignInPage />}/>
            <Route path="sign-up" element={<SignUpPage />} />
        </Route>
    )
}

export default AuthRouter