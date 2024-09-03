import { Label } from "@radix-ui/react-label";
// import { SelectTabs } from "../ui/SelectTabs";
import { Input } from "@/components/ui/input";

interface propsT{
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const CreateEntreprise = ({handleChange,handleFormSubmit}:propsT) => {

  return (
    <div className="dark:text-gray-300 text-3xl 2xl:text-3xl w-[80%] mx-auto mt-[5vh] flex flex-col gap-7">
      <div className="mb-4">Entity</div>

      {/* <SelectTabs handleChangeValue={() => {}} /> */}
      <div className="flex justify-center">
      <div className="">
        <h1 className="text-center 2xl:text-5xl my-10">New Entreprise</h1>
        <form onSubmit={handleFormSubmit}>

          <div className="my-5">
            <Label htmlFor="EName">Entreprise Name</Label>
            <Input
              type="text"
              id="EName"
              placeholder="Entreprise Name"
              className="w-[40vw] py-6"
              onChange={(e)=>handleChange(e)}
            />
          </div>

          <div className="my-5">
            <Label htmlFor="last_name">Last Name</Label>
            <Input type="text" id="last_name" placeholder="Last Name"  onChange={(e)=>handleChange(e)}/>
          </div>
          <div className="my-5">
            <Label htmlFor="first_name">First Name</Label>
            <Input type="text" id="first_name" placeholder="First Name" onChange={(e)=>handleChange(e)}/>
          </div>
          <div className="my-5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email"  onChange={(e)=>handleChange(e)} />
          </div>
          <div className="my-5">
            <Label htmlFor="phone_number">Phone number</Label>
            <Input type="text" id="phone_number" placeholder="Phone number"  onChange={(e)=>handleChange(e)} />
          </div>

          <div className="my-5">
            <Label htmlFor="address">Adress</Label>
            <Input type="text" id="address" placeholder="Adress"  onChange={(e)=>handleChange(e)}/>
          </div>
          <div className="my-5">
            <Label htmlFor="password">PassWord</Label>
            <Input type="password" id="password" placeholder="Password"  onChange={(e)=>handleChange(e)}/>
          </div>
          <button type="submit" className="bg-sky-400 hover:bg-sky-500 py-3 w-[40vw] rounded-xl">Save</button>
        </form>
      </div>
    </div>
    </div>
  );
};
