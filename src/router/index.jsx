import Routes from "./Routes";
import Home from "../pages/home";
import NotFound from "../pages/404";
import FAQ from "../pages/FAQ/index";
import About from "../pages/Aboutus/index";
import FindPets from "../pages/FindPet";
import CreateListings from "../pages/CreateListing";
import AdoptPets from "../pages/AdoptPet/index.jsx";
import Logins from "../pages/Login/BuyerLogin/index.jsx";
import Profiles from "../pages/Profile";
import BreedIdentifications from "../pages/BreedIdentification";
import HealthRecomendations from "../pages/HealthRecomendations";
import Validations from "../pages/Validation";
import CookiesAndPolicies from "../pages/CookiesAndPolicy";
import TermsOfServices from "../pages/TermsOfServices";
import Detail from "../pages/PetDetails";
import AddAdoptPets from "../pages/AddAdiptionPet/index.jsx";
import AdoptPetDetails from "../pages/AdoptPetDetails/PetDetails.jsx";
import Selection from "../pages/Register/Select registration page/index.jsx";
import BuyerRegistration from "../pages/Register/BuyerRegistraion/index.jsx";
import SellerRegistration from "../pages/Register/Seller Registration/index.jsx";
import SelectLogin from "../pages/Login/SelectLogin/Select registration page/index.jsx";
import BuyerLogin from "../pages/Login/BuyerLogin/index.jsx";
import SellerLogin from "../pages/Login/SellerLogin/index.jsx";

const AppRoutes = [
  {
    path: Routes.home,
    element: <Home />,
  },
   {
    path: Routes.faq,
    element: <FAQ />,
  },
     {
    path: Routes.about,
    element: <About/>,
  },
  
  {
    path: Routes.not_found,
    element: <NotFound />,
  },
  {
    path: Routes.findpet,
    element: <FindPets />,
  },
  {
    path: Routes.create_Listing,
    element: <CreateListings />,
  },
  {
    path: Routes.adopt_pet,
    element: <AdoptPets/>,
  },
  {
    path: Routes.login,
    element: <SelectLogin/>,
  },
  {
    path: Routes.register,
    element: <Selection/>,
  },
  {
    path: Routes.profile,
    element: <Profiles/>,
  },
    {
    path: Routes.breed_identification,
    element: <BreedIdentifications/>,
  },  
  {
    path: Routes.symptom_tracker,
    element: <HealthRecomendations/>,
  },


  {
    path: Routes.validation,
    element: <Validations/>,
  },
  
  {
    path: Routes.cookies_and_policy,
    element: <CookiesAndPolicies/>,
  },

  {
    path: Routes.terms_of_services,
    element: <TermsOfServices/>,
  },
  {
    path: Routes.pet_details,
    element: <Detail/>,
  },
  {
    path: Routes.adoptpet_details,
    element: <AdoptPetDetails/>,
  },
  {
    path: Routes.create_AdoptionListing,
    element: <AddAdoptPets/>,
  },
   {
    path: Routes.buyer_register,
    element: <BuyerRegistration/>,
  },
   {
    path: Routes.seller_register,
    element: <SellerRegistration/>,
  },
   {
    path: Routes.login_seller,
    element: <BuyerLogin/>,
  },
   {
    path: Routes.login_buyer,
    element: <SellerLogin/>,
  }
  
  
];

export default AppRoutes;
