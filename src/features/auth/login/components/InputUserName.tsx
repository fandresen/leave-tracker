import { Input } from "@/components/ui/input";

interface propsT {
  handleChange: (value: string , id: string) => void;
  value?: string;
  className?: string;
  error? : string;
}
export function InputUserName({ handleChange, value, className,error }: propsT) {
  return (
    <div className="flex flex-col">
      <label htmlFor="email" className="2xl:text-lg lg:text-sm mb-2 text-[#333]">
        Email
      </label>
      <Input
        type="email"
        id="username"
        className={className}
        value={value}
        onChange={(e) => handleChange(e.target.value, "username")}
      />
      {/* username Error message */}
      {error && (
          <div className="text-red-600 lg:text-sm 2xl:text-sm">
            {error}
          </div>
        )}
    </div>
  );
}
