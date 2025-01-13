import {Separator} from "@/components/ui/separator";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent, SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu, SidebarMenuAction, SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import SidebarLink from "@/features/layout/SidebarLink";
import {WorkspaceList} from "@/features/workspaces/WorkspaceList";
import {FolderIcon, Home, LayoutDashboard, MailCheck, Plus, ShoppingBag, UsersIcon} from "lucide-react";


export const SidebarComponent = () => {
    const items = [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: <LayoutDashboard />,
        },
        {
            title: "Employees",
            url: "/employees",
            icon: <UsersIcon />,
        },
    ];
    
    
 

    return (
        <Sidebar variant={"sidebar"}>
            <SidebarHeader>
                <div className={"flex items-center py-6 mb-6"}>
                    <img
                        width={60}
                        src={'/logo.png'}
                        alt={"Sphere Logo"}
                        className="pl-2"
                    />
                    <h2 className={"text-2xl ml-6 font-bold text-black"}>
                        Sphere
                    </h2>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="py-1 px-1">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <SidebarLink
                                            href={item.url}
                                            icon={item.icon}
                                            label={item.title}
                                        />
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                    <Separator className={"mt-3"} />
                    <SidebarGroupContent>
                        <SidebarMenu className={"py-1 px-1"}>
                            <WorkspaceList />
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};