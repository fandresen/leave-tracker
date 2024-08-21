import { useAxiosWithToken } from "@/lib/interceptor";
import { useState } from "react";

export default function EntityContainer ({handleChangeValue}: {handleChangeValue: (value: string) => void}) {
    const axios = useAxiosWithToken();
    // const [entity, setEntity] = useState<EntityT>();
}