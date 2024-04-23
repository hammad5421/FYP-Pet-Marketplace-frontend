import React from "react";
import IconPlain from "./IconPlain";
import { Icons } from "../common";
import {useTranslation} from "react-i18next";


export default function Packages() {
  const {t}= useTranslation();
  const handleClick = (e)=>{
    i18n.changeLanguage(e.target.value)
  }
  return (
    <>
      {/* <!-- ====== Blog Section Start --> */}
      <section className="pt-5 pb-10 lg:pt-5 lg:pb-5 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 md:gap-10 px-5">
            {/* Card Begin */}
            <div className="bg-gray-100 rounded-lg col-span-12 lg:col-span-3 md:col-span-6 sm:col-span-12">
              <div className="w-full">
                <div className="overflow-hidden rounded">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div className="px-4">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="inline-block my-4 text-xl font-semibold text-dark  hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      {t('packages')}
                    </a>
                  </h3>
                  <p className="text-base text-body-color flex">
                    <div className="mx-4 flex">
                      <IconPlain Color="bg-green-300">
                        <Icons.FA6.FaBuilding color="#1b7d75" />
                      </IconPlain>
                    </div>
                    Hayat Regency ( 14 nights ) 
                  </p>
                  <hr className="m-3 divide-red-500" />
                  <p className="text-base text-body-color flex">
                    <div className="mx-4 flex">
                      <IconPlain Color="bg-green-300">
                        <Icons.FA6.FaPlane color="#1b7d75" />
                      </IconPlain>
                    </div>
                    Saudi Airlines
                  </p>
                  <hr className="m-3" />
                  <p className="text-base text-body-color flex">
                    <div className="mx-4 flex">
                      <IconPlain Color="bg-green-300">
                        <Icons.FA6.FaTags color="#1b7d75" />
                      </IconPlain>
                    </div>
                    $2000
                  </p>
                  <hr className="m-3" />
                  <button
                    type="button"
                    className="my-3 px-5 py-2.5 text-sm font-medium text-white bg-btn-color hover:bg-btn-hover focus:ring-4 focus:outline-none focus:ring-btn-color rounded-lg text-center   "
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== Blog Section End --> */}
    </>
  );
}
