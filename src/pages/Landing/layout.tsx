import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";


function LandingPageLayout()
{
    return(
        <Box width={"100%"} height={"100dvh"}
            display={"flex"}
        >
            <Outlet />
        </Box>
    )
}

export default LandingPageLayout