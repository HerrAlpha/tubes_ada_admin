import { Fragment, useEffect, useState } from 'react'

import { Transition, Dialog } from '@headlessui/react'
import { RootState } from '@/redux/store'
import { closeModal } from '@/redux/reducers/modalSlice'
import { useDispatch, useSelector } from '@/hooks/Redux'

type Props = {
    children: JSX.Element[] | JSX.Element
    className?: string
    panelClassName?: string
    id: string
    onClose?(): void
}

const Modal = ({ children, className, id: modalId, panelClassName, onClose }: Props) => {
    const [show, setShow] = useState(false)
    const { id } = useSelector((state: RootState) => state.modal)
    const dispatch = useDispatch()

    const closeHandle = () => {
        if (onClose) {
            onClose()
        }

        setShow(false)
        dispatch(closeModal({ id: modalId }))
    }

    useEffect(() => {
        // console.log(modalId, id[id.length - 1], modalId == id[id.length - 1])
        setShow(modalId == id[id.length - 1])
    }, [id, modalId])

    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeHandle}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className={["flex min-h-full items-center justify-center p-4 text-center", panelClassName].join(' ')}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className={["w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-4 lg:p-6 text-left align-middle shadow-xl transition-all", className].join(' ')}>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

Modal.Title = Dialog.Title
Modal.Description = Dialog.Description

export default Modal