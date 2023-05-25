import Button from "@/components/Button"
import Modal from "@/components/Modal"
import { ChevronIcon } from "@/constants/icons"
import { useGetTransactionByIdQuery } from "@/redux/services/transactionApi"
import currencyUtil from "@/utils/Currency"

type Props = {
    id: string
}

export default function DetailModal({ id }: Props) {
    const { data } = useGetTransactionByIdQuery({ params: { id } })

    return (
        <Modal id="detail-modal" className="grid !max-w-xl gap-4">
            <div className="flex flex-row items-center lg:gap-4">
                <Button
                    type="button"
                    modalTarget="detail-modal"
                    state="close"
                    className="scale-75 -rotate-90"
                >
                    <ChevronIcon className="stroke-black fill-transparent" />
                </Button>
                <Modal.Title className="font-medium">Detail</Modal.Title>
            </div>
            <div className="grid grid-cols-1 gap-1 sm:gap-2 sm:grid-cols-2">
                <label className="font-medium">No. Invoice</label>
                <span className="truncate text-slate-700">{data?.data?.invoice_number ?? "-"}</span>
                <label className="font-medium">Nama Paket</label>
                <span className="truncate text-slate-700">{data?.data?.name ?? "-"}</span>
                <label className="font-medium">Qty</label>
                <span className="truncate text-slate-700">{data?.data?.qty ?? "-"}</span>
                <label className="font-medium">Harga</label>
                <span className="truncate text-slate-700">{currencyUtil.rupiah(data?.data?.price) ?? "-"}</span>
                <label className="font-medium">Total</label>
                <span className="truncate text-slate-700">{currencyUtil.rupiah(data?.data?.total) ?? "-"}</span>
                <hr className="my-2 col-span-full" />
                <label className="font-medium">Keuntungan Admin</label>
                <span className="truncate text-slate-700">{currencyUtil.rupiah(data?.data?.profit_admin) ?? "-"}</span>
                <label className="font-medium">Keuntungan UMKM</label>
                <span className="truncate text-slate-700">{currencyUtil.rupiah(data?.data?.profit_enterprise) ?? "-"}</span>
                <label className="font-medium">Keuntungan Investor</label>
                <span className="truncate text-slate-700">{currencyUtil.rupiah(data?.data?.profit_investor) ?? "-"}</span>
                <label className="font-medium">Total Keuntungan</label>
                <span className="truncate text-slate-700">{currencyUtil.rupiah(data?.data?.profit_investor + data?.data?.profit_enterprise + data?.data?.profit_admin) ?? "-"}</span>
            </div>
        </Modal>
    )
}