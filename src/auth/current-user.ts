import {auth} from "@/auth/auth";
import {User} from "next-auth";

export const currentUser = async () => {
    const session = await auth();

    if (!session?.user) {
        return null;
    }

    const user = session.user as User;
    return user;
}

export const requiredCurrentUser = async () => {
    const user = await  currentUser();

    if (!user) {
        return null;
    }
    return user;
}