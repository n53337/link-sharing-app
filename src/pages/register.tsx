import brandLogo from "@/assets/brand/full_logo.svg";
import RegisterForm from "@/components/register/RegisterForm";
import { BRAND_NAME } from "@/helpers/constants";
import { useEffect } from "react";

function Register() {
  useEffect(() => {
    document.title = `Register - ${BRAND_NAME}`;
  }, []);

  return (
    <main className="min-w-screen min-h-screen p-8 bg-white md:bg-grey-light flex flex-col md:justify-center">
      <div className="w-full mb-8">
        <img src={brandLogo} className="md:mx-auto" />
      </div>
      <div className="bg-white md:rounded-xl md:shadow-drop-down md:p-12 md:w-120 md:self-center">
        <div className="mt-8 mb-10 flex flex-col gap-3">
          <h2 className="text-grey text-2xl font-bold">Create account</h2>
          <p className="text-grey-50 text-base">
            Let’s get you started sharing your links!
          </p>
        </div>
        <RegisterForm />
      </div>
    </main>
  );
}

export default Register;
