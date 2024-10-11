interface propsT {
  title: string;
  status: "APPROUVE" | "REJECTEE" | "EN_COURS";
}
export default function AbsenceComponent({ title, status }: propsT) {
  const statusColor = status ==="APPROUVE"?"bg-green-500":status ==="REJECTEE"? "bg-red-500": "bg-yellow-500";

  return (
    <div className={`w-full ${statusColor} pl-5 mt-2 rounded-xl`}>
      <h1 className="text-white">{title}</h1>
    </div>
  );
}
