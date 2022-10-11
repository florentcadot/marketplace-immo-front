import React from 'react'
import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'

interface Props {
    isOpen: boolean
    onClose: () => void
    title?: string
    description?: string
	children: any
	closeOnClickOverlay?: boolean
	closeButton?: boolean
}

export const Modal = ({ isOpen, onClose, title, description, children, closeOnClickOverlay, closeButton }: Props) => {

	const overlayStyle = 'fixed inset-0 bg-black-primary opacity-30 cursor-pointer'

	return (
		<Dialog open={isOpen}
			onClose={() => onClose()}
			as='div'
			className='fixed z-10 inset-0 overflow-y-auto flex justify-center items-center'
		>

			{
				closeOnClickOverlay ? (
					<Dialog.Overlay className={overlayStyle}/>
				) : (
					<div className={overlayStyle}/>
				)
			}


			<div className='relative bg-white text-black-primary rounded-md p-5 w-1/4 py-8 px-4'>


				{
					closeButton && (
						<div className={'flex justify-end mr-6'}>
							<div className={'w-icon-desktop h-icon-desktop cursor-pointer'} onClick={() => onClose()}>
								<XIcon className='fill-current text-primary'/>
							</div>
						</div>
					)
				}


				<Dialog.Title className={'bg-white text-xl text-center'}>{title}</Dialog.Title>
				{
					description && (
						<Dialog.Description className='text-center'>
							{description}
						</Dialog.Description>
					)
				}
				{children}
			</div>
		</Dialog>
	)
}