import React from 'react'
import LogoFullImage from 'adapter/primary/view/asset/image/logo-full.png'
import { useHistory } from 'react-router-dom'
import { AppRoutes } from 'adapter/primary/routes/app-routes'

export const LoginHeader = () => {
	const history = useHistory()
	return (
		<div className={'p-4 shadow-md flex justify-center'}>
			<img className='w-200 height-logo cursor-pointer' src={LogoFullImage} onClick={() => history.push(AppRoutes.ESPACE_LOCATAIRE)}/>
		</div>
	)
}
