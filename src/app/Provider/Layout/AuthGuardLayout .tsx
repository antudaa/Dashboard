'use client';



const AuthGuardLayout = ({ children }: any) => {
    const isAuthenticated = false; // Set the initial authentication state

    // If not authenticated, render only the login and signup pages
    if (!isAuthenticated) {
        return (
            <div>
                <main>
                    {children}
                </main>
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