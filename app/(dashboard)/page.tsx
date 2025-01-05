import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {CustomersTable} from "@/features/customers/CustomersTable";
import {prisma} from "@/lib/prisma";
import { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
    const users = await prisma.user.findMany();
    
    return <CustomersTable data={users} />
}
