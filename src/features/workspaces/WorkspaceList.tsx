import {currentUser} from "@/auth/current-user";
import {SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar";
import {CreateWorkspaceButton} from "@/features/workspaces/CreateWorkspaceButton";
import {WorkspaceListClient} from "@/features/workspaces/WorkspaceListClient";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@radix-ui/react-collapsible";
import {FolderIcon} from "lucide-react";

export const WorkspaceList = async () => {
    const user = await currentUser();
    
    return (
        <Collapsible className="group/collapsible">
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="flex items-center space-x-3">
                        <FolderIcon className="w-5 h-5" />
                        <span className="font-medium text-sm">Workspaces</span>
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                    <WorkspaceListClient userId={user?.id}/>
                    
                    <div className="px-4 py-2">
                        <CreateWorkspaceButton/>
                    </div>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    );
};