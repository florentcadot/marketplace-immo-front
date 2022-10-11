import React from 'react'
import { H1 } from 'adapter/primary/view/atom/h1.atom'
import { Button } from 'adapter/primary/view/atom/button.atom'
import { useHistory } from 'react-router-dom'
import { AppRoutes } from 'adapter/primary/routes/app-routes'

export const LeaseSeekingSuccess =  () => {

	const history = useHistory()

	return (
		<div className={'w-full'} style={{ height: `${window.innerHeight - 168}px` }}>
			<div>
				<div className={'text-center py-4 pt-16'}>
					<H1>Merci de nous avoir fait part de votre besoin</H1>
					<H1>nous vous contacterons dans les meilleurs délais</H1>

					<div className={'pt-5'}>
						<Button onClick={() => history.push(AppRoutes.ESPACE_LOCATAIRE)}>
                            Nouvelle recherche
						</Button>
					</div>
				</div>

			</div>
		</div>
	)
}