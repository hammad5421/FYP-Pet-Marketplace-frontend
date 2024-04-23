import React from "react";
import ContactSection from "./ContactSection";
import { BasicLayout } from "../../layouts";
import TitleBar from "../../components/TitleBar";

export default function Contact() {
  return (
    <>
      <BasicLayout>
        <TitleBar
          title={"Contact Us"}
          description={
            "Start the conversation to established good relationship and business"
          }
        />
        <ContactSection />
      </BasicLayout>
    </>
  );
}
