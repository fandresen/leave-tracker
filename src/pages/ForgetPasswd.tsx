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
                  className="mt-1 block w-full px-3 py-5 text-2xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#7BE8D7] hover:bg-[#65c2b4] text-white py-5 text-2xl rounded-xl px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Reset Password
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-xl text-gray-600">
                Remember your password?{" "}
                <a
                  href="/login"
                  className="text-indigo-600 text-xl hover:text-indigo-500"
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
    </>
  );
}
