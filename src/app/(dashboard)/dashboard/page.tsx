"use client"

import Card from "@/components/Card"
import { useGetDashboardQuery } from "@/redux/services/dashboardApi"
import currencyUtil from "@/utils/Currency"

export default function Page({
    params,
    searchParams,
}: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const { data } = useGetDashboardQuery()

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Card className="grid p-4 min-h-[8rem]">
                <label className="font-medium">Total Transaction</label>
                <span className="text-2xl text-right truncate text-slate-700">{data?.data?.total_transaction}</span>
            </Card>
            <Card className="grid p-4 min-h-[8rem]">
                <label className="font-medium">Total Resto</label>
                <span className="text-2xl text-right truncate text-slate-700">{data?.data?.total_resto}</span>
            </Card>
            <Card className="grid p-4 min-h-[8rem]">
                <label className="font-medium">Total Investor</label>
                <span className="text-2xl text-right truncate text-slate-700">{data?.data?.total_investor}</span>
            </Card>
            <Card className="grid p-4 min-h-[8rem]">
                <label className="font-medium">Profit</label>
                <span className="text-2xl text-right truncate text-slate-700">{currencyUtil.rupiah(data?.data?.fixed_profit)}</span>
            </Card>
        </div>
    )
}