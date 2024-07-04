import { getRole } from "@/lib/token&RoleService";

interface propsT {
    role: string;
    children: React.ReactNode;
}

export default function RequiredRole({ role, children }: propsT) {
    const userRole = getRole();
    return <>
        {
            userRole == role ? children : ""
        }
    </>;
}
