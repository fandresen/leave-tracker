import ProfilAvatar from "@/components/ProfilAvatar";

interface propsT{
    classNameInput? : string;
    classNameDiv? : string;
    // user : UserDTO;
    // handleClick : () => void;
    // handleChange : () => void;
}
export default function ResearchUser({classNameDiv,classNameInput}:propsT) {
  return (
    <div className={classNameDiv}>
        <input type="text" placeholder="Utilisateur..." className={`bg-white `+ classNameInput }/>
        <div className={`w-[250px] bg-slate-50 rounded-lg py-5 px-2 border-b border-l border-r border-gray-400`}>
            <div className="flex gap-2 bg-slate-200 mt-2 py-3 px-3">
                <ProfilAvatar classNameProfil="w-8 h-8" lastName="" url=""/>
                <h1 className="text-gray-800 text-xs mt-2">{"Fandresena Antokiniaina"}</h1>
            </div>
            <div className="text-center mt-4">
                <button className="text-sm bg-sky-500 text-white p-2 rounded-lg">Ajouter</button>
            </div>
        </div>
    </div>
  )
}
