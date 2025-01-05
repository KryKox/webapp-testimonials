import {Separator} from "@/components/ui/separator";
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
import {LayoutDashboard, MailCheck, ShoppingBag, UsersIcon} from "lucide-react";

export const SidebarComponent = () => {
    const items = [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: <LayoutDashboard />,
        },
        {
            title: "Orders",
            url: "/orders",
            icon: <ShoppingBag />,
        },
        {
            title: "Customers",
            url: "/customers",
            icon: <UsersIcon />,
        },
        {
            title: "Messages",
            url: "/messages",
            icon: <MailCheck />,
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
                    
                    <Separator className={"mt-3"} />
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};