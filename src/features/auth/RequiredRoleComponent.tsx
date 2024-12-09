import { getRole } from "@/lib/token&RoleService";

interface propsT {
    role: string;
    children: React.ReactNode;
}

export default function RequiredRoleComponent({ role, children }: propsT) {
    const userRole = getRole();
    return <>
        {
            userRole == role ? children : ""
        }
    </>;
}
