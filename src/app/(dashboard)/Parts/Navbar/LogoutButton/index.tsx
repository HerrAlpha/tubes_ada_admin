"use client"

import Button from "@/components/Button"
import Modal from "@/components/Modal"
import { LogoutIcon } from "@/constants/icons"
import { useDispatch } from "@/hooks/Redux"
import { closeModal } from "@/redux/reducers/modalSlice"
import { useLogoutMutation } from "@/redux/services/authApi"
import cookieUtil from "@/utils/Cookie"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type Props = {
    className?: string
}

export default function LogoutButton({ className }: Props) {
    const router = useRouter()
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        name: ""
    })

    const [logout, { isLoading, isSuccess }] = useLogoutMutation()

    const handleLogout = () => {
        if (!isLoading) {
            logout()
        }
    }

    useEffect(() => {
        const currentUser: any = JSON.parse(cookieUtil.get('user'))

        if (currentUser) {
            setUser(currentUser)
        }
    }, [])

    useEffect(() => {
        if (isSuccess) {
            dispatch(closeModal({ id: "modal-logout" }))

            router.push('/login')

            cookieUtil.remove('access_token')
            cookieUtil.remove('user')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess])

    return (
        <>
            <Button
                type="button"
                modalTarget="modal-logout"
                className={["p-0", className].join(' ')}
            >
                <div className="flex items-center justify-between gap-2 px-2 py-1 border rounded-full border-secondary-orange">
                    {user?.name ? (
                        <span className="font-medium capitalize select-none text-secondary-orange">{user?.name}</span>
                    ) : (
                        <div className="w-16 h-4 rounded-md bg-slate-500/20 animate-pulse"></div>
                    )}
                    <LogoutIcon className="w-6 h-6 scale-90 stroke-secondary-orange" />
                </div>
            </Button>

            <Modal
                id="modal-logout"
                className="max-w-md py-16"
                panelClassName="items-center"
            >
                <div className="grid gap-8">
                    <div className="grid items-center justify-center">
                        <h3 className="text-2xl font-semibold text-center text-secondary-gray">Are you sure want to logout?</h3>
                    </div>
                    <div className="flex justify-center gap-4">
                        <Button
                            type="button"
                            modalTarget="modal-logout"
                            state="close"
                            label="cancel"
                            className="px-6 font-medium bg-white border border-secondary-orange text-secondary-orange font-roboto"
                        />
                        <Button
                            type="button"
                            onClick={handleLogout}
                            label="logout"
                            className={["border text-white px-6 font-medium font-roboto", isLoading ? "border-secondary-orange/50 bg-secondary-orange/50 cursor-default" : "border-secondary-orange bg-secondary-orange"].join(' ')}
                        />
                    </div>
                </div>
            </Modal>
        </>
    )
}