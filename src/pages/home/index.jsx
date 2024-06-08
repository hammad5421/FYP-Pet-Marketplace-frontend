import { BasicLayout } from "../../layouts";

import Hero from "./Hero";
import SellPetBanner from "./Headline";
import FeatureSection from "./FeatureSection";
import Card from "./Cardsection";

import PetCard from "./PetCards";
import FAQ from "./Faq";
import BannerComponent from "./BreedIdentificationBanner";
import PetHealthBanner from "./SymtomTrackerBanner";
import PetAdoptionBanner from "./AdoptPetBanner";

const Home = () => {
  return (
    <>
      <BasicLayout>
        <Hero />
        <SellPetBanner/>
        <FeatureSection/>
        <Card/>
        {/* <AboutComponent/> */}
        <PetCard/>
        <PetAdoptionBanner/>
        <BannerComponent/>
        <PetHealthBanner/>

      </BasicLayout>
    </>
  );
};

export default Home;
