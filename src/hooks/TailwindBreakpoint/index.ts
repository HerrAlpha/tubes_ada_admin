/** @format */

import { getCurrentBreakpoint } from "@/utils/TailwindBreakpoint"
import { useEffect, useState } from "react"

type TailwindBreakpointProps = "sm" | "md" | "lg" | "xl" | "2xl"

export type BreakpointProps = {
	current?: string
	gt: (v: TailwindBreakpointProps) => boolean
	lt: (v: TailwindBreakpointProps) => boolean
	gte: (v: TailwindBreakpointProps) => boolean
	lte: (v: TailwindBreakpointProps) => boolean
}

const arrTailwindBreakpoint = ["sm", "md", "lg", "xl", "2xl"]

export const useTailwindBreakpoint = () => {
	const [breakpoint, setBreakpoint] = useState<BreakpointProps>({
		gt: (v) => findIndex(getCurrentBreakpoint()) > findIndex(v),
		lt: (v) => findIndex(getCurrentBreakpoint()) < findIndex(v),
		gte: (v) => findIndex(getCurrentBreakpoint()) >= findIndex(v),
		lte: (v) => findIndex(getCurrentBreakpoint()) <= findIndex(v),
	})

	const findIndex = (v: TailwindBreakpointProps | string) => {
		return arrTailwindBreakpoint.indexOf(v)
	}

	useEffect(() => {
		setBreakpoint({
			...breakpoint,
			current: getCurrentBreakpoint(),
		})

		const updateWindowDimensions = () => {
			setBreakpoint({
				...breakpoint,
				current: getCurrentBreakpoint(),
			})
		}

		window.addEventListener("resize", updateWindowDimensions)

		return () => window.removeEventListener("resize", updateWindowDimensions)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return breakpoint
}
