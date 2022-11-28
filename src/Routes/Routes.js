import Errorpage from "../components/Errorpage";
import Home from "../components/Home";
import Main from "../components/Layout/Main";
import PrivetRoute from "./PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Login } = require("../components/Login");
const { default: Order } = require("../components/Order");
const { default: Registration } = require("../components/Registration");

export const router = createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:'/registration',element:<Registration></Registration>},
        {path:'/login',element:<Login></Login>},
        {path:'/order',element:<PrivetRoute><Order></Order></PrivetRoute>}
    ]
}
])