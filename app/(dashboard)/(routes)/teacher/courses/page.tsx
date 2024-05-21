import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
    return (
        <div>
            <Link href="/teacher/create">
                <Button className="p-6">Novo Curso</Button>
            </Link>
        </div>
    );
};

export default CoursesPage;
