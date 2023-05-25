import { ChevronIcon } from '@/constants/icons'
import { Listbox } from '@headlessui/react'
import { UIEvent } from 'react'

type Props = {
    label?: string
    onChange(value: any): void
    value: { id: string | number, name: string }
    data: Array<{ id: string | number, name: string }>
    className?: string
    labelClassName?: string
    buttonClassName?: string
    optionsClassName?: string
    optionClassName?: string
    iconClassName?: string
    onScroll?(e: UIEvent<HTMLUListElement, globalThis.UIEvent>): void,
    disabled?: boolean
}

export default function ListBox({ label, onChange, value, data, className, optionsClassName, labelClassName, buttonClassName, iconClassName, onScroll, disabled }: Props) {
    return (
        <>
            <Listbox value={value} onChange={onChange} disabled={disabled}>
                {({ open }) => (
                    <div className={["relative", className].join(' ')} >
                        <div className="grid gap-1">
                            {label && <Listbox.Label className={["capitalize", labelClassName].join(' ')}>{label}</Listbox.Label>}
                            <Listbox.Button className={["flex justify-between items-center border-2 p-3 rounded-md focus:outline-none w-full", buttonClassName].join(' ')}>
                                <span className={["block truncate", disabled ? "text-[#e5e7eb]" : " "].join(' ')}>{value?.name}</span>
                                <ChevronIcon className={["transition-all", open ? "rotate-0" : "rotate-180", disabled ? "stroke-[#e5e7eb]" : "stroke-[#898989]", iconClassName].join(' ')} />
                            </Listbox.Button>
                        </div>
                        <Listbox.Options
                            onScroll={onScroll}
                            className={["absolute mt-1 max-h-60 w-full overflow-auto scroll-minimalist rounded-md bg-white text-base shadow-lg z-20 focus:outline-none sm:text-sm", optionsClassName].join(' ')}
                        >
                            {data?.map((v: { id: string | number, name: string }) => (
                                <Listbox.Option
                                    key={v.id}
                                    className={({ active }) => ["relative cursor-default select-none", active ? "bg-secondary-orange text-white" : "text-gray-900"].join(' ')}
                                    value={v}
                                >
                                    <span className={`block truncate py-2 px-4 ${v.id == value?.id && 'bg-secondary-orange text-white'}`}>
                                        {v.name}
                                    </span>
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </div>
                )
                }
            </Listbox >
        </>
    )
}
