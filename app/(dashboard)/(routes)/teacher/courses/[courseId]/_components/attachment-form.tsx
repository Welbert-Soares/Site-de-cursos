"use client";

import * as z from "zod";
import axios from "axios";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Attachment, Course } from "@prisma/client";
import Image from "next/image";


import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";

interface AttachmentFormProps {
    initialData: Course & { attachments: Attachment[] };
    courseId: string;
}

const formSchema = z.object({
    url: z.string().min(1),
});

export const AttachmentForm = ({ initialData, courseId }: AttachmentFormProps) => {
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => setIsEditing((current) => !current);

    const router = useRouter();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post(`/api/courses/${courseId}/attachments`, values);
            toast.success("Curso atualizado.");
            toggleEdit();
            router.refresh();
        } catch (error) {
            
            toast.error("Ocorreu um erro ao salvar o título do curso.");
        }
    };

    return (
        <div className="mt-6 border bg-slate-100 rounded-md p-4">
            <div className="font-medium flex items-center justify-between">
                    Arquivos do Curso
                <Button onClick={toggleEdit} variant="ghost">
                    {isEditing && (
                        <>Cancelar</>
                    )}
                    {!isEditing && (
                        <>
                            <PlusCircle className="h-4 w-4 mr-2" />
                            Adicione uma Arquivo
                        </>
                    )}
                    
                </Button>
            </div>
            {!isEditing && (
                <>
                    {initialData.attachments.length === 0 && (
                        <p className="text-sm mt-2 text-slate-500 italic">
                            Nenhum arquivo adicionado.
                        </p>
                    )}
                </>
            )}
            {isEditing && (
                <div>
                    <FileUpload 
                        endpoint="courseAttachment"
                        onChange={(url) => {
                            if (url) {
                                onSubmit({ url: url});
                            }
                        }}
                    />
                    <div className="text-xs text-muted-foreground mt-4">
                        Adicione tudo o que seus alunos precisam para concluir o curso.
                    </div>
                </div>
            )}
        </div>
    );
};
