import axios from "axios"
import { TypeSignUpRequestBody } from "./dto"


const AuthApis = 
{
    RequestBodyConstructor:
    {
        constructSignUpRequestBody(email: string, password: string)
        {
            const result: TypeSignUpRequestBody = 
            {
                email: email,
                password: password
            }

            return result
        },
    
        constructSignInRequestBody()
        {
    
        }
    },


    async signUp(requestBody: TypeSignUpRequestBody)
    {
        // const result = await axios.post()
    },

    async signIn()
    {

    },

}

export default AuthApis