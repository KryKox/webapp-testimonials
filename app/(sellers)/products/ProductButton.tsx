"use client";

import {Button} from "@/components/ui/button";
import {redirect} from "next/navigation";

export const ProductButton = () => {
    return (
        <Button
            variant={"outline"}
            onClick={() => {
                redirect('/products/new')
            }}
        >
            Create a new Product
        </Button>
    );
};

