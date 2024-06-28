
import { Toaster
    
} from "sonner";

export default function LoginError() { 
    
  return (
    <div>
      <Toaster
        richColors
        className="absolute top-[-30px]"
        duration={15000}
        position="top-center"
      />
    </div>
  );
}
