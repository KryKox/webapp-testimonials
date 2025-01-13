import {LoggedInButton} from "@/features/auth/LoggedInButton";
import { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {

    return (
        <div>
            <LoggedInButton />
            <a href={"/dashboard"}>
                Dashboard
            </a>
        </div>
    )
}
