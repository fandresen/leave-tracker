import useHandleForgotPassword from "@/GlobalHooks/useHandleForgotPassword";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function ForgetPasswprd() {
  const {handleChange,handleSubmit,email}=useHandleForgotPassword();
  return (
    <>
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#79C1FF] to-[#ffffff]">
          <ToastContainer/>
          <div className="bg-white p-8 rounded-xl shadow-md 2xl:min-h-[55vh] 2xl:pt-10 px-32 2xl:w-[40vw]">
            <h2 className="2xl:text-[5vh] text-center font-semibold mb-8 text-[#333]">Mot de passe oublié?</h2>
            <p className="mb-10 2xl:text-xl text-[#5c5c5c] w-[95%] mx-auto">
            Nous vous enverrons un e-mail avec les instructions pour réinitialiser votre mot de passe
            </p>
            <form onSubmit={(e)=>handleSubmit(e)}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block 2xl:text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e)=>handleChange(e)}
                  value={email}
                  className="mt-1 mb-8 block w-full px-3 border-2 2xl:py-4 text-2xl border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#65c2b4] focus:border-[#65c2b4] sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#7BE8D7] hover:bg-[#65c2b4] text-white py-4 2xl:text-xl rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#65c2b4]"
              >
                Reset Password
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-lg text-gray-700">
                Remember your password?{" "}
                <Link
                  to="/login"
                  className="text-[#53b6a7] text-xl hover:text-[#26635a]"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
    </>
  );
}
