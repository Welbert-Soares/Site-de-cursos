import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ChapterIdPage = async ({
    params
}: {
    params: { courseId: string; chapterId: string };
}) => {
    
    const user = currentUser();

    if (!user) {
        return redirect("/")
    }

    return ( 
        <div>
            Chapter 
        </div>
     );
}
 
export default ChapterIdPage;