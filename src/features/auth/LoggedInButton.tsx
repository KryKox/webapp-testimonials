import React from 'react';
import {auth} from "@/auth/auth";
import {SignInButton} from "@/features/auth/SignInButton";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {LoggedInDropdown} from "@/features/auth/LoggedInDropdown";
import {Label} from "@/components/ui/label";

export const LoggedInButton = async () => {
    const session = await auth();

    if (!session?.user) {
        return <SignInButton />
    }

    return (
        <LoggedInDropdown>
            <Button
                variant="outline"
                className={"px-2"}
            >
                <Avatar>
                    <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
                    {session.user.image ? (
                        <AvatarImage
                            src={session.user.image}
                            alt={session.user.name}
                        />
                    ) : null}
                </Avatar>
                <Label>{session.user.name}</Label>
            </Button>
        </LoggedInDropdown>

    );
};

