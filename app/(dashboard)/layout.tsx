import {DashboardWrapper} from "./DashboardWrapper.tsx";
import {LayoutParams} from "@/types/next";

export default async function RouteLayout(props: LayoutParams<{}>) {
    return (
        <DashboardWrapper>{props.children}</DashboardWrapper>
    );
}