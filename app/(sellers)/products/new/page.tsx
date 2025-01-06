import {prisma} from "@/lib/prisma";
import { PageParams } from "@/types/next";
import {ProductForm} from "../[productId]/edit/ProductForm";

export default async function RoutePage(props: PageParams<{}>) {
    

    return (
        <div>
            <h1>
                Create product
            </h1>
            <ProductForm />
        </div>
    );
}