export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="h-screen bg-secondary-cream/20">
            <div className="container flex items-center justify-center w-full h-full p-8 m-auto sm:p-4">
                {children}
            </div>
        </section>
    )
}