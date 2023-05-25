import DetailModal from "./Detail"
import EditModal from "./Edit"

type Props = {
    id?: string
}

export default function Modals({ id }: Props) {
    return (
        <>
            {id && (
                <>
                    <EditModal id={id} />
                    <DetailModal id={id} />
                </>
            )}
        </>
    )
}