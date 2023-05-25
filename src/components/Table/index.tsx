import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { TableStyles } from 'react-data-table-component/dist/src/DataTable/types'

type Props = {
    data: any
    columns: any
    selectableRows?: boolean
    onSelectedRowsChange: (selected: {
        allSelected: boolean
        selectedCount: number
        selectedRows: any
    }) => void

}

export default function Table({ data, columns, onSelectedRowsChange, selectableRows }: Props) {
    const [rendered, setRendered] = useState(false)

    useEffect(() => {
        setRendered(true)
    }, [])

    const customStyles: TableStyles = {
        headRow: {
            style: {
                minHeight: '72px',
                borderBottomColor: '#EBEFF2',
                padding: '8px',
                marginBottom: '10px',
                color: '#7D7D7D',
                fontWeight: '500',
                fontFamily: ['Roboto', 'sans-serif']
            }
        },
        rows: {
            style: {
                border: 'none !important',
                marginTop: '10px',
                marginBottom: '10px',
                padding: '8px',
                fontFamily: ['Roboto', 'sans-serif']
            },
            selectedHighlightStyle: {
                '&:nth-of-type(n)': {
                    backgroundColor: '#F7F9FC !important',
                    borderRadius: '8px'
                }
            },
            highlightOnHoverStyle: {
                '&:nth-of-type(n)': {
                    backgroundColor: '#F7F9FC !important',
                    borderRadius: '8px'
                }
            }
        },
        pagination: {
            style: {
                justifyContent: 'center'
            },
        }
    }

    return (
        <>
            {
                rendered && (
                    <DataTable
                        columns={columns}
                        data={data}
                        responsive
                        selectableRows={selectableRows}
                        selectableRowsHighlight
                        highlightOnHover
                        onSelectedRowsChange={onSelectedRowsChange}
                        customStyles={customStyles}
                        className="!overflow-auto scroll-minimalist"
                    />
                )
            }

        </>
    )
}