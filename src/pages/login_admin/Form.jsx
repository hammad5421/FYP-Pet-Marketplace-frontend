import { React, useState } from "react";
import { network, Url } from "../../config";
import { ButtonPlain, SuccessMessage, WarningMessage } from "../../components";
import { useAuth } from "../../hooks";
import { useNavigate } from "react-router";
import Routes from "../../router/Routes";

export default function Form() {
  const { initializeUser } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await network.post(Url.adminSignIn, data);

    if (!res.ok) return WarningMessage(res.data);
    setIsLoading(true);
    initializeUser(res.data);

    SuccessMessage("Logged In");
    setData({
      email: "",
      password: "",
    });
    setIsLoading(false);
    navigate(Routes.home);
  };
  return (
    <>
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Qaswa
          </a>
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={onChange}
                    value={data.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  -gray-600 "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={onChange}
                    value={data["password"]}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  -gray-600 "
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  gray-600 "
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-gray-500 ">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline "
                  >
                    Forgot password?
                  </a>
                </div>
                <ButtonPlain
                  text="Login in"
                  borderRadius="rounded-full"
                  onClick={onSubmit}
                  value={data["email"]}
                  isLoading={isLoading}
                  width="w-44"
                  isDisabled={isLoading}
                  type="submit"
                />
                <p className="text-sm font-light text-gray-500 ">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
