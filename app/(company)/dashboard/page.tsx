import {prisma} from "@/lib/prisma";
import { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
    
    return (
        <div>
            Dashboard
        </div>
    );
}