import Content from "./Parts/Content"

export default function Page({
    params,
    searchParams,
}: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    return (
        <div className="grid gap-8">
            <h1 className="text-2xl font-bold col-span-full text-slate-600">Transaction</h1>

            <Content />
        </div>
    )
}