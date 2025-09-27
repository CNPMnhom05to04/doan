export default function RegisterLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed inset-0 grid md:grid-cols-2 overflow-hidden">
            <div className="relative hidden md:block">
                <img
                    src="/login-bg.png"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="h-full w-full overflow-y-auto overscroll-contain">
                <main className="mx-auto w-full max-w-xl px-6 py-10 pb-24">
                    {children}
                </main>
            </div>
        </div>
    );
}
