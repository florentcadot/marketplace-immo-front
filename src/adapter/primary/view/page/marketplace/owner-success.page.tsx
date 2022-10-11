import React from 'react'
import { H1 } from 'adapter/primary/view/atom/h1.atom'
import { Button } from 'adapter/primary/view/atom/button.atom'
import { useHistory } from 'react-router-dom'
import { AppRoutes } from 'adapter/primary/routes/app-routes'

export const OwnerSuccess =  () => {

	const history = useHistory()

	return (
		<div className={'w-full h-full'}  style={{ height: `${window.innerHeight - 168}px` }}>
			<div>
				<div className={'text-center py-4 pt-16'}>
					<H1>Nous avons bien reçu les informations relatives à votre actif</H1>
					<H1>nous vous contacterons dans les meilleurs délais</H1>

					<div className={'pt-5'}>
						<Button onClick={() => history.push(AppRoutes.ESPACE_LOCATAIRE)}>
							Envoyer pour un autre actif
						</Button>
					</div>
				</div>

			</div>
		</div>
	)
}