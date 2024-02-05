import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import NotFound from "../pages/404/NotFound"
import Layout from "../layouts/Layout"


export const CELIA_DASHBOARD_ROUTE = "/user/dashboard"
export const  router = createBrowserRouter ([
        {
            element:<Layout />,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:CELIA_DASHBOARD_ROUTE,
                    element:<p>Hy Celia</p>
                },
                {
                    path:'/*',
                    element:<NotFound/>
                },

            ]
        }
])
