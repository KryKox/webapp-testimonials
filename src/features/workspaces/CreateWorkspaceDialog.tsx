import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {createWorkspace} from "@/features/workspaces/workspace.action";
import {useToast} from "@/hooks/use-toast";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {PropsWithChildren} from "react";

export type CreateWorkspaceDialogProps = PropsWithChildren;

export const CreateWorkspaceDialog = (props: CreateWorkspaceDialogProps) => {
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
    });
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                {props.children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

