"use client";

import { Category } from "@prisma/client";
import {
    FcEngineering,
    FcFilmReel,
    FcMultipleDevices,
    FcMusic,
    FcOldTimeCamera,
    FcSalesPerformance,
    FcSportsMode,
}from "react-icons/fc";
import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategorisProps {
    items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
    "Fotografia": FcOldTimeCamera,
    "Engenharia": FcEngineering,
    "Filmagem": FcFilmReel,
    "Musica": FcMusic,
    "Informática": FcMultipleDevices,
    "Contabilidade": FcSalesPerformance,
    "Fitness": FcSportsMode,
};

export const Categories = ({
    items,
}: CategorisProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {items.map((item) => (
                <CategoryItem 
                    key={item.id}
                    label={item.name}
                    icon={iconMap[item.name]}
                    value={item.id}
                />
            ))}
        </div>
    )
}