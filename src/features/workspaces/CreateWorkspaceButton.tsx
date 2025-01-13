"use client"

import {Button} from "@/components/ui/button";
import {createWorkspace} from "@/features/workspaces/workspace.action";
import {useToast} from "@/hooks/use-toast";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Plus} from "lucide-react";

export const CreateWorkspaceButton = () => {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: async () => {
            await createWorkspace('cm5n2a6gb0000l957n6mrpgcq', 'My first workspace');
        },
        onSuccess: () => {
            toast({
                title: "Create Workspace",
                description: "Workspace created successfully",
                variant: "success"
            });
            queryClient.invalidateQueries(['workspaces']);
        }
    })
    
    return (
        <div
            className="flex items-center"
            onClick={() => {
            mutation.mutate();
        }}
        >
            <Plus size={16} className={"mr-2"} />
            Create a new project
        </div>
    );
};

