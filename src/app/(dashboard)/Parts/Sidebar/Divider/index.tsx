type Props = {
    className?: string
}

export default function Divider({ className }: Props) {
    return (
        <div className={["mx-8 h-[1px] bg-[#E3E8F2]", className].join(' ')}></div>
    )
}