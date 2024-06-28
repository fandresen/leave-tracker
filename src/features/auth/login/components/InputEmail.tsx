interface propsT {
  handleChange: (value: string | undefined, id: string) => void;
  value?: string;
}
export function InputUserName({ handleChange, value }: propsT) {
  return (
    <div className="flex flex-col">
      <label htmlFor="email" className="text-xl mb-2">
        Username
      </label>
      <input
        type="email"
        id="username"
        placeholder="John Doe"
        className="py-3 px-3 w-[80vw] xl:w-[30vw] 2xl:w-[20vw] rounded-xl text-xl"
        value={value}
        onChange={(e) => handleChange(e.target.value, "username")}
      />
    </div>
  );
}
