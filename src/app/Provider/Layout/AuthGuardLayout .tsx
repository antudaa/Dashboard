'use client';

import Link from "next/link";
import GlobalButton from "@/Components/Buttons/GlobalButton/GlobalButton";



const AuthGuardLayout = ({ children }: any) => {
    const isAuthenticated = false; // Set the initial authentication state

    // If not authenticated, render only the login and signup pages
    if (!isAuthenticated) {
        return (
            <div>
                {children}
            </div>
        );
    }

    // If authenticated, render the full layout
    return (
        <div>
            <nav>
                {/* Render your navigation component */}
            </nav>
            <main>
                {children}
            </main>
            <footer>
                {/* Render your footer component */}
            </footer>
        </div>
    );
};

export default AuthGuardLayout;