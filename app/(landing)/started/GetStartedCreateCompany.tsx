"use client"

import {Button} from "@/components/ui/button";
import {useToast} from "@/hooks/use-toast";
import {User} from "@prisma/client";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {createCompany} from "../../(company)/company.action";

export const GetStartedCreateCompany = ({ user }: User) => {
    const router = useRouter();
    const { toast } = useToast();
    
    const mutation = useMutation({
        mutationFn:  () => createCompany(user.id),
        onSuccess: () => {
            toast({
                title: "Company",
                description: "Your company has been created!",
            });
            
            router.push('/dashboard');
        },
    });
    
    return (
        <div>
            Créer votre company
            <Button
                onClick={() => {
                    mutation.mutate();
                }}
            >
                
                Create Company
            </Button>
        </div>
    );
};

