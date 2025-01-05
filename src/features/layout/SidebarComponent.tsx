import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu, SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import SidebarLink from "@/features/layout/SidebarLink";
import { LayoutDashboard } from "lucide-react";

export const SidebarComponent = () => {
    const items = [
        {
            title: "Tableau de bord",
            url: "/",
            icon: <LayoutDashboard />,
        },
        {
            title: "Tableau de bord",
            url: "/",
            icon: <LayoutDashboard />,
        },
    ];

    return (
        <Sidebar variant={"sidebar"}>
            <SidebarHeader>
                <div className={"flex items-center py-6 mb-6"}>
                    <img
                        width={60}
                        src={'logo.png'}
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
                                <SidebarMenuItem
                                    key={item.title}
                                    className={"py-3"}
                                >
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
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};