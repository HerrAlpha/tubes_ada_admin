import Card from "@/components/Card"
import Form from "./Parts/Form"
import Image from "next/image"
import { DummyImage } from "@/constants/images"

export default function Page({
    params,
    searchParams,
}: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    return (
        <Card className="grid items-center w-full max-w-lg grid-cols-5 overflow-hidden sm:max-w-2xl h-96">
            <div className="relative hidden w-full h-full col-span-2 bg-black/20 sm:block">
                <Image
                    src={DummyImage}
                    alt="login-dummy-image"
                    className="object-cover w-full h-full"
                    priority
                />
            </div>

            <Form className="px-8 py-4 col-span-full sm:col-span-3" />
        </Card>
    )
}