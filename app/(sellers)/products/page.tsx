import { PageParams } from "@/types/next";
import {ProductButton} from "./ProductButton";

export default async function RoutePage(props: PageParams<{}>) {
    return (
        <div>
            Products
            <ProductButton />
        </div>
    );
}