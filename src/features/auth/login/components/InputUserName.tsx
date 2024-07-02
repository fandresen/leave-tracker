import { Input } from "@/components/ui/input";

interface propsT {
  handleChange: (value: string , id: string) => void;
  value?: string;
  className?: string;
}
export function InputUserName({ handleChange, value, className }: propsT) {
  return (
    <div className="flex flex-col">
      <label htmlFor="email" className="2xl:text-xl mb-2">
        Username
      </label>
      <Input
        type="email"
        id="username"
        className={className}
        value={value}
        onChange={(e) => handleChange(e.target.value, "username")}
      />
    </div>
  );
}
