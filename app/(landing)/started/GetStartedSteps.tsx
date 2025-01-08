"use client";

import { SignInButton } from "@/features/auth/SignInButton";
import { LoaderSpinner } from "@/features/layout/LoaderSpinner";
import { useToast } from "@/hooks/use-toast";
import { User } from "@prisma/client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GetStartedCompany } from "./GetStartedCompany";
import { useState, useEffect } from "react";
import { GetStartedStepComponent } from "./GetStartedStepComponent";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export const GetStartedSteps = ({ user }: { user: User }) => {
    const [step, setStep] = useState<number | null>(null);
    const { toast } = useToast();
    
    useEffect(() => {
        if (user) {
            setStep(1);
        } else {
            setStep(0);
        }
    }, [user]);
    
    if (step === null) {
        return <LoaderSpinner message="Chargement..." />;
    }
    
    const totalSteps = 2;
    const steps = new Array(totalSteps).fill(false);
    
    for (let i = 0; i < step; i++) {
        steps[i] = true;
    }
    
    const handleNext = () => {
        if (!user) {
            toast({
                title: "Sign-in",
                description: "You must sign in to continue to the second step.",
                variant: "destructive",
            });
            return;
        }
        if (step < totalSteps - 1) {
            setStep(step + 1);
        }
    };
    
    const handlePrevious = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };
    
    return (
        <div className="w-full flex items-center justify-center">
            <Card className="shadow-lg rounded-lg border border-gray-200 px-4 py-4">
                <CardHeader className="flex items-center">
                    <img
                        src={"/logo.png"}
                        width={75}
                        alt={"logo icon"}
                    />
                    <h1 className="text-3xl font-bold">Welcome to Sphere</h1>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between mt-4">
                        {steps.map((isCompleted, index) => (
                            <GetStartedStepComponent
                                key={index}
                                isCompleted={isCompleted}
                                stepNumber={index + 1}
                                isCurrent={index === step}
                                stepTitle={`Étape ${index + 1}`}
                            />
                        ))}
                    </div>
                    
                    {step === 0 && !user ? (
                        <SignInButton />
                    ) : step === 1 && <GetStartedCompany user={user} />}
                    
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={handlePrevious}
                            disabled={step === 0 || step === 1}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={step === totalSteps - 1}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};