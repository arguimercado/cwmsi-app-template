import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  
   
    layout("pages/auth/layout.tsx", [
        route("login", "pages/auth/login.tsx"),
    ]),

    layout("pages/main/layout.tsx", [
        index("pages/main/dashboards/dashboard.tsx"),
        
    ]),

] satisfies RouteConfig;
