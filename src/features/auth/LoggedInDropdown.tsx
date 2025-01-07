"use client"

import {redirect} from "next/navigation";
import {PropsWithChildren} from "react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {signOutAction} from "@/features/auth/auth.action";
import {LogOut} from "lucide-react";

export type LoggedInDropdownProps = PropsWithChildren;

export const LoggedInDropdown = (props: LoggedInDropdownProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem
                    onClick={() => {
                        signOutAction();
                    }}
                >
                    <LogOut size={16} className={"mr-2"} />
                      Sign-out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

