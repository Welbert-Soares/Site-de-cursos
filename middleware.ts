import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    "/",
    "/app/(dashboard)/(routes)/teacher/courses/(courseId)/page.tsx",
]);

export default clerkMiddleware((auth, request) => {
    if (isProtectedRoute(request)) {
        auth().protect();
    }

    return NextResponse.next();
});

export const config = {
    matcher: ["/((?!.*..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
