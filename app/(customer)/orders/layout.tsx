import {DashboardWrapper} from "@/features/layout/DashboardWrapper";
import {LayoutParams} from "@/types/next";

export default async function RouteLayout(props: LayoutParams<{}>) {
    return (
        <DashboardWrapper>
            {props.children}
        </DashboardWrapper>
    );
}