"use server";

import { prisma } from "@/lib/prisma";

export const createCompany = async (userId: string) => {
    if (!userId) {
        throw new Error("User ID is required to create a company.");
    }
    const company = await prisma.company.create({
        data: {
            companyName: "Lilian",
            companyAddress: "123 Main St",
            companyOwnerId: userId,
        },
    });
    return company;
};
