"use server"

import {prisma} from "@/lib/prisma";


export const getWorkspace = async (userId: string) => {
    const workspaces = await prisma.workspace.findMany({
        where: {
            workspaceOwnerId: userId,
        },
    });
    
    return workspaces;
};

export const createWorkspace = async (workspaceOwnerId: string, workspaceName: string) => {
    const workspace = await prisma.workspace.create({
        data: {
            workspaceOwnerId: workspaceOwnerId,
            workspaceName: workspaceName
        }
    });
    
    return workspace;
}