import { InputPassword } from "@/features/auth/login/components/InputPassword";
import UseNewPassword from "@/GlobalHooks/UseNewPassword";
import { ToastContainer } from "react-toastify";
import { CiLock } from "react-icons/ci";
import { useMediaQuery } from "react-responsive";
import Loading from "@/components/ui/Loading";
export default function NewPassword() {
  const {
    handleChange,
    handleConfirmChange,
    errorPsswd,
    handleSubmit,
    errorNotMatch,
    confirmPsswd,
    psswd,
    loading
  } = UseNewPassword();

  const is2XlScreen = useMediaQuery({ query: "(min-width: 1536px)" });

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">

      <div className="flex flex-col items-center justify-center mb-6 absolute lg:top-3 2xl:top-10 lg:left-16 2xl:left-28">
        <img
          src="src/assets/ZenRH.png"
          className="w-40 lg:w-52 2xl:w-60"
          alt="ZenRH Logo"
        />
      </div>
      <Loading loading={loading}/>
      <div className="bg-white w-full lg:w-[33%] 2xl:w-[30%] lg:px-12 lg:min-h-[70vh] 2xl:min-h-[55vh] pb-5 2xl:pb-10 rounded-lg shadow-xl relative z-10">
        <ToastContainer />
        <div className="flex justify-center">
        <CiLock size={`${is2XlScreen ? 150 : 110}`} className="text-sky-600"/>
        </div>
        <h1 className="text-2xl 2xl:text-3xl text-center lg:mb-5 2xl:mb-10 font-semibold text-gray-700">
          Créer votre Mot de passe
        </h1>

        <form onSubmit={(e) => handleSubmit(e)} className="">
          {/* Password Input */}
          <InputPassword
            error={errorPsswd}
            divclassName="lg:w-full 2xl:w-[90%] mx-auto"
            errorClassName="ml-4 2xl:ml-12"
            inputClassName="py-5 2xl:py-6 2xl:mt-2 bg-white border border-gray-300 text-sm 2xl:text-lg rounded-xl text-gray-700" 
            onChange={(e) => handleChange(e)}
            value={psswd}
          />

          {/* Confirm Password Input */}
          <InputPassword
            error={errorNotMatch}
            divclassName="lg:w-full 2xl:w-[90%] mx-auto"
            inputClassName="py-5 2xl:py-7 2xl:mt-2 bg-white border border-gray-300 text-sm 2xl:text-lg rounded-xl text-gray-700" 
            errorClassName="ml-4 2xl:ml-12"
            label="Confirmer le Mot de passe"
            onChange={(e) => handleConfirmChange(e)}
            onPaste={(e) => {
              e.preventDefault();
            }}
            value={confirmPsswd}
          />

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={
                errorPsswd?.type === "error" || errorNotMatch?.type === "error"
              }
              className={`${
                errorPsswd?.type === "error" || errorNotMatch?.type === "error"
                  ? "cursor-not-allowed bg-sky-300"
                  : "bg-sky-600 hover:bg-sky-500 cursor-pointer"
              } text-white w-full lg:py-3 rounded-lg font-medium text-sm 2xl:text-lg mt-5`}
            >
              Valider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
