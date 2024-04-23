import { BasicLayout } from "../../layouts";

import Hero from "./Hero";
import Testimonial from "./Testimonial";
import { Packages, PricingTable } from "../../components";

const Home = () => {
  return (
    <>
      <BasicLayout>
        <Hero />
        <Packages />
        <PricingTable />
        <Testimonial />
      </BasicLayout>
    </>
  );
};

export default Home;
