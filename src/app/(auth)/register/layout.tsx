import type { ReactNode } from "react";

/**
 * RegisterLayout defines the layout for the register route.
 * It displays a hero image on large screens and renders child content in the second column.
 * The background color matches the design of the login/register pages.
 */
const pageBg = "#0F1115";

export default function RegisterLayout({ children }: { children: ReactNode }) {
    return (
        <main
            className="min-h-[100svh] w-full grid lg:grid-cols-2"
            style={{ backgroundColor: pageBg }}
        >
            {/* Hero image panel (hidden on smaller screens) */}
            <section className="hidden lg:block relative">
                <img
                    src="/hero.jpg"
                    alt="hero"
                    className="absolute inset-0 h-full w-full object-cover opacity-80 pointer-events-none z-0"
                />
            </section>
            {/* Content panel (register card will be rendered here) */}
            {children}
        </main>
    );
}
