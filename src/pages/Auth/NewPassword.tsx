import { InputPassword } from "@/features/auth/login/components/InputPassword";
import UseNewPassword from "@/GlobalHooks/UseNewPassword";
import { ToastContainer } from "react-toastify";

export default function NewPassword() {
  const {
    handleChange,
    handleConfirmChange,
    errorPsswd,
    handleSubmit,
    errorNotMatch,
    confirmPsswd,
    psswd
  } = UseNewPassword();


  return (
    <div className="w-full h-[100vh] absolute top-0 ">
      <div className="mt-[5vh] 2xl:mt-[15vh] bg-white pb-24 lg:pb-12 2xl:pb-28 2xl:pt-10 lg:w-[40%] 2xl:w-[35%] lg:mx-auto relative z-10 rounded-lg shadow-xl">
      <ToastContainer />
        <div className="flex flex-col items-center justify-center pt-10 mb-5">
          <img src="src/assets/ZenRH.png" className="w-52 lg:w-44 2xl:w-72" />
        </div>
        <h1 className="text-2xl 2xl:text-3xl text-center mt-[2vh] 2xl:mt-[4vh] mb-5 2xl:mb-24 lg:mb-8 font-medium text-[#333]">
          Create a new password
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputPassword
            error={errorPsswd}
            divclassName="w-[80%] 2xl:w-[65%] mx-auto text-sm border-b-4 border-gray-300"
            inputClassName="h-12 2xl:h-16 border-none lg:text-lg 2xl:text-xl"
            onChange={(e) => handleChange(e)}
            value={psswd}
          />
          <InputPassword
            error={errorNotMatch}
            divclassName="w-[80%] 2xl:w-[65%] mx-auto text-sm border-b-4 border-gray-300  2xl:mt-16 lg:mt-12"
            inputClassName="h-12  2xl:h-16 border-none lg:text-xl"
            label="Confirmer le Mot de passe"
            onChange={(e) => handleConfirmChange(e)}
            onPaste={(e)=>{e.preventDefault()}}
            value={confirmPsswd}
          />
          <div className="flex flex-col items-center justify-center">
            <button
              type="submit"
              disabled={errorPsswd?.type==="error"||errorNotMatch?.type==="error"?true:false}
              className={`${errorPsswd?.type==="error"||errorNotMatch?.type==="error"?"cursor-not-allowed":"cursor-pointer"} text-lg 2xl:text-xl w-[90%] lg:w-[80%] 2xl:w-[65%] text-white bg-[#7BE8D7] hover:bg-[#6cccbe] py-4 lg:py-3 2xl:py-5 mx-auto mt-[5vh] rounded-lg font-bold`}
            >
              Valider
            </button>
          </div>
        </form>
      </div>
      <div className="w-full h-[40vh] bg-gradient-to-b from-[#79C1FF] to-[#ffffff] absolute top-0 z-0"></div>
    </div>
  );
}
