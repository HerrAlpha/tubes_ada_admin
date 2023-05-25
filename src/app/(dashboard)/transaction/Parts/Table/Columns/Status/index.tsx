import { transactionStatus } from "@/constants/status"
import { useEffect, useState } from "react"

type Props = {
    status: string | number
}

export default function StatusColumn({ status }: Props) {
    const [label, setLabel] = useState("")

    useEffect(() => {
        const { name }: any = transactionStatus.find(({ id }) => id == status)

        setLabel(name)
    }, [status])

    return (
        <div className={[
            "capitalize px-8 py-2 font-medium rounded-full",
            status == 1 ? "bg-orange-300 text-orange-700" :
                status == 2 ? "bg-violet-300 text-violet-700" :
                    status == 3 ? "bg-sky-300 text-sky-700" :
                        status == 4 ? "bg-emerald-300 text-emerald-700" :
                            status == 5 ? "bg-rose-300 text-rose-700" : ""
        ].join(" ")}>{label}</div>
    )
}