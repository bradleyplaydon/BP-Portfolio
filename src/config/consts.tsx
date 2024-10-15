import {Home} from "../pages/home/home";

enum PAGE_ROUTES {
    Home = "/",
}

export const routes = [
    {path: PAGE_ROUTES.Home, element: <Home/>},
];
