import React from "react";
import HeroImage from "../../Assets/HeroImage.png";
import "./index.css";
import { ButtonPlain } from "../../components";
import { useNavigate } from "react-router-dom";
import Routes from "../../router/Routes";
import {useTranslation} from "react-i18next";

const Hero = () => {
  const {t}= useTranslation();
  const handleClick = (e)=>{
    i18n.changeLanguage(e.target.value)
  }
  const navigate = useNavigate();
  return (
    <div>
      <section className="heroBg text-gray-600 body-font relative h-92">
        <div className="overlay"> </div>

        <div className="z-10 relative">
          <div className="container mx-auto flex px-6 py-5 md:flex-row flex-col items-center">
            <div className="hidden lg:block lg:max-w-xl mx-7 lg:w-full md:w-1/2 w-5/2">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={HeroImage}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
              <p className="mb-4 text-white leading-relaxed">
                {t('welcome')} 
              </p>
              <h1 className="title-font text-white sm:text-5xl text-4xl mb-6 font-medium ">
                 {t('hajj')}
                <br className="hidden lg:inline-block" />
                 {t('travelAgency')}

              </h1>
              <p className="mb-8 leading-relaxed text-white">
              {t('homep1')}
             

                
              </p>
              <div className="flex justify-center">
                <ButtonPlain
                  text={t('homebtn')}
                  onClick={() => navigate(Routes.trips)}
                  width="w-48"
                  borderRadius="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
