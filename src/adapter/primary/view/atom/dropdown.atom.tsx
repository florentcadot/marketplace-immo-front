import React from 'react'
import { Menu } from '@headlessui/react'

export interface  MenuItem {
	label: string
	divider?: boolean
	action: () => void
}

interface  Props {
	children: any
	menuItems: MenuItem[]
}

export const Dropdown = ({ children, menuItems }: Props) => {
	return (
		<Menu>
			<Menu.Button>
				<div className={`bg-white border-solid 
				border text-base p-4 whitespace-nowrap rounded-full
				`}>
					{children}
				</div>
			</Menu.Button>
			<Menu.Items className={'absolute z-10 bg-white w-44'}>

				{
					menuItems.map((item, index)=>(
						<Menu.Item key={index}>
							{({ active }) => (
								<div onClick={() => item.action()} className={`cursor-pointer p-3 ${item.divider ? 'border-t': ''} hover:bg-primary hover:text-white`}>
									{item.label}
								</div>
							)}
						</Menu.Item>
					))
				}
			</Menu.Items>
		</Menu>
	)
}