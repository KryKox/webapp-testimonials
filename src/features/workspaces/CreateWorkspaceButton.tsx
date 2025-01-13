"use client"

import {CreateWorkspaceDialog} from "@/features/workspaces/CreateWorkspaceDialog";
import {Plus} from "lucide-react";

export const CreateWorkspaceButton = () => {
    return (
        <CreateWorkspaceDialog>
            <div className="flex items-center cursor-pointer">
                <Plus size={16} className={"mr-2"}/>
                Create a new workspace
            </div>
        </CreateWorkspaceDialog>
    );
};

