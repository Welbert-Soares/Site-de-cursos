import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <UserButton
            appearance={{
                elements: {
                    userButtonPopoverCard: { pointerEvents: "initial" },
                },
            }}
            afterSignOutUrl="/"
        />
    );
}
