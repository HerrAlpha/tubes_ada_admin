import Image from "next/image"

type Props = {
    label: string
    src: string
}

export default function ProductColumn({ label, src }: Props) {
    return (
        <div className="flex items-center gap-2">
            <div className="relative min-w-[4rem] w-16 h-16 rounded-lg">
                <Image
                    src={"/" + src}
                    alt={label}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                />
            </div>

            <label className="truncate">{label}</label>
        </div>
    )
}