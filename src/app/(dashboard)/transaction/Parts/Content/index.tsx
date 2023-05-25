"use client"

import Card from "@/components/Card"
import Search from "@/components/Search"
import { useEffect, useState } from "react"
import Table from "../Table"
import { TransactionProps, useGetTransactionQuery } from "@/redux/services/transactionApi"
import Pagination from "@/components/Pagination"
import { usePagination } from "@/hooks/Pagination"
import Modals from "../Modals"

type Props = {}

export default function Content({ }: Props) {
    const [keyword, setKeyword] = useState("")
    const [selectedId, setSelectedId] = useState()
    const { pageCount, setPageCount, initialPage, setInitialPage } = usePagination()
    const [params, setParams] = useState<TransactionProps["params"]>({
        page: 1
    })

    const { data: transactions } = useGetTransactionQuery({ params })

    useEffect(() => {
        setInitialPage(0)
        setParams({
            ...params,
            page: 1,
            keyword: keyword || undefined
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword])

    useEffect(() => {
        setParams({
            ...params,
            page: initialPage + 1,
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialPage])

    useEffect(() => {
        if (transactions?.data?.last_page) {
            const { last_page, total } = transactions.data

            setPageCount(total && last_page)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transactions])

    return (
        <>
            <Card className="grid gap-4 p-4">
                <Search
                    onEnter={setKeyword}
                    className="w-full border !rounded-full"
                />

                <Table data={transactions?.data?.data} onSelectedId={setSelectedId} />
            </Card>

            <Pagination
                pageCount={pageCount}
                initialPage={initialPage}
                onPageChange={setInitialPage}
            />

            <Modals id={selectedId} />
        </>
    )
}