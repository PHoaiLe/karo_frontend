import { Box, Button, Container, Divider, Stack, TextField } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import RoutePath from "../../../routes/path"
import { Google } from "@mui/icons-material"


function SignInPage()
{

    const [inputEmail, setInputEmail] = useState<string>("")
    const [inputPassword, setInputPassword] = useState<string>("")

    const textFieldVariant = "outlined"

    function handleEmailFieldChange(newText: string)
    {
        setInputEmail(newText)
    }

    function handlePasswordFieldChange(newText: string)
    {
        setInputPassword(newText)
    }

    return(
        <Container maxWidth={"sm"} >
            <Stack width={"100%"} height={"100%"} spacing={2}>
                <TextField variant={textFieldVariant} label={"Email"} value={inputEmail} inputMode={"email"}
                    onChange={(e) => handleEmailFieldChange(e.target.value)}
                />
                <TextField variant={textFieldVariant} label={"Password"} value={inputPassword} type={"password"}
                    onChange={(e) => handlePasswordFieldChange(e.target.value)}
                />

                <Stack display={"flex"} direction={"row"} justifyContent={"center"} alignItems={"center"}>
                    <Link to={RoutePath.FORGOT_PASSWORD}>Forgot password</Link>
                </Stack>

                <Button variant={"contained"}>Sign In</Button>

                <Stack display={"flex"} direction={"row"} justifyContent={"center"} alignItems={"center"}>
                    <Link to={RoutePath.SIGN_UP}>Haven't had account!</Link>
                </Stack>

                <Divider />

                <Button variant={"outlined"}>
                    <Stack width={"100%"} height={"100%"} spacing={1} paddingY={1}
                        display={"flex"} justifyContent={"center"} alignItems={"center"} direction={"row"}
                    >
                        <Google />
                        <Box textTransform={"none"}>Sign in by Google</Box>
                    </Stack>
                </Button>
            </Stack>
        </Container>
    )
}


export default SignInPage