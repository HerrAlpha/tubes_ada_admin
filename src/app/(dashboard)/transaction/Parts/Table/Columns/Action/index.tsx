import Button from '@/components/Button'
import { MoreVerticalIcon } from '@/constants/icons'
import { Listbox } from '@headlessui/react'

type Props = {
    onClick: (value: any) => void
}

const ActionColumn = ({ onClick }: Props) => {
    return (
        <Listbox>
            <div className="relative font-roboto" >
                <Listbox.Button className="p-2" onClick={onClick}>
                    <MoreVerticalIcon />
                </Listbox.Button>
                <Listbox.Options className="absolute top-[10%] right-[80%] mt-1 overflow-hidden rounded-md bg-white text-base shadow-lg z-20 focus:outline-none sm:text-sm">
                    <Listbox.Option value>
                        <Button
                            type="button"
                            label="detail"
                            modalTarget="detail-modal"
                            className='w-full px-4 font-medium transition-all rounded-none hover:text-white hover:bg-secondary-orange !justify-start'
                        />
                    </Listbox.Option>
                    <Listbox.Option value>
                        <Button
                            type="button"
                            label="edit"
                            modalTarget="edit-modal"
                            className='w-full px-4 font-medium transition-all rounded-none hover:bg-secondary-orange hover:text-white !justify-start'
                        />
                    </Listbox.Option>
                </Listbox.Options>
            </div>
        </Listbox>
    )
}

export default ActionColumn