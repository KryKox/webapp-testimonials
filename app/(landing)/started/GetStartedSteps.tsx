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
    
    if (step === 0 && !user) {
        return <SignInButton />;
    }
    
    return (
        <div>
            {step === 1 && <GetStartedCompany user={user} />}
        </div>
    );
};
