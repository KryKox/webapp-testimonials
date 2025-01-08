import {LayoutParams} from "@/types/next";

export default async function RouteLayout(props: LayoutParams<{}>) {
    return (
        <div className={"flex bg-gray-50 text-gray-900 w-full min-h-screen"}>{props.children}</div>
    );
}