import { NumericFormat } from 'react-number-format'

type Props = {
    id: string
    label?: string
    type: 'text' | 'password' | 'email' | 'currency' | 'number'
    onChange(value: any): void
    value: string | number
    placeholder?: string
    beforeElement?: React.ReactNode
    afterElement?: React.ReactNode
    className?: string
    labelClassName?: string
    inputClassName?: string
    min?: string | number
    max?: string | number
    disabled?: boolean
}

export default function Input({ id, label, type, onChange, value, placeholder, beforeElement, afterElement, className, inputClassName, labelClassName, min, max, disabled }: Props) {
    return (
        <div className="grid gap-1">
            {label && <label className={["capitalize", labelClassName].join(' ')} htmlFor={id}>{label}</label>}
            <div className={["flex gap-4 justify-between items-center border-2 border-[C6C6C6] p-3 rounded-md bg-white", className].join(' ')}>
                {beforeElement && <span className="select-none">{beforeElement}</span>}
                {
                    type == 'currency' ?
                        <NumericFormat
                            id={id}
                            type="text"
                            className={["w-full bg-white focus:outline-none", inputClassName].join(' ')}
                            onValueChange={(value) => onChange(value.floatValue)}
                            value={value ?? ''}
                            placeholder={placeholder}
                            thousandSeparator="."
                            decimalSeparator=","
                            autoComplete="off"
                            allowNegative={false}
                            disabled={disabled}
                            min={min}
                            max={max}
                        /> :
                        type == 'number' ?
                            <NumericFormat
                                id={id}
                                type="text"
                                className={["w-full bg-white focus:outline-none", inputClassName].join(' ')}
                                onValueChange={(value) => onChange(value.floatValue)}
                                value={value ?? ''}
                                placeholder={placeholder}
                                autoComplete="off"
                                allowNegative={false}
                                disabled={disabled}
                                min={min}
                                max={max}
                            /> :
                            <input
                                id={id}
                                type={type}
                                className={["w-full bg-white focus:outline-none", inputClassName].join(' ')}
                                onChange={(e) => onChange(e.target.value)}
                                value={value ?? ''}
                                placeholder={placeholder}
                                autoComplete="off"
                                disabled={disabled}
                            />
                }
                {afterElement && <span className="select-none">{afterElement}</span>}
            </div>
        </div>
    )
}