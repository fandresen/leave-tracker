import { useNavigate } from "react-router-dom";

export default function NoEntreprise() {
  const navigate = useNavigate();
  return (
    <div className="w-[90vw] lg:mt-10 2xl:mt-[10vh] absolute text-center">
      <h1 className="lg:text-2xl 2xl:text-3xl text-center text-gray-400">Aucun Entrerpise pour le moment</h1>
      <button onClick={()=>navigate('/create-entreprise')} className="bg-sky-600 lg:py-2 2xl:py-3 lg:px-7 2xl:px-8 text-white lg:text-lg 2xl:text-xl font-medium rounded-lg lg:mt-12 2xl:mt-16 hover:bg-transparent hover:border-2 hover:border-sky-600 hover:text-sky-600">Ajouter</button>
    </div>
  );
}
