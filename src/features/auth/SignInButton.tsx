"use client"

import {Button} from "@/components/ui/button";
import {signInAction} from "@/features/auth/auth.action";

export const SignInButton = () => {
    return (
        <Button
            variant="outline"
            className="mt-12 w-full flex items-center"
            onClick={async () => {
                await signInAction()
            }}
        >
            Sign-in with Google
        </Button>
    );
};

