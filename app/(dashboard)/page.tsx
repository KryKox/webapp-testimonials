import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table";
import {prisma} from "@/lib/prisma";
import { PageParams } from "@/types/next";
import {Home} from "lucide-react";

export default async function RoutePage(props: PageParams<{}>) {
    
    const users = await prisma.user.findMany();
    
    return (
        <Table>
            <TableBody>
                {users.map((user) => {
                    return (
                        <TableRow>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.name}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}