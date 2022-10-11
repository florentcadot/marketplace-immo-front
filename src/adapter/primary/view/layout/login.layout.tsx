import React from 'react'
import { LoginHeader } from 'adapter/primary/view/organism/login-header.organism'
import { Footer } from 'adapter/primary/view/organism/footer.organism'

interface Props {
	children: any
}

export const LoginLayout = ({ children }: Props) => {
	return (
		<div className={'w-full flex flex-col h-screen justify-between'}>
			<LoginHeader/>
			{children}
			<Footer/>
		</div>
	)
}
