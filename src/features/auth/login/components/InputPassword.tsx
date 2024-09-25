import { forwardRef, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";

const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  ({ divclassName,inputClassName,error,label="Mot de passe", ...props}, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <>
        <div className={cn("relative mt-4",divclassName)}>
          <Label className="2xl:text-xl lg:text-sm">{label}</Label>
          <Input
            type={showPassword ? "text" : "password"}
            className={cn("hide-password-toggle pr-10",inputClassName)}
            ref={ref}
            {...props}
          />
          <Button
            type="button"
            variant="ghost"
            size="lg"
            className="absolute right-0 2xl:right-2 top-3 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword((prev) => !prev)}
            disabled={false}
          >
            {showPassword ? (
              <EyeIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <EyeOffIcon className="h-5 w-5" aria-hidden="true" />
            )}
            <span className="sr-only">
              {showPassword ? "Hide password" : "Show password"}
            </span>
          </Button>

          {/* hides browsers password toggles */}
          <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
        </div>
           {/* password Error message */}
           {error && (
          <div className="text-red-600 lg:text-sm 2xl:text-lg text-center">
            {error.passwordMessage}
          </div>
        )}

     
      </>
    );
  }
);
InputPassword.displayName = "InputPassword";

export { InputPassword };
