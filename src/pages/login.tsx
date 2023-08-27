import brandLogo from "@/assets/brand/full_logo.svg";
import LoginForm from "@/components/login/LoginForm";
import { BRAND_NAME } from "@/helpers/constants";
import { useEffect } from "react";

function Login() {
  useEffect(() => {
    document.title = `Login - ${BRAND_NAME}`;
  }, []);

  return (
    <main className="min-w-screen min-h-screen p-8 bg-white md:bg-grey-light flex flex-col md:justify-center">
      <div className="w-full mb-8">
        <img src={brandLogo} className="md:mx-auto" />
      </div>
      <div className="bg-white md:rounded-xl md:shadow-drop-down md:p-12 md:w-120 md:self-center">
        <div className="mt-8 mb-10 flex flex-col gap-3">
          <h2 className="text-grey text-2xl font-bold">Login</h2>
          <p className="text-grey-50 text-base">
            Add your details below to get back into the app
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}

export default Login;
