import React from "react";
import { ButtonPlain } from "../../components";
import { BasicLayout } from "../../layouts";
import { useNavigate } from "react-router-dom";
import Routes from "../../router/Routes";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <BasicLayout>
      <section className="h-[80vh] flex items-center justify-center dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 ">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <div>
              <ButtonPlain
                text="Back To Home Page"
                width="w-60"
                classes="mx-auto"
                onClick={() => navigate(Routes.home)}
                borderRadius="rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </BasicLayout>
  );
}
