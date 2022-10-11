import React, { useState } from 'react'
import LogoImage from 'adapter/primary/view/asset/image/logo-full.png'
import { Button } from 'adapter/primary/view/atom/button.atom'
import { useHistory } from 'react-router-dom'
import { UserIcon } from '@heroicons/react/solid'
import { AppRoutes } from 'adapter/primary/routes/app-routes'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'store'
import { UserState } from 'store/user/user.types'
import { Dropdown, MenuItem } from 'adapter/primary/view/atom/dropdown.atom'
import { logout } from 'core/use-case/user/logout.use-case'
import { UserRole } from 'core/domain/user/user'

export const LeaseSeekerHeader = () => {
	const history = useHistory()
	const userState = useSelector<AppState, UserState>((state) => state.user)
	const user = userState.user.get.data
	const dispatch = useDispatch()
	const [adminMenuItems]= useState<MenuItem[]>([
		{ label: 'Admin panel', action: ()=> history.push(AppRoutes.ADMIN) },
		{ label: 'Se déconnecter', divider: true, action: () => dispatch(logout()) },
	])
	const [visitorMenuItems]= useState<MenuItem[]>([
		{ label: 'Se déconnecter', divider: true, action: () => dispatch(logout()) },
	])

	return (
		<div className={'p-4 grid grid-cols-2 gap-3 shadow-md'}>
			<div className={'flex items-align'}>
				<img className='height-logo w-200 cursor-pointer' src={LogoImage} onClick={() => history.push(AppRoutes.ESPACE_LOCATAIRE)}/>
				<div className={'ml-20 mt-3'}>
					{window.location.href.includes(AppRoutes.ESPACE_LOCATAIRE) ? (
						<Button secondary type="button" onClick={() => history.push(AppRoutes.ESPACE_PROPRIETAIRE)}>
								Espace propriétaire
						</Button>
					) : (

						<div className='flex gap-3'>
							<Button secondary type="button" onClick={() => history.push(AppRoutes.ESPACE_LOCATAIRE)}>
								Espace locataire
							</Button>
							{
								(user?.role === UserRole.OWNER || user?.role === UserRole.ADMIN) && (
									<Button secondary type="button" onClick={() => history.push(AppRoutes.ESPACE_PROPRIETAIRE_PANEL)}>
										Liste des besoins utilisateurs
									</Button>
								)
							}

						</div>

					)}
				</div>
			</div>
			<div className={'flex justify-end  mt-3'}>

				<div className={'mr-3'}>
					<Button type="button" secondary transparent onClick={() => window.open('https://florentcadot.com/', '_blank')}>
						Qui sommes-nous ?
					</Button>
				</div>

				{
					user?.id ? (
						<div>
							<Dropdown menuItems={user.role === UserRole.ADMIN ? adminMenuItems : visitorMenuItems}>
								<div className={'flex items-align'}>
									<div className={'w-icon-desktop h-icon-desktop'}>
										<UserIcon />
									</div>
									<div className={'ml-2'}>{user.fullName}</div>
								</div>
							</Dropdown>

						</div>
					) : (
						<Button type="button" onClick={() => history.push(AppRoutes.LOGIN)}>
							<div className={'flex items-align'}>
								<div className={'w-icon-desktop h-icon-desktop'}>
									<UserIcon />
								</div>
								<div className={'ml-2'}>Se connecter</div>
							</div>
						</Button>
					)
				}
			</div>
		</div>
	)
}
