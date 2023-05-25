import { ChevronIcon } from '@/constants/icons'
import ReactPaginate from 'react-paginate'

type Props = {
    pageCount: number
    initialPage: number
    onPageChange: any
}

export default function Pagination({ pageCount, initialPage, onPageChange }: Props) {
    const handlePageChange = ({ selected }: { selected: number }) => {
        onPageChange(selected)
    }

    return (
        <>
            {
                pageCount ?
                    <ReactPaginate
                        pageCount={pageCount}
                        onPageChange={handlePageChange}
                        forcePage={initialPage}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        containerClassName="flex justify-center gap-4 select-none"
                        nextLabel={<ChevronIcon className="transition-colors scale-75 rotate-90 stroke-black hover:stroke-secondary-orange" />}
                        previousLabel={<ChevronIcon className="transition-colors scale-75 -rotate-90 stroke-black hover:stroke-secondary-orange" />}
                        activeClassName="text-secondary-orange border-b border-b-secondary-orange"
                        pageClassName="hover:text-secondary-orange transition-colors"
                        renderOnZeroPageCount={null}
                        breakLabel="..."
                    /> : null
            }
        </>
    )
}