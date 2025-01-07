"use client"

import {Button} from "@/components/ui/button";
import {redirect} from "next/navigation";

export const GetStartedButton = () => {
    return (
        <Button
            onClick={() => {
                redirect('/started')
            }}
        >
            Get started
        </Button>
    );
};

