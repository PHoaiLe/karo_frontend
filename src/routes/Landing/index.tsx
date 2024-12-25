import { Route } from "react-router-dom";
import LandingPage from "../../pages/Landing/page";
import LandingPageLayout from "../../pages/Landing/layout";


function LandingPageRouter()
{
    return(
        <Route path="/" element={<LandingPageLayout />}>
            <Route index element={<LandingPage />} />
        </Route>
    )
}

export default LandingPageRouter