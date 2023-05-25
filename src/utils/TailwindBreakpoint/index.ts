/** @format */

import resolveConfig from "tailwindcss/resolveConfig"

const tailwindConfig = require("../../../tailwind.config")
const fullConfig: any = resolveConfig(tailwindConfig)

export const getBreakpointValue = (value: string): number => +fullConfig.theme.screens[value].slice(0, fullConfig.theme.screens[value].indexOf("px"))

export const getCurrentBreakpoint = (): string => {
	let currentBreakpoint: string = "sm"
	let biggestBreakpointValue: number = 0

	if (typeof window !== "undefined") {
		for (const breakpoint of Object.keys(fullConfig.theme.screens)) {
			const breakpointValue = getBreakpointValue(breakpoint)
			if (breakpointValue > biggestBreakpointValue && window.innerWidth >= breakpointValue) {
				biggestBreakpointValue = breakpointValue
				currentBreakpoint = breakpoint
			}
		}
	}

	return currentBreakpoint
}
