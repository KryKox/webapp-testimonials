import {currentUser} from "@/auth/current-user";
import { PageParams } from "@/types/next";
import {userCompany} from "./user-company";
import {GetStartedSteps} from "./GetStartedSteps";

export default async function RoutePage(props: PageParams<{}>) {
    const user = await currentUser();
    const company = await userCompany(user);
    
    return (
        <div>
            <GetStartedSteps user={user} company={company} />
        </div>
    );
}