"use client"

import { SidebarMenuSub, SidebarMenuSubItem } from "@/components/ui/sidebar";
import {LoaderSpinner} from "@/features/layout/LoaderSpinner";
import SidebarLink from "@/features/layout/SidebarLink";
import { getWorkspace } from "@/features/workspaces/workspace.action";
import { useQuery } from "@tanstack/react-query";
import { FolderIcon } from "lucide-react";

interface WorkspaceListClientProps {
    userId: string;
}

export const WorkspaceListClient = ({ userId }: WorkspaceListClientProps) => {
    const { data: workspaces } = useQuery({
        queryKey: ['workspaces', userId],
        queryFn: () => getWorkspace(userId),
    });
    
    return (
        <SidebarMenuSub>
            {workspaces && workspaces.length > 0 && (
                workspaces.map((workspace) => (
                    <SidebarMenuSubItem key={workspace.id}>
                        <SidebarLink
                            href={`/workspaces/${workspace.id}`}
                            icon={<FolderIcon className="w-4 h-4" />}
                            label={workspace.workspaceName}
                        />
                    </SidebarMenuSubItem>
                ))
            )}
        </SidebarMenuSub>
    );
};