import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProfileList from "../pages/ProfileList";
import ProfileView from "../pages/ProfileView";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <ProfileList />
            },
            {
                path: "/profile-view/:id",
                element: <ProfileView />
            }
        ]
    }
])


export default routes;