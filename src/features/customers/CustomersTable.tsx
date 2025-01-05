import {TableCell, TableRow} from "@/components/ui/table";
import {TableLayout} from "@/features/layout/TableLayout";
import {BadgeCheck, Ban} from "lucide-react";

export const CustomersTable = async ({ data }) => {
    const tableHeader = [
        "Identifiant",
        "Prénom",
        "Nom",
        "Premium",
    ];
   
    
    return (
        <div className="w-full">
            <TableLayout header={tableHeader}>
                {data.map((d, index) => (
                    <TableRow
                        key={index}
                    >
                        <TableCell>{d.id}</TableCell>
                        <TableCell>{d.firstname}</TableCell>
                        <TableCell>{d.lastname}</TableCell>
                        <TableCell>{d.premium ? <BadgeCheck className={"text-green-600"} /> : <Ban className={"text-red-600"} />}</TableCell>
                    </TableRow>
                ))}
            </TableLayout>
            
        </div>
    );
};