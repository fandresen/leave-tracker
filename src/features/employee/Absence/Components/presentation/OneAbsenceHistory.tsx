interface propsT {
  type: string; //should be enum type
  etat: "ACCEPTE" | "REFUSE" | "EN COURS";
  jours: number;
  begin: string;
  end:string;
}
export default function OneAbsenceHistory({ type, etat,jours,begin,end }: propsT) {
  return (
    <div className="w-full 2xl:px-5 2xl:py-4 bg-white border-2 border-slate-100 shadow-xl 2xl:mt-5">
      <div className="flex justify-between">
        <h1 className="font-semibold text-[#333] 2xl:text-lg">Type : <span className="text-gray-500">{type}</span></h1>
        <h2
          className={` px-1 py-1 border text-[10px] rounded-md font-medium ${
            etat == "ACCEPTE"
              ? "border-green-400 text-green-400"
              : etat == "EN COURS"
              ? "border-yellow-500 text-yellow-500"
              : "border-red-500 text-red-500"
          }`}
        >
          {etat}
        </h2>
      </div>
      <div className="flex justify-between 2xl:mt-3">
          <h1 className="text-sm text-gray-500"><span className="text-2xl font-medium text-[#333]">{jours}</span>{` jour${jours > 1 ?"s": '' }`}</h1>
          <div>
            <h1 className="text-[12px] font-medium text-slate-400 mt-2">{begin} <span className="text-black">{"-->"}</span> {end}</h1>
          </div>
      </div>
    </div>
  );
}
