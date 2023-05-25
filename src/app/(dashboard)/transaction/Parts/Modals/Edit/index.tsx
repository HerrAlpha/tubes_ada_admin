import Button from "@/components/Button"
import ListBox from "@/components/ListBox"
import Modal from "@/components/Modal"
import { ChevronIcon } from "@/constants/icons"
import { transactionStatus } from "@/constants/status"
import { useDispatch } from "@/hooks/Redux"
import { closeModal } from "@/redux/reducers/modalSlice"
import { useUpdateTransactionMutation } from "@/redux/services/transactionApi"
import { Toast } from "@/utils/SweetAlert"
import { FormEvent, useEffect, useState } from "react"

type Props = {
    id: string
}

export default function EditModal({ id }: Props) {
    const [status, setStatus] = useState(transactionStatus[0])
    const [update, { isLoading, isSuccess }] = useUpdateTransactionMutation()

    const dispatch = useDispatch()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        update({ params: { id }, body: { status: status.id } })
    }

    const resetForm = () => {
        setStatus(transactionStatus[0])
    }

    useEffect(() => {
        if (isSuccess) {
            Toast.fire({
                icon: "success",
                title: "Berhasil mengubah status."
            })

            dispatch(closeModal({ id: "edit-modal" }))

            resetForm()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess])


    return (
        <Modal id="edit-modal" onClose={resetForm} className="grid max-w-md gap-4">
            <div className="flex flex-row items-center lg:gap-4">
                <Button
                    type="button"
                    modalTarget="edit-modal"
                    state="close"
                    className="scale-75 -rotate-90"
                    onClick={resetForm}
                >
                    <ChevronIcon className="stroke-black fill-transparent" />
                </Button>
                <Modal.Title className="font-medium">Edit</Modal.Title>
            </div>
            <form onSubmit={handleSubmit} className="grid">
                <div className="grid gap-6 px-4 lg:px-6">
                    <ListBox
                        label="status"
                        data={transactionStatus.filter(({ id }) => id != 2)}
                        onChange={setStatus}
                        value={status}
                        optionsClassName="!max-h-20"
                        className="text-sm"
                    />
                </div>
                <div className="flex justify-end gap-4 p-4 lg:p-6">
                    <Button
                        type="button"
                        modalTarget="edit-modal"
                        label="Cancel"
                        state="close"
                        className="px-6 text-xl font-medium border border-secondary-orange text-secondary-orange font-roboto"
                        onClick={resetForm}
                    />
                    <Button
                        type="submit"
                        label="Save"
                        className={["border text-white px-6 font-medium text-xl font-roboto", isLoading ? "border-secondary-orange/50 bg-secondary-orange/50 cursor-default" : "border-secondary-orange bg-secondary-orange"].join(' ')}
                    />
                </div>
            </form>
        </Modal>

    )
}