import useHandleLogin from "../hooks/useHandleLogin";
import { InputUserName } from "./InputUserName";
import { InputPassword } from "./InputPassword";
import LoginError from "./LoginError";
import { AnimatedGridPatternDemo } from "@/components/magicui/animatedGridPatternBG";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function LoginForm() {
  const { userName, password, handleChange, handleSubmit, error } =
    useHandleLogin();
  const desktop = useMediaQuery({ minWidth: 1024 });
  return (
    <>
      <div className="flex justify-between">
        {desktop && (
          <AnimatedGridPatternDemo>
            <div>
              <h1 className="text-white lg:text-4xl 2xl:text-[6vh] 2xl:leading-tight lg:px-1 xl:px-2 w-[90%] mx-auto font-semibold mt-[30vh]">
                Fini les sueurs froides pour demander vos congés !
              </h1>
              <h1 className="text-[#7BE8D7] lg:text-3xl 2xl:text-[5vh] 2xl:leading-[6vh] w-[85%] mx-auto font-semibold mt-[2vh]">
                Avec{" "}
                <span className="lg:text-4xl 2xl:text-[5vh] bg-gradient-to-r from-[#4da844] to-[#ffffff] bg-clip-text text-transparent">
                ZenRH
                </span>
                , Un clic suffit pour partir l'esprit tranquille{" "}
              </h1>
              <h2 className="text-[#ffffff] xl:text-xl mb-[1vh] 2xl:text-2xl text-center lg:mt-[20vh] 2xl:mt-[25vh]">
                Demandez, partez, relaxez !
              </h2>
            </div>
          </AnimatedGridPatternDemo>
        )}

        <div className="flex  mx-auto lg:mr-[15vw] lg:w-[30vw] 2xl:w-[50vw] min-h-[60vh] lg:min-h-[65vh] 2xl:min-h-[60vh] mt-[15vh] lg:mt-[10vh] rounded-br-[3vw] rounded-tl-[4vw] rounded-tr-xl rounded-bl-xl">
          <div className="flex flex-col items-center min-w-[95vw] lg:min-w-[40vw] 2xl:min-w-[26vw] bg-white rounded-tl-[3vw] rounded-br-[3vw]">
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
                  className={`bg-[#EDEDED] py-5 2xl:py-8 px-3 rounded-lg text-xl ${
                    error?.type === "error"
                      ? "border-4 border-red-500 rounded-xl"
                      : "border-none"
                  }`}
                  error={error?.usernameMessage}
                />
                <InputPassword
                  className={`bg-[#EDEDED] py-5 2xl:py-8 px-3 rounded-lg text-xl ${
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
