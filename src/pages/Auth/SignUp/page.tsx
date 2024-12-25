import { Button, Container, Divider, Stack, TextField } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import RoutePath from "../../../routes/path"
import { StringTool } from "../../../utils/StringTool"
import AuthApis from "../../../apis/Auth"


function SignUpPage()
{
    const [inputEmail, setInputEmail] = useState<string>("")
    const [inputPassword, setInputPassword] = useState<string>("")
    const [inputConfirmPassword, setInputConfirmPassword] = useState<string>("")

    const [invalidEmailFormat, setInvalidEmailFormat] = useState<boolean>(false)
    const [notSimilarConfirmPassword, setNotSimilarConfirmPassword] = useState<boolean>(false)

    const textFieldVariant = "outlined"
    const minimumPasswordLength = 8

    function handleEmailFieldChange(newText: string)
    {
        setInputEmail(newText)
    }

    function handlePasswordFieldChange(newText: string)
    {
        setInputPassword(newText)
    }

    function hanldeConfirmPasswordChange(newText: string)
    {
        setInputConfirmPassword(newText)
    }

    function checkMailInput()
    {
        const checkedValue = StringTool.isValidEmailFormat(inputEmail)

        if(checkedValue === true || inputEmail.length === 0)
        {
            setInvalidEmailFormat(false)
        }
        else
        {
            setInvalidEmailFormat(true)
        }
    }

    function checkSimilarConfirmPassword()
    {
        const checkedValue = inputConfirmPassword === inputPassword

        if(inputConfirmPassword.length === 0 || checkedValue == true)
        {
            setNotSimilarConfirmPassword(false)
        }
        else
        {
            setNotSimilarConfirmPassword(true)
        }
    }

    async function signUp()
    {
        if(invalidEmailFormat || notSimilarConfirmPassword)
        {
            return
        }
        else if(inputEmail.length === 0 || inputPassword.length < minimumPasswordLength)
        {
            return
        }
        
        const requestBody = AuthApis.RequestBodyConstructor.constructSignUpRequestBody(inputEmail, inputPassword)

        await AuthApis.signUp(requestBody)
    }

    const textHelperOfEmailField = (invalidEmailFormat === true) ? "Invalid email format!" : undefined
    const textHelperOfConfirmPasswordField = (notSimilarConfirmPassword === true) ? "Not similar password" : undefined

    return(
        <Container maxWidth={"sm"} >
            <Stack width={"100%"} height={"100%"} spacing={2}>
                <TextField variant={textFieldVariant} label={"Email"} value={inputEmail} inputMode={"email"}
                    error={invalidEmailFormat}
                    onChange={(e) => handleEmailFieldChange(e.target.value)}
                    onPointerLeave={checkMailInput}
                    helperText={textHelperOfEmailField}
                />
                <TextField variant={textFieldVariant} label={"Password"} value={inputPassword} type={"password"}
                    onChange={(e) => handlePasswordFieldChange(e.target.value)}
                />

                <TextField variant={textFieldVariant} label={"Confirm password"} value={inputConfirmPassword} type={"password"}
                    error={notSimilarConfirmPassword}
                    onChange={(e) => hanldeConfirmPasswordChange(e.target.value)}
                    onPointerLeave={checkSimilarConfirmPassword}
                    helperText={textHelperOfConfirmPasswordField}
                />

                <Button variant={"contained"}
                    onClick={signUp}
                >
                    Sign Up
                </Button>

                <Stack display={"flex"} direction={"row"} justifyContent={"center"} alignItems={"center"}>
                    <Link to={RoutePath.SIGN_IN}>Have already had account!</Link>
                </Stack>

                <Divider />
            </Stack>
        </Container>
    )
}


export default SignUpPage