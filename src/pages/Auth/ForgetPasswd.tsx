import useHandleForgotPassword from "@/GlobalHooks/useHandleForgotPassword";
import { MdLockReset } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useMediaQuery } from "react-responsive";
import Loading from "@/components/ui/Loading";

export default function ForgetPassword() {
  const { handleChange, handleSubmit, email, noAcount, loading } =
    useHandleForgotPassword();
  const is2XlScreen = useMediaQuery({ query: "(min-width: 1536px)" });

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center mb-6 absolute lg:top-5 2xl:top-10 lg:left-16 2xl:left-28">
        <img
          src="src/assets/ZenRH.png"
          className="w-40 lg:w-48 2xl:w-60"
          alt="ZenRH Logo"
        />
      </div>

      <Loading loading={loading} />

      <ToastContainer />
      <div className="bg-white lg:px-8 2xl:px-12 lg:py-5 2xl:py-10 rounded-xl shadow-xl lg:w-[32%] 2xl:w-[27%]">
        <div className="flex justify-center">
          <MdLockReset
            size={`${is2XlScreen ? 150 : 110}`}
            className="text-sky-700"
          />
        </div>

        {/* Titre */}
        <h2 className="text-2xl lg:text-2xl 2xl:text-3xl text-center font-medium lg:mb-2 2xl:mb-4 text-gray-700">
          Mot de passe oublié?
        </h2>

        {/* Description */}
        <p className="text-base lg:text-[13px] 2xl:text-sm text-gray-600 lg:mb-7 2xl:mb-5 text-center leading-4">
          Nous vous enverrons un e-mail avec les instructions pour réinitialiser
          votre mot de passe.
        </p>

        {/* Formulaire */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="lg:mb-4 2xl:mb-5">
            {/* <label
              htmlFor="email"
              className="block text-sm lg:text-base font-medium text-gray-700 mb-2"
            >
              Email
            </label> */}
            <input
              type="email"
              id="email"
              onChange={handleChange}
              value={email}
              className="block w-[95%] mx-auto lg:h-12 px-4 lg:py-4 text-base lg:text-sm border border-gray-300 rounded-lg focus:ring-sky-600 focus:border-sky-600"
              placeholder="Enter your email"
              required
            />
            {noAcount ? (
              <h1 className="text-red-500 lg:text-xs 2xl:text-sm mt-1 ml-5">
                Pas de compte lié a cette email
              </h1>
            ) : (
              ""
            )}
          </div>

          {/* Bouton de validation */}
          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-500 font-medium text-white lg:py-3 text-sm 2xl:text-lg rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
          >
            Réinitialiser
          </button>
        </form>

        {/* Lien de retour à la connexion */}
        <div className=" lg:mt-2 2xl:mt-6 text-center">
          <p className="lg:text-xs 2xl:text-sm text-gray-700">
            Vous vous souvenez de votre mot de passe ? <br />
            <Link
              to="/login"
              className="text-sky-600 hover:text-sky-500 font-medium"
            >
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
