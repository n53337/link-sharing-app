import { ReactElement, useEffect, useState } from "react";
import { Navigate, Route, Routes, To } from "react-router-dom";
import Login from "@/pages/login";
import Register from "@/pages/register";
import Home from "@/pages/home";
import NotFound from "@/pages/notFound";
import Preview from "@/pages/preview";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/services/firebase";
import { AppSpinner } from "@/ui/AppSpinner";

interface CustomRouteProps {
  isAuthenticated: boolean;
  redirect: To;
  component: ReactElement;
}
export const CustomRoute = ({
  isAuthenticated,
  redirect,
  component,
}: CustomRouteProps) =>
  isAuthenticated ? component : <Navigate to={redirect} />;

function AppRouter() {
  const [auth, setAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      console.log("AUTH STATE CHANGED", user);
      setLoading(false);
      user ? setAuth(true) : setAuth(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {loading ? (
        <AppSpinner loading={loading} />
      ) : (
        <Routes>
          {/* --- AUTH ROUTES --- */}

          <Route
            path="/login"
            element={
              <CustomRoute
                isAuthenticated={!auth}
                redirect="/"
                component={<Login />}
              />
            }
          />

          <Route
            path="/register"
            element={
              <CustomRoute
                isAuthenticated={!auth}
                redirect="/"
                component={<Register />}
              />
            }
          />

          {/* --- APP ROUTES --- */}

          <Route
            path="/"
            element={
              <CustomRoute
                isAuthenticated={auth}
                redirect="/login"
                component={<Home />}
              />
            }
          />

          <Route
            path="/preview/:username"
            element={
              <CustomRoute
                isAuthenticated={true}
                redirect="/login"
                component={<Preview />}
              />
            }
          />

          {/* 404 ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}

export default AppRouter;
