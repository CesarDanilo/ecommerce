import Index from "./views/Index.js";
import Profile from "./views/examples/Profile.js";
// import Maps from "./views/examples/Maps.js";
import Register from "./views/examples/Register.js";
import Login from "./views/examples/Login.js";
import Tables from "./views/examples/Tables.js";
import Icons from "./views/examples/Icons";
// import Produtos from "./views/Produtos/Table/index.jsx";
// import CadastroProdutos from "./views/Produtos/Cadastro/index.jsx";
import Produtos from "./views/Produtos/index.jsx";
import Home from "../../views/Home";
import Usuarios from "./views/Usuarios/index.jsx";

var routes = [
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: <Index />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
  {
    path: "/produtos",
    name: "Produtos",
    icon: "ni ni-planet text-blue",
    component: <Produtos />,
    layout: "/admin",
  },

  {
    path: "/usuarios-cadastrados",
    name: "Usuarios Cadastrados",
    icon: "ni ni-single-02 text-yellow",
    component: <Usuarios />,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Tables />,
  //   layout: "/admin",
  // },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-circle-08 text-pink",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "register",
    icon: "ni ni-key-25 text-info",
    component: <Register />,
    layout: "/auth",
  },
  // {
  //   path: "",
  //   name: "Logout",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: <Logout status={true}/>,
  //   layout: "/",
  // },
  {
    path: "",
    name: "Sair",
    icon: "ni ni-planet text-blue",
    component: <Home />,
    layout: "/",
  },
];
export default routes;
