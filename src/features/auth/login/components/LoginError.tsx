
import { Toaster
    
} from "sonner";

export default function LoginError() { 
    
  return (
    <div className="relative">
      <Toaster
        richColors
        className="relative -top-14"
        duration={5000}
        position="top-center"
      />
    </div>
  );
}
