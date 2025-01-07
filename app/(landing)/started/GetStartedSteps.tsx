"use client";

import { SignInButton } from "@/features/auth/SignInButton";
import { User } from "@prisma/client";
import {GetStartedCompany} from "./GetStartedCompany";
import { useState, useEffect } from "react";

export const GetStartedSteps = ({ user }: { user: User }) => {
    const [step, setStep] = useState<number>(0);
    
    useEffect(() => {
        if (user) {
            setStep(1);
        }
    }, [user]);
    
    
    return (
        <div className={"w-full"}>
            <h1 className={"text-3xl"}>Bienvenue à l'étape {step + 1}</h1>
            {step === 0 && !user ? <SignInButton /> : step === 1 && <GetStartedCompany user={user} />}
        </div>
    );
};
