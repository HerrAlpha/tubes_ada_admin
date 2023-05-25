"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import { useLoginMutation } from "@/redux/services/authApi"
import cookieUtil from "@/utils/Cookie"
import { Toast } from "@/utils/SweetAlert"
import { useRouter, useSearchParams } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"

type Props = {
    className?: string
}

export default function Form({ className }: Props) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [login, { data, isLoading }] = useLoginMutation()

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!isLoading) {
            login({ body: { email, password } })
        }
    }

    useEffect(() => {
        if (data?.data?.token) {
            const { token, user } = data.data

            cookieUtil.set('access_token', token, { secure: true })
            cookieUtil.set('user', JSON.stringify(user), { secure: true })

            Toast.fire({
                icon: "success",
                title: data.message
            })

            const from = searchParams.get("from")

            if (from) {
                router.push(from)
            } else {
                router.push('dashboard')
            }

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <form onSubmit={handleOnSubmit} className={["grid gap-8 h-fit max-w-sm sm:max-w-xs w-full m-auto", className].join(" ")}>
            <div className="grid gap-4">
                <Input
                    id="email"
                    label="email"
                    type="email"
                    placeholder="Please enter your email"
                    onChange={setEmail}
                    value={email}
                    className="text-[#757575]"
                    inputClassName="placeholder:text-[#757575] text-sm"
                />
                <Input
                    id="password"
                    label="password"
                    type="password"
                    value={password}
                    placeholder="Please Enter your password"
                    onChange={setPassword}
                    className="text-[#757575]"
                    inputClassName="placeholder:text-[#757575] text-sm"
                />
            </div>

            <Button
                type="submit"
                label="login"
                className={["py-4 font-medium text-white text-sm", isLoading ? "bg-secondary-orange/50 cursor-default" : "bg-secondary-orange"].join(' ')}
            />
        </form>
    )
}