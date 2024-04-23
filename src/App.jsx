import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import AppRoutes from "./router";
import { keys } from "./common";
import { AuthContext, LoaderContext } from "./context";
import { Loader, ReactToastifyContainer } from "./components";
// import LoadingBar from "react-top-loading-bar";

function App() {
  const router = createBrowserRouter(AppRoutes);
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem(keys.qaswa_user);
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem(keys.qaswa_user);
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <>
      <LoaderContext.Provider value={{ loading, setLoading }}>
        <Loader visible={loading} />
        {/* <LoadingBar
          height="3px"
          color="#c8aa00"
          progress={loading}
          onLoaderFinished={() => setProgress(0)}
        /> */}
        <ReactToastifyContainer />

        <AuthContext.Provider
          value={{ setToken, setCurrentUser, token, currentUser }}
        >
          <RouterProvider router={router} />
        </AuthContext.Provider>
      </LoaderContext.Provider>
    </>
  );
}

export default App;
