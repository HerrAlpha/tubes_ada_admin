import Navbar from "./Parts/Navbar"
import Sidebar from "./Parts/Sidebar"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col min-h-full">
            <Navbar />
            <div className="flex flex-1 h-full">
                <Sidebar />

                <section className="order-first w-full lg:order-last bg-secondary-cream/20">
                    <div className="h-full p-4 mr-auto 2xl:container lg:px-10 lg:py-4">
                        {children}
                    </div>
                </section>
            </div>
        </div>
    )
}