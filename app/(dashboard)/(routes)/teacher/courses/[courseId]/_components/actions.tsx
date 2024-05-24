"use client";

import axios from "axios";
import { Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";

interface ActionsProps {
    disabled: boolean;
    courseId: string;
    isPublished: boolean;
}

export const Actions = ({
    disabled,
    courseId,
    isPublished,
}: ActionsProps) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true);

            if (isPublished) {
                await axios.patch(`/api/courses/${courseId}/unpublish`);
                toast.success("Curso despublicado");
            } else {
                await axios.patch(`/api/courses/${courseId}/publish`);
                toast.success("Curso publicado");
            }

            router.refresh();
        } catch {
            toast.error("Ocorreu um erro ao publicar/despublicar o capítulo.");
        } finally {
            setIsLoading(false);
        }
    }

    const onDelete = async () => {
        try {
            setIsLoading(true);
            
            await axios.delete(`/api/courses/${courseId}`);
            
            toast.success("Curso excluído")
            router.refresh();
            router.push(`/teacher/courses`);
        } catch {
            toast.error("Ocorreu um erro ao excluir o curso.");
            
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex items-center gap-x-2">
            <Button
                onClick={onClick}
                disabled={disabled || isLoading}
                variant="outline"
                size="sm"
            >
                {isPublished ? "Despublicar" : "Publicar"}
            </Button>
            <ConfirmModal onConfirm={onDelete}>
            <Button size="sm" disabled={isLoading}>
                <Trash className="h4 w-4" />
            </Button>
            </ConfirmModal>
        </div>
    );
};
