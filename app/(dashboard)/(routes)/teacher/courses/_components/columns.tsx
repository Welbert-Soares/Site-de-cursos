"use client";

import { Course } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Course>[] = [
    {
        accessorKey: "title",
        header: "Título",
    },
    {
        accessorKey: "price",
        header: "Preço",
    },
    {
        accessorKey: "isPublished",
        header: "Publicado",
    },
];
