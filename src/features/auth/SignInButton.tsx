"use client"

import {Button} from "@/components/ui/button";
import {signInAction} from "@/features/auth/auth.action";

export const SignInButton = () => {
    return (
        <Button
            variant="outline"
            className="w-full flex items-center"
            onClick={async () => {
                await signInAction()
            }}
        >
            Sign-in
        </Button>
    );
};

