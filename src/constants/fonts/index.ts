/** @format */

import { Inter, Work_Sans, Mulish, Roboto } from "next/font/google"

const InterFont = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
})
const RobotoFont = Roboto({
	variable: "--font-roboto",
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
})

const Fonts = {
	className: [InterFont.variable, RobotoFont.variable].join(" "),
}

export default Fonts
