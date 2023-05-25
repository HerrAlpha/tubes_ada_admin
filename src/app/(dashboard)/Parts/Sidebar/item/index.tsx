import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { usePathname } from "next/navigation"
import { closeSubItem, openSubItem } from "@/redux/reducers/sidebarSlice"
import { useDispatch, useSelector } from "@/hooks/Redux"
import { ChevronIcon } from "@/constants/icons"


type Props = {
    id: string
    icon: {
        src: any
        active: string
        nonactive: string
    }
    label: string
    children?: JSX.Element[] | JSX.Element
    href?: string
    iconClassName?: string
}

export default function Item({ id, icon: Icon, label, children, href, iconClassName }: Props) {
    const pathname = usePathname()
    const dispatch = useDispatch()

    const active = pathname.slice(1).split('/')[0] === id

    const { id: itemId } = useSelector((state) => state.sidebar)

    const [toggle, setToggle] = useState(itemId === id)

    useEffect(() => {
        if (active && children) {
            dispatch(openSubItem({ id: id }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setToggle(itemId === id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemId])

    const toggleHandle = () => {
        if (children) {
            if (toggle) {
                dispatch(closeSubItem())
            } else {
                dispatch(openSubItem({ id: id }))
            }
        }
    }

    const subMenuAnimate = {
        enter: {
            transition: {
                duration: 0.5
            },
            display: 'grid'
        },
        exit: {
            transition: {
                duration: 0.5,
                delay: 0.01
            },
            transitionEnd: {
                display: 'none'
            }
        }
    }

    const content = (
        <div onClick={toggleHandle} className={["flex flex-row justify-items-center items-center p-4 gap-3 rounded-xl select-none cursor-pointer", active && !children ? 'bg-secondary-orange text-white' : 'text-secondary-orange'].join(' ')}>
            <div className="my-auto">
                {Icon.src && <Icon.src className={[active && !children ? Icon.active : Icon.nonactive].join(" ")} />}
            </div>
            <h3 className="font-medium capitalize">{label}</h3>
            {children && <ChevronIcon className={["stroke-[#898989] ml-auto transition-all", toggle ? 'rotate-0' : 'rotate-180'].join(" ")} />}
        </div>
    )

    return (
        <>
            {href && !active ? <Link href={href}>{content}</Link> : <>{content}</>}
            {
                children && (
                    <motion.div
                        initial="exit"
                        animate={toggle ? 'enter' : 'exit'}
                        variants={subMenuAnimate}
                        className="pl-12">
                        {children}
                    </motion.div>
                )
            }
        </>
    )
}