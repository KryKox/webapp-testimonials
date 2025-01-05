import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {Header} from "@/features/layout/Header";
import {SidebarComponent} from "@/features/layout/SidebarComponent";
import React from "react";

export const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider className="flex bg-gray-50 text-gray-900 w-full min-h-screen">
            <SidebarComponent />
            <main className="flex flex-col w-full h-full py-7 px-9 bg-gray-50">
                <div className="flex items-center justify-between w-full mb-7">
                    <SidebarTrigger className="text-sm text-gray-500 hover:text-gray-900 mr-12 mt-1" />
                    <Header />
                </div>
                {children}
            </main>
        </SidebarProvider>
    );
};