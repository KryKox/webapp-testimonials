import {currentUser} from "@/auth/current-user";
import { PageParams } from "@/types/next";
import {redirect} from "next/navigation";

export default async function RoutePage(props: PageParams<{}>) {
   const user = await currentUser()
    
    if (!user) {
        redirect('/');
    }
    
    return (
        <div>
            Dashboard
        </div>
    );
}