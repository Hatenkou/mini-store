import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utilis/consts";
import Admin from "./components/pages/Admin";
import Auth from "./components/pages/Auth";
import Basket from "./components/pages/Basket"
import DevicePage from "./components/pages/DevicePage"
import Shop from "./components/pages/Shop"


export const authRoutes = [
   {
      path: ADMIN_ROUTE,
      Component: Admin
   },
   {
      path: BASKET_ROUTE,
      Component: Basket
   },

];
export const publicRoutes = [
   {
      path: LOGIN_ROUTE,
      Component: Auth
   },
   {
      path: SHOP_ROUTE,
      Component: Shop
   },

   {
      path: REGISTRATION_ROUTE,
      Component: Auth
   },
   {
      path: DEVICE_ROUTE + '/:id',
      Component: DevicePage
   },

];