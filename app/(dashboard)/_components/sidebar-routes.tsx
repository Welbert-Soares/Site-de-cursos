"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
    {
        icon: Layout,
        label: "Aprendizado", // nome do icone de layout
        href: "/",
    },
    {
        icon: Compass,
        label: "Buscar", // nome do icone de pesquisa
        href: "/search",
    },
];

const teacherRoutes = [
    {
        icon: List,
        label: "Cursos", // nome do icone de layout
        href: "/teacher/courses",
    },
    {
        icon: BarChart,
        label: "Estatísticas", // nome do icone de pesquisa
        href: "/teacher/analytics",
    },
]

export const SidebarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.includes("/teacher");

    const routes = isTeacherPage ? teacherRoutes : guestRoutes;
    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem 
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}