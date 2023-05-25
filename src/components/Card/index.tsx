type Props = {
    children: React.ReactNode
    className?: string
}

export default function Card({ children, className }: Props) {
    return (
        <div className={["bg-white rounded-2xl shadow-[0_1.4px_4px_0_rgba(0,0,0,0.08)] border-[1px] border-[#E3E8F2]", className].join(' ')}>
            {children}
        </div>
    )
}
