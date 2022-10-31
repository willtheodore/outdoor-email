import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            <main
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                {children}
            </main>
        </>
    );
}
