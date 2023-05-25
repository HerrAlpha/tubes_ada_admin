import { motion } from "framer-motion"
import { useSelector } from '@/hooks/Redux'
import Item from "../item"
import Divider from "../Divider"
import SubItem from "../Subitem"

type Props = {
    children: JSX.Element[] | JSX.Element
}

const Wrapper = ({ children }: Props) => {
    const { isOpen } = useSelector(state => state.sidebar)

    const sidebar = {
        open: {
            right: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        closed: {
            right: "-100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }

    return (
        <motion.aside
            variants={sidebar}
            initial={isOpen ? "open" : "closed"}
            animate={isOpen ? "open" : "closed"}
            className="lg:min-w-[17rem] lg:w-[17rem] w-full h-full lg:static fixed z-50"
        >
            <div className="flex flex-col w-[inherit] lg:fixed lg:left-0 h-full bg-[#F7F9FC] overflow-hidden shadow-[2px_12px_24px_rgba(154,154,154,0.12)]">
                <div className="h-full overflow-auto scrollbar-hide">
                    <div className="flex flex-col gap-2 px-4 pt-4 pb-24 lg:pt-5 lg:pb-28">
                        {children}
                    </div>
                </div>
            </div>
        </motion.aside>
    )
}

Wrapper.Item = Item
Wrapper.Divider = Divider
Wrapper.SubItem = SubItem

export default Wrapper