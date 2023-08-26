import { ReactElement } from "react";
import { Navigate, Route, Routes, To } from "react-router-dom";
import Login from "@/pages/login";
import Register from "@/pages/register";
import Home from "@/pages/home";
import NotFound from "@/pages/notFound";

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
  const auth = false; // Auth logic here ...

  return (
    <>
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

        {/* 404 ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRouter;
