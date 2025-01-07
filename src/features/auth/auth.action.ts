"use server"

import {signIn, signOut} from "@/auth/auth";
import {redirect} from "next/navigation";

export const signInAction = async () => {
    await signIn();
}

export const signOutAction = async () => {
    await signOut();
    redirect('/');
}