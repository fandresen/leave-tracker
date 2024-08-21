import { SelectTabs } from "../ui/SelectTabs"

export const Entity = () => {
  return (
    <div
        className='dark:text-gray-300 text-3xl 2xl:text-3xl w-[80%] mx-auto mt-[5vh] flex flex-col gap-7'
    >
        <div className="mb-4">
            Entity
        </div>
        
        <SelectTabs  handleChangeValue={()=>{}}/>
    </div>
  )
}