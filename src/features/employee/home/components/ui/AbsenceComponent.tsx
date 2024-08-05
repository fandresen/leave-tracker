
interface propsT{
    title:string;
}
export default function AbsenceComponent({title}:propsT) {
  return (
    <div className='w-full bg-sky-500 pl-5 mt-2 rounded-xl'>
        <h1 className="text-white">{title}</h1>
    </div>
  )
}
