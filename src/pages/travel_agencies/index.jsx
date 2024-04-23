import React from "react";
import { BasicLayout } from "../../layouts";
import TitleBar from "../../components/TitleBar";

const TravelAgencies = () => {
  return (
    <div>
      <BasicLayout>
        <TitleBar
          title={"Travle Agencies"}
          description={
            "Find the best travel agency to make your trip more joyful."
          }
        />
      </BasicLayout>
    </div>
  );
};

export default TravelAgencies;
