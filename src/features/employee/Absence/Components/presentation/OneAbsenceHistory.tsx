interface propsT {
  type: string; //should be enum type
  etat: "ACCEPTE" | "REFUSE" | "EN COURS";
  jours: number;
  begin: string;
  end:string;
}
export default function OneAbsenceHistory({ type, etat,jours,begin,end }: propsT) {
  return (
    <div className="w-full lg:px-3 2xl:px-5 lg:py-4 bg-white border-2 border-slate-100 shadow-xl lg:mt-3 2xl:mt-5">
      <div className="flex justify-between">
        <h1 className="font-semibold text-[#333] lg:text-sm 2xl:text-lg">Type : <span className="text-gray-500">{type}</span></h1>
        <h2
          className={` lg:px-2 2xl:px-3 lg:py-1 border lg:text-[10px] 2xl:text-[11px] rounded-md font-medium ${
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
      <div className="flex justify-between lg:mt-1 ">
          <h1 className="lg:text-[13px] 2xl:text-sm text-gray-400 lg:ml-4 2xl:ml-6 text-center"><span className="lg:text-3xl 2xl:text-4xl font-medium text-sky-700/75">{jours}</span><br/>{` jour${jours > 1 ?"s": '' }`}</h1>
          <div>
            <h1 className="lg:text-[10px] 2xl:text-[12px] font-medium text-slate-400 lg:mt-9 2xl:mt-10">{begin} <span className="text-gray-600">{"->"}</span> {end}</h1>
          </div>
      </div>
    </div>
  );
}
