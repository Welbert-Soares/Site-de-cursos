import { Loader2 } from "lucide-react";
import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";


export default function Page() {
    return ( 
        <div>
            <div>
                <ClerkLoaded>
                    <SignUp path="/sign-up" />
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className="animate-spin text-muted-foreground"/>
                </ClerkLoading>
            </div>
        </div>
    )
}
