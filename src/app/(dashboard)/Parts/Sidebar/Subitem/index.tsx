import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
    label: string
    href: string
}

export default function SubItem({ label, href }: Props) {
    const pathname = usePathname()
    const pathnames = pathname.slice(1).split('/')
    const active = `/${pathnames[0]}/${pathnames[1]}` === href

    const content = (
        <div className={["py-4 px-6 rounded-xl select-none cursor-pointer", active ? 'bg-secondary-orange' : 'bg-white'].join(" ")}>
            <h4 className="font-medium capitalize">{label}</h4>
        </div>
    )

    return (
        <>
            {href && !active ? <Link href={href}>{content}</Link> : <>{content}</>}
        </>
    )
}