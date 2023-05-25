import { useState } from 'react'
import { TableColumn } from 'react-data-table-component'

import TableComponent from '@/components/Table'
import ActionColumn from './Columns/Action'
import moment from 'moment'
import ProductColumn from './Columns/Product'
import StatusColumn from './Columns/Status'

type Props = {
    data: any
    onSelectedId(value: any): void
}

type DataRow = {
    date: string
    invoice_number: string
    product: any
    resto: string
    investor: string
    status: any
    action: any
}

export default function Table({ data, onSelectedId }: Props) {
    const handleOnClick = (id: string) => {
        onSelectedId(id)
    }

    const columns: TableColumn<DataRow>[] = [
        {
            name: 'Date',
            selector: row => moment(row.date).format("HH:mm, DD MMMM YYYY"),
            width: '160px',
            style: {
                color: '#7D7D7D',
            }
        },
        {
            name: 'Invoice Number',
            selector: row => row.invoice_number,
            width: '240px',
            style: {
                color: '#7D7D7D',
            }
        },
        {
            name: 'Product',
            selector: row => row.product,
            minWidth: '240px',
            style: {
                color: '#7D7D7D',
            }
        },
        {
            name: 'Resto',
            center: true,
            selector: row => row.resto,
            width: '160px',
            style: {
                color: '#7D7D7D',
            }
        },
        {
            name: 'Investor',
            center: true,
            selector: row => row.investor ?? "-",
            width: '160px',
            style: {
                color: '#7D7D7D',
            }
        },
        {
            name: 'Status',
            center: true,
            selector: row => row.status,
            width: '240px',
            style: {
                color: '#7D7D7D',
            }
        },
        {
            button: true,
            selector: row => row.action,
            minWidth: "40px",
            style: {
                justifyContent: 'flex-end',
                "div:first-child": {
                    overflow: "unset"
                }
            }
        },
    ]

    return (
        <TableComponent
            data={
                data?.map(({ id, invoice_number, created_at, resto_name, investor_name, name, product_pict, status }: any) => ({
                    id,
                    date: created_at,
                    invoice_number: invoice_number,
                    product: <ProductColumn src={product_pict} label={name} />,
                    resto: resto_name,
                    investor: investor_name,
                    status: <StatusColumn status={status} />,
                    action: <ActionColumn onClick={() => handleOnClick(id)} />
                }))
            }
            columns={columns}
            onSelectedRowsChange={({ selectedRows }) => { console.log(selectedRows) }}
        />
    )
}