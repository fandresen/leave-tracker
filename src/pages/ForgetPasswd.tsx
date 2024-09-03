import { Link } from "react-router-dom";

export default function ForgetPasswprd() {
  return (
    <>
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#79C1FF] to-[#222A31]">
          <div className="bg-white p-8 rounded-xl shadow-md min-h-[50vh] min-w-[30vw]">
            <h2 className="text-[5vh] text-center font-bold mb-4">Forgot Password</h2>
            <p className="mb-6 text-2xl">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-xl font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 border-2 py-5 text-2xl border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#65c2b4] focus:border-[#65c2b4] sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#7BE8D7] hover:bg-[#65c2b4] text-white py-5 text-2xl rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#65c2b4]"
              >
                Reset Password
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-xl text-gray-600">
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
