import { BasicLayout } from "../../layouts";

import Hero from "./Hero";
import SellPetBanner from "./Headline";
import FeatureSection from "./FeatureSection";
import Card from "./Cardsection";
import AboutComponent from "./About";
import AboutHome from "./Contact";
import PetCard from "./PetCards";
import FAQ from "./Faq";

const Home = () => {
  return (
    <>
      <BasicLayout>
        <Hero />
        <SellPetBanner/>
        <FeatureSection/>
        <Card/>
        <AboutComponent/>
        <AboutHome/>
        <PetCard/>
        

      </BasicLayout>
    </>
  );
};

export default Home;
