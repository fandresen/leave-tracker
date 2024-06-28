import useHandleLogin from "../hooks/useHandleLogin";
import { InputUserName} from "./InputEmail";
import { InputPassword } from "./InputPassword";
import LoginError from "./LoginError";

export default function LoginForm() {
  const { userName, password, handleChange, handleSubmit } = useHandleLogin();
  return (
    <>
      <div className="w-full xl:w-[56vw] 2xl:w-[45vw] bg-gradient-to-r from-[#7BE9D7] to-[#A1B0E5] min-h-[100vh] absolute top-0 right-0 xl:relative xl:min-h-[45vh] mx-auto xl:mt-[15vh] pt-[5vh] pb-[7vh] rounded-xl">
        <h1 className="text-6xl text-center font-semibold text-textColor mb-8">
          Log in
        </h1>
        <div className="relative">
          <LoginError />
        </div>

        <div className="flex flex-col gap-10 xl:w-[50%] 2xl:w-[45%] mx-auto">
          <form>
            <InputUserName handleChange={handleChange} value={userName} />
            <InputPassword
              className="bg-white border-none py-6 px-3 w-[80vw] xl:w-[30vw] 2xl:w-[20vw] rounded-xl text-xl"
              value={password}
              onChange={(e) => handleChange(e.target.value, "password")}
            />
            <button
              type="submit"
              className="w-[45%] py-3 text-white font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 mt-5 mr-8"
              onClick={handleSubmit}
            >
              Log in
            </button>
            <a href="#" className="text-sm text-black hover:text-blue-700">
              Forgot password?
            </a>
          </form>
        </div>
      </div>
    </>
  );
}
