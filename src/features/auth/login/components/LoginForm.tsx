import useHandleLogin from "../hooks/useHandleLogin";
import { InputUserName } from "./InputUserName";
import { InputPassword } from "./InputPassword";
import LoginError from "./LoginError";

export default function LoginForm() {
  const { userName, password, handleChange, handleSubmit, error } =
    useHandleLogin();
  return (
    <>
      <div className="flex justify-center w-[50vw] min-h-[100vh] absolute top-0 right-0 lg:relative lg:min-h-[68vh] mx-auto lg:mt-[15vh] shadow-xl shadow-black rounded-br-[3vw] rounded-tl-[4vw] rounded-tr-xl rounded-bl-xl">
        <div className="flex flex-col justify-between bg-black lg:w-[40vw] 2xl:w-[28vw] bg-gradient-to-r from-[#A1B1E5] to-[#7BE8D7] rounded-tl-[3vw] rounded-bl-xl">
          <h1 className="text-white lg:text-2xl lg:text-center 2xl:text-left 2xl:leading-10 lg:px-1 xl:px-2 2xl:text-[4vh] lg:w-full 2xl:w-[85%] mx-auto font-semibold mt-[5vh]">
            Fini les sueurs froides pour demander vos congés !{" "}
          </h1>
          <h1 className="text-[#1D564D] lg:text-xl 2xl:text-[2.5vh] w-[85%] mx-auto font-semibold mt-[-10vh]">
            Avec{" "}
            <span className="lg:text-2xl 2xl:text-[3vh] bg-gradient-to-r from-[#4da844] to-[#3B4669] bg-clip-text text-transparent">
              Leave Tracker
            </span>
            , Un clic suffit pour partir l'esprit tranquille{" "}
          </h1>
          <h2 className="text-[#333333] xl:text-xl mb-[1vh] 2xl:text-2xl text-center">
            Demandez, partez, relaxez !
          </h2>
        </div>
        <div className="flex flex-col items-center lg:w-[45vw] 2xl:w-[26vw] bg-white rounded-br-[3vw] rounded-tr-xl ">
          <h1 className="text-[4vw] text-center xl:mt-3 2xl:mt-[4.5vh] font-medium text-[#7BE8D7] xl:mb-2 2xl:mb-[3vh]">
            Log in
          </h1>
          <div>
            <div className="h-1 w-[10vw] bg-[#7BE8D7] mb-5"></div>
            <LoginError />
          </div>

          <div className="flex flex-col gap-10 mx-auto">
            <form>
              <InputUserName
                handleChange={handleChange}
                value={userName}
                className={`bg-[#EDEDED] lg:py-5 2xl:py-8 px-3 rounded-lg text-xl ${
                  error?.type==='error'? "border-4 border-red-500 rounded-xl" : "border-none"
                }`}
              />
              <InputPassword
                className={`bg-[#EDEDED] lg:py-5 2xl:py-8 px-3 w-[21vw] rounded-lg text-xl ${
                  error?.type==='error'? "border-4 border-red-500 rounded-xl" : "border-none"
                }`}
                value={password}
                onChange={(e) => handleChange(e.target.value, "password")}
                error={error}
              />
              <button
                type="submit"
                className="w-full lg:py-3 2xl:py-5 2xl:text-2xl text-white font-semibold rounded-xl bg-[#7BE8D7] hover:bg-[#6ccebf] mt-[5vh] mr-8"
                onClick={handleSubmit}
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
