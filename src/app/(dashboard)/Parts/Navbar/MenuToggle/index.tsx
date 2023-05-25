"use client"

import { useDispatch, useSelector } from "@/hooks/Redux"
import { toggleSidebar } from "@/redux/reducers/sidebarSlice"
import { motion } from "framer-motion"

type Props = {
    className?: string
}

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="#FF512E"
        strokeLinecap="round"
        {...props}
    />
)

export const MenuToggle = ({ className }: Props) => {
    const { isOpen } = useSelector(state => state.sidebar)
    const dispatch = useDispatch()

    const handleOnClick = () => {
        dispatch(toggleSidebar())
    }

    return (
        <button onClick={handleOnClick} className={className}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                    animate={isOpen ? "open" : "closed"}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                    animate={isOpen ? "open" : "closed"}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                    animate={isOpen ? "open" : "closed"}
                />
            </svg>
        </button>
    )
}
