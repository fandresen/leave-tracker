import useHandleLogin from "../hooks/useHandleLogin";
import { InputUserName } from "./InputUserName";
import { InputPassword } from "./InputPassword";
import LoginError from "./LoginError";
import { Link } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";

export default function LoginForm() {
  const { userName, password, handleChange, handleSubmit, error } = useHandleLogin();
  // const desktop = useMediaQuery({ minWidth: 1024 });
  return (
    <>
      <div className="flex justify-between relative z-10">

        <div className="flex  mx-auto lg:mr-[15vw] lg:w-[30vw] 2xl:w-[50vw] min-h-[65vh] lg:min-h-[65vh]  2xl:min-h-[70vh] mt-[15vh] lg:mt-[10vh] rounded-br-[3vw] rounded-tl-[4vw] rounded-tr-xl rounded-bl-xl">
          <div className="flex flex-col items-center min-w-[95vw] lg:min-w-[40vw] 2xl:min-w-[26vw] bg-white rounded-tl-[3vw] rounded-br-[3vw] border-[0px] border-[#7BE8D7] shadow-2xl">
            <h1 className="text-5xl lg:text-[4vw] text-center mt-[3vh] lg:mt-[3vh] 2xl:mt-[7vh] font-medium text-[#7BE8D7] mb-[3vh]">
              Log in
            </h1>
            <div>
              <div className="h-1 w-28 lg:w-[10vw] bg-[#7BE8D7] mb-10"></div>
              <LoginError />
            </div>

            <div className="flex flex-col gap-10 mx-auto 2xl:w-[20vw]">
              <form>
                <InputUserName
                  handleChange={handleChange}
                  value={userName}
                  className={`bg-[#ededed8e] 2xl:py-8 px-3 rounded-lg text-xl${
                    error?.type === "error"
                      ? "border-4 border-red-500 rounded-xl"
                      : "border-none"
                  }`}
                  error={error?.usernameMessage}
                />
                <InputPassword
                  className={`bg-[#ededed8e] 2xl:py-8 px-3 rounded-lg text-xl ${
                    error?.type === "error"
                      ? "border-4 border-red-500 rounded-xl"
                      : "border-none"
                  }`}
                  value={password}
                  onChange={(e) => handleChange(e.target.value, "password")}
                  error={error}
                />
                <button
                  type="submit"
                  className="w-full py-3 2xl:py-5 2xl:text-2xl text-white font-semibold rounded-xl bg-[#7BE8D7] hover:bg-[#6ccebf] mt-[5vh] mr-8"
                  onClick={handleSubmit}
                >
                  Log in
                </button>
                <div className="h-1 w-[10vw] bg-[#7BE8D7] mb-2 mt-[2vh] mx-auto"></div>
                <Link to={"/forget_pswd"}>
                  <h2 className="text-sm lg:text-lg text-center mt-[1vh]">
                    Mot de passe Oublié?
                  </h2>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
