import Login from "../pages/Login";
import Mangas from "../pages/Mangas";

interface IRoute {
  path: string;
  element: JSX.Element;
}

export const privateRoutes:IRoute[] = [
  {path:'/', element:<Mangas/>}
];

export const publicRoutes: IRoute[] = [
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
];
