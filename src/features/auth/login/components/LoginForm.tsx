import useHandleLogin from "../hooks/useHandleLogin";
import { InputUserName } from "./InputUserName";
import { InputPassword } from "./InputPassword";
import LoginError from "./LoginError";
import { AnimatedGridPatternDemo } from "@/components/magicui/animatedGridPatternBG";

export default function LoginForm() {
  const { userName, password, handleChange, handleSubmit, error } =
    useHandleLogin();
  return (
    <>
   
      <div className="flex justify-between">
      <AnimatedGridPatternDemo>
        <div>
          <h1 className="text-white lg:text-4xl 2xl:text-[6vh] 2xl:leading-tight lg:px-1 xl:px-2 w-[90%] mx-auto font-semibold mt-[30vh]">
            Fini les sueurs froides pour demander vos congés !
          </h1>
          <h1 className="text-[#7BE8D7] lg:text-3xl 2xl:text-[5vh] 2xl:leading-[6vh] w-[85%] mx-auto font-semibold mt-[2vh]">
            Avec{" "}
            <span className="lg:text-4xl 2xl:text-[5vh] bg-gradient-to-r from-[#4da844] to-[#ffffff] bg-clip-text text-transparent">
              Leave Tracker
            </span>
            , Un clic suffit pour partir l'esprit tranquille{" "}
          </h1>
          <h2 className="text-[#ffffff] xl:text-xl mb-[1vh] 2xl:text-2xl text-center lg:mt-[20vh] 2xl:mt-[25vh]">
            Demandez, partez, relaxez !
          </h2>
        </div>
        </AnimatedGridPatternDemo>

        <div className="flex justify-end mr-[15vw] lg:w-[30vw] 2xl:w-[50vw] min-h-[100vh] absolute top-0 right-0 lg:relative lg:min-h-[80vh] 2xl:min-h-[65vh]  lg:mt-[10vh] rounded-br-[3vw] rounded-tl-[4vw] rounded-tr-xl rounded-bl-xl">
          <div className="flex flex-col items-center lg:w-[45vw] 2xl:w-[26vw] bg-white rounded-tl-[3vw] rounded-br-[3vw]">
            <h1 className="text-[4vw] text-center lg:mt-[3vh] 2xl:mt-[7vh] font-medium text-[#7BE8D7] mb-[3vh]">
              Log in
            </h1>
            <div>
              <div className="h-1 w-[10vw] bg-[#7BE8D7] mb-10"></div>
              <LoginError />
            </div>

            <div className="flex flex-col gap-10 mx-auto">
              <form>
                <InputUserName
                  handleChange={handleChange}
                  value={userName}
                  className={`bg-[#EDEDED] lg:py-5 2xl:py-8 px-3 rounded-lg text-xl ${
                    error?.type === "error"
                      ? "border-4 border-red-500 rounded-xl"
                      : "border-none"
                  }`}
                />
                <InputPassword
                  className={`bg-[#EDEDED] lg:py-5 2xl:py-8 px-3 w-[21vw] rounded-lg text-xl ${
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
                  className="w-full lg:py-3 2xl:py-5 2xl:text-2xl text-white font-semibold rounded-xl bg-[#7BE8D7] hover:bg-[#6ccebf] mt-[5vh] mr-8"
                  onClick={handleSubmit}
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
