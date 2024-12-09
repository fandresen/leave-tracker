import LoginForm from "@/features/auth/login/components/LoginForm";

export default function Login() {


  return (
    <>
      <div className="bg-[#fbfafa] w-full h-[100vh] absolute top-0">
      <div className="w-full h-[45vh] bg-sky-800 absolute top-0 z-0"></div>
        <LoginForm />
      </div>
    </>
  );
}
