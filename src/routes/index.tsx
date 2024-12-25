import { BrowserRouter, Routes } from "react-router-dom"
import AuthRouter from "./Auth"
import LandingPageRouter from "./Landing"


function RootRouter()
{
    return(
        <BrowserRouter>
            <Routes>
                {LandingPageRouter()}
                {AuthRouter()}
            </Routes>
        </BrowserRouter>
    )
}


export default RootRouter