import {
    Table, TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import React from "react";

export const TableLayout = ({ header, children }: { header: string[], children: React.ReactNode }) => {
    return (
        <Table className="w-full mx-auto border-2 border-gray-200 rounded-xl overflow-hidden">
            <TableHeader>
                <TableRow>
                    {header.map((head, key) => (
                        <TableHead  key={key}>
                            {head}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {children}
            </TableBody>
        </Table>
    );
};