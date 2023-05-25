import { useDispatch } from 'react-redux'
import { closeModal, openModal } from '@/redux/reducers/modalSlice'

type Props = {
    modalTarget?: string
    className?: string
    children?: JSX.Element[] | JSX.Element
    state?: 'open' | 'close'
    label?: string
    onClick?(value?: any): void
    type: 'button' | 'reset' | 'submit'
    disabled?: boolean
}

export default function Button({ modalTarget, className, type, children, state = 'open', label, onClick, disabled }: Props) {
    const dispatch = useDispatch()

    const clickHandle = () => {
        if (!disabled) {
            if (onClick) {
                onClick()
            }

            if (state == 'open') {
                dispatch(openModal({ id: modalTarget }))
            } else {
                dispatch(closeModal({ id: modalTarget }))
            }
        }
    }

    return (
        <button
            type={type}
            onClick={modalTarget ? clickHandle : onClick}
            className={['flex flex-row justify-center items-center gap-2 p-2 rounded-lg cursor-pointer select-none focus-visible:outline-none disabled:cursor-default', className].join(' ')}
            disabled={disabled}
        >
            {label && <p className="capitalize text-inherit">{label}</p>}
            {children}
        </button>
    )
}