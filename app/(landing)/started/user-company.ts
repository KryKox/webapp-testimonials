"use server";

import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export const userCompany = async (user: User | null) => {
    if (!user) {
        return null;
    }
    
    const company = await prisma.company.findFirst({
        where: {
            companyOwnerId: user.id,
        },
    });
    
    return company || null;
};
