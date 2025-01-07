"use client";

import { User } from '@prisma/client';
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { GetStartedCreateCompany } from "./GetStartedCreateCompany";
import { userCompany } from "./user-company";

export const GetStartedCompany = ({ user }: { user: User }) => {
    const router = useRouter();
    
    const { data: company, isLoading, isError } = useQuery({
        queryKey: ["company", user.id],
        queryFn: async () => {
            return await userCompany(user);
        },
        enabled: !!user,
    });
    
    useEffect(() => {
        if (company) {
            router.push('/dashboard');
        }
    }, [company, router]);
    
    
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading company data</p>;
    
    if (!company) {
        return <GetStartedCreateCompany user={user} />;
    }
    
    return null;
};