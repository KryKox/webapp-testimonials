import {currentUser} from "@/auth/current-user";
import {SignInButton} from "@/features/auth/SignInButton";
import { PageParams } from "@/types/next";
import {redirect} from "next/navigation";
import {GetStartedSteps} from "../../(landing)/started/GetStartedSteps";
import {userCompany} from "./user-company";

export default async function RoutePage(props: PageParams<{}>) {
    const user = await currentUser();
    const company = await userCompany(user);
    
  
    if (!user || !company) {
        return  <GetStartedSteps user={user} />
    }
    
    if (user && company) {
        return redirect('/dashboard');
    }
    
}