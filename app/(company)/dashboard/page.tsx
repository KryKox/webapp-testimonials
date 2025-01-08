import {requiredCurrentUser} from "@/auth/current-user";
import { PageParams } from "@/types/next";
import {userCompany} from "../../(landing)/started/user-company";
import {redirect} from "next/navigation";

export default async function RoutePage(props: PageParams<{}>) {
    const user = await requiredCurrentUser();
    const company = await userCompany(user);
    
    if(!user || !company) {
        redirect('/');
    }
    
    return (
        <div>
            Dashboard
        </div>
    );
}