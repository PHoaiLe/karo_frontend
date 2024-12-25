// auth layout

import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

function AuthLayout()
{
    return(
        <Box width={"100%"} height={"100dvh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Outlet />
        </Box>
    )
}

export default AuthLayout