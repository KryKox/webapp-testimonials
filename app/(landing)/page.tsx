import { PageParams } from "@/types/next";
import {GetStartedButton} from "./GetStartedButton";

export default async function RoutePage(props: PageParams<{}>) {
    
    return (
        <div>
            <GetStartedButton />
        </div>
    )
}
