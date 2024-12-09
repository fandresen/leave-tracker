import useHandleLogin from "../hooks/useHandleLogin";
import { InputUserName } from "./InputUserName";
import { InputPassword } from "./InputPassword";
import LoginError from "./LoginError";
import { Link } from "react-router-dom";
import Loading from "@/components/ui/Loading";
// import { useMediaQuery } from "react-responsive";

export default function LoginForm() {
  const { userName, password, handleChange, handleSubmit, error,loading } = useHandleLogin();
  // const desktop = useMediaQuery({ minWidth: 1024 });
  return (
    <>
      <div className="flex justify-between relative z-10">

       <Loading loading={loading}/>
          <div className="flex flex-col items-center lg:w-[380px] mx-auto lg:mt-14 2xl:mt-28 2xl:min-w-[26vw] bg-white lg:pb-14 2xl:pb-16 rounded-tl-[3vw] rounded-br-[3vw] shadow-xl">
            <h1 className="text-5xl lg:text-[40px] 2xl:text-6xl text-center mt-[3vh] lg:mt-8 2xl:mt-[7vh] font-medium text-[#7BE8D7] mb-[4vh]">
              Log in
            </h1>
            <div>
              <div className="h-1 w-28 lg:w-[10vw] bg-[#7BE8D7] mb-10 lg:mb-9 2xl:mb-6"></div>
              <LoginError />
            </div>

            <div className="flex flex-col gap-10 mx-auto 2xl:w-[20vw]">
              <form>
                <InputUserName
                  handleChange={handleChange}
                  value={userName}
                  className={`bg-[#f7f7f78e] 2xl:py-6 px-3 rounded-lg text-xl${
                    error?.type === "error"
                      ? "border-2 border-red-500 rounded-xl"
                      : "border border-gray-300"
                  }`}
                  error={error?.usernameMessage}
                />
                <InputPassword
                  className={`bg-[#f7f7f78e] 2xl:py-6 px-3 rounded-lg text-xl ${
                    error?.type === "error"
                      ? "border-2 border-red-500 rounded-xl"
                      : "border border-gray-300"
                  }`}
                  value={password}
                  onChange={(e) => handleChange(e.target.value, "password")}
                  error={error}
                />
                <button
                  type="submit"
                  className="w-full py-3 2xl:py-4 2xl:text-2xl text-white font-semibold rounded-xl bg-sky-600 hover:bg-sky-700 mt-[5vh] mr-8"
                  onClick={handleSubmit}
                >
                  Log in
                </button>
                <div className="h-1 w-[10vw] bg-[#7BE8D7] mb-2 mt-[2vh] mx-auto"></div>
                <Link to={"/forget_pswd"}>
                  <h2 className="text-sm lg:text-sm text-sky-700 hover:text-sky-400 text-center mt-[1vh]">
                    Mot de passe Oublié?
                  </h2>
                </Link>
              </form>
            </div>
          </div>
        </div>
     
    </>
  );
}
