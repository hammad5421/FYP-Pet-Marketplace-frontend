import Routes from "./Routes";
import Home from "../pages/home";
import Contact from "../pages/contact";
import TravelAgencies from "../pages/travel_agencies";
import NotFound from "../pages/404";
import RegisterCustomer from "../pages/register_customer";
import LoginCustomer from "../pages/login_customer";
import LoginAdmin from "../pages/login_admin";
import Admin from "../pages/Admin/Admin";
import CrudBookings from "../pages/Admin/CrudBookings";
import ReplyQuaries from "../pages/Admin/ReplyQuaries";
import UserDetails from "../pages/Admin/UserDetails";
import UsersTable from "../pages/Admin/UsersTable";

const AppRoutes = [
  {
    path: Routes.home,
    element: <Home />,
  },

  {
    path: Routes.contact,
    element: <Contact />,
  },



  
  {
    path: Routes.travel_agencies,
    element: <TravelAgencies />,
  },
  
  {
    path: Routes.not_found,
    element: <NotFound />,
  },
  {
    path: Routes.customer_sign_in,
    element: <LoginCustomer />,
  },
  {
    path: Routes.customer_sign_up,
    element: <RegisterCustomer />,
  },
  {
    path: Routes.admin_sign_in,
    element: <LoginAdmin />,
  },
  {
    path: Routes.admin_panel,
    element: <Admin />,
  },
  {
    path: Routes.admin_bookings,
    element: <CrudBookings />,
  },
  {
    path: Routes.admin_queries,
    element: <ReplyQuaries />,
  },
  {
    path: Routes.user_details,
    element: <UserDetails />,
  },
  {
    path: Routes.user_tables,
    element: <UsersTable />,
  },

  // {
  //   path: Routes.signin,
  //   element: (
  //     <GlobalRoutes>
  //       <Signin title={'Sign In'} />,
  //     </GlobalRoutes>
  //   ),
  // },
  // {
  //   path: Routes.myAccount,
  //   element: (
  //     <ProtectedRoutes>
  //       <MyAccount />
  //     </ProtectedRoutes>
  //   ),
  // },
];

export default AppRoutes;
