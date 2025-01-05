import {Table, TableBody, TableCell} from "@/components/ui/table";
import {prisma} from "@/lib/prisma";
import { PageParams } from "@/types/next";
import {Home} from "lucide-react";

export default async function RoutePage(props: PageParams<{}>) {
    
    const users = await prisma.user.findMany();
    
    return (
        <div>
            {users.map((user) => {
                return (
                    <Table>
                        <TableBody>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.name}</TableCell>
                        </TableBody>
                    </Table>
                )
            })}
        </div>
    )
}