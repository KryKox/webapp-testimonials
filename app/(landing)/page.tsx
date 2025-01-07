import {currentUser} from "@/auth/current-user";
import { PageParams } from "@/types/next";
import {GetStartedButton} from "./GetStartedButton";

export default async function RoutePage(props: PageParams<{}>) {
    return (
        <h1>
            <GetStartedButton />
        </h1>
    )
}
