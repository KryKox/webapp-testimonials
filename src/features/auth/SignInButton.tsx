"use client"

import {Button} from "@/components/ui/button";
import {signInAction} from "@/features/auth/auth.action";
import {LogIn} from "lucide-react";

export const SignInButton = () => {
    return (
        <Button
            variant="outline"
            onClick={async () => {
                await signInAction()
            }}
        >
            <LogIn size={16} className={"mr-2"} />
            Sign-in
        </Button>
    );
};

