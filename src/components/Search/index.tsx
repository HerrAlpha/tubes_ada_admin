import { SearchIcon } from "@/constants/icons"

type Props = {
    onEnter?(value: string): void
    value?: string
    placeholder?: string
    className?: string
    iconClassName?: string
    inputClassName?: string
}

export default function Search({ onEnter, value, placeholder, className, iconClassName, inputClassName }: Props) {
    const enterHandle = (e: any) => {
        if (onEnter && e.key === 'Enter') {
            onEnter(e.target.value)
        }
    }

    return (
        <div className={["flex flex-row gap-6 rounded-lg text-sm bg-[#F9F9F9] text-[#898989] p-2 w-80", className].join(" ")}>
            <div className="my-auto">
                <SearchIcon className={["fill-[#898989] scale-110", iconClassName].join(' ')} />
            </div>
            <input onKeyDown={enterHandle} value={value} type="text" className={["w-full bg-inherit focus:outline-none", inputClassName].join(' ')} placeholder={placeholder} />
        </div>
    )
}