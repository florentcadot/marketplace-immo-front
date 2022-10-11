import React from 'react'
import { LeaseSeekerHeader } from 'adapter/primary/view/organism/visitor-header.organism'
import { Footer } from 'adapter/primary/view/organism/footer.organism'

interface Props {
  children: any
}

export const VisitorLayout = ({ children }: Props) => {
	return (
		<div className={'h-full w-full flex flex-col justify-between'}>
			<LeaseSeekerHeader />
			{children}
			<Footer/>
		</div>
	)
}
