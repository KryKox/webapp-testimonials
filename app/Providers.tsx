"use client"

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ThemeProvider} from "next-themes";
import {PropsWithChildren} from "react";

export const Providers = (props: PropsWithChildren) => {
    const queryClient = new QueryClient()
    
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
                disableTransitionOnChange
            >
                {props.children}
            </ThemeProvider>
        </QueryClientProvider>
    );
};

