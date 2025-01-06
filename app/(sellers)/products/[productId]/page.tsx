import { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
    return (
        <div>
            Product Id {props.params.productId}
        </div>
    );
}