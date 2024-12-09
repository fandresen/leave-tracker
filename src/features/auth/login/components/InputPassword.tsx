import { forwardRef, useRef, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";

const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  ({
    divclassName,
    inputClassName,
    error,
    errorClassName,
    label = "Mot de passe",
    ...props
  }) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    
    // Fonction qui bascule l'affichage du mot de passe et garde le focus
    const togglePasswordVisibility = () => {
      if (inputRef.current) {
        // 1. Sauvegarde la position actuelle du curseur
        const cursorPosition = inputRef.current.selectionStart;

        // 2. Change l'état du mot de passe (afficher/masquer)
        setShowPassword((prev) => !prev);

        // 3. Après avoir basculé l'affichage du mot de passe, refocus et remettre le curseur à la bonne position
        setTimeout(() => {
          inputRef.current?.focus();
          inputRef.current?.setSelectionRange(cursorPosition, cursorPosition);
        }, 0); // Utilisation d'un timeout pour attendre la mise à jour du DOM
      }
    };


    return (
      <>
        <div className={cn("relative mt-4", divclassName)}>
          <Label className="2xl:text-lg lg:text-sm text-[#333]">{label}</Label>
          <Input
            type={showPassword ? "text" : "password"}
            className={cn(
              "hide-password-toggle pr-10 focus-visible:ring-0 ",
              inputClassName
            )}
            ref={inputRef}
            {...props}
          />
          <Button
            type="button"
            variant="ghost"
            size="lg"
            className="absolute right-0 2xl:right-2 top-3 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => togglePasswordVisibility()}
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
          <div
            className={cn(
              "text-red-600 lg:text-xs 2xl:text-sm",
              errorClassName
            )}
          >
            {error.passwordMessage}
          </div>
        )}
      </>
    );
  }
);
InputPassword.displayName = "InputPassword";

export { InputPassword };
