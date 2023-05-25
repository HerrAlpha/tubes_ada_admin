"use client"

import { AccountBalanceWalletIcon, DashboardIcon, SettingIcon } from '@/constants/icons'
import Wrapper from './Wrapper'

type Props = {}

export default function Sidebar({ }: Props) {
    return (
        <Wrapper>
            <Wrapper.Item
                id="dashboard"
                label="Dashboard"
                href="/dashboard"
                icon={{
                    src: DashboardIcon,
                    active: "fill-white",
                    nonactive: "fill-secondary-orange"
                }}
            />
            <Wrapper.Item
                id="transaction"
                label="Transaction"
                href="/transaction"
                icon={{
                    src: AccountBalanceWalletIcon,
                    active: "fill-white",
                    nonactive: "fill-secondary-orange"
                }}
            />
            {/* <Wrapper.Divider />
            <Wrapper.Item
                id="setting"
                label="Setting"
                href="/setting"
                icon={{
                    src: SettingIcon,
                    active: "stroke-white",
                    nonactive: "stroke-secondary-orange"
                }}
            /> */}
        </Wrapper>
    )
}