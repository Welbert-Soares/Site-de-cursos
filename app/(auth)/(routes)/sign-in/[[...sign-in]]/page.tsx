import { Loader2 } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";


export default function Page() {
    return ( 
        <div>
            <div>
                <ClerkLoaded>
                    <SignIn path="/sign-in" />
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className="animate-spin text-muted-foreground"/>
                </ClerkLoading>
            </div>
        </div>
    )
}
