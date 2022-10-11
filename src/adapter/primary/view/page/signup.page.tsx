import React from 'react'
import GoogleLogin from 'react-google-login'
import { GOOGLE_CLIENT_ID } from '../../../../../env'
import { H3 } from 'adapter/primary/view/atom/h3.atom'
import { Divider } from 'adapter/primary/view/atom/divider.atom'
import { useHistory } from 'react-router-dom'
import { AppRoutes } from 'adapter/primary/routes/app-routes'
import { loginWithGoogle } from 'core/use-case/user/login-with-google.use-case'
import { useDispatch } from 'react-redux'

export const SignupPage = () => {

	const history = useHistory()
	const dispatch = useDispatch()
	const handleGoogleLogin = (res: any) => {
		dispatch(loginWithGoogle(res.accessToken))
	}

	return (
		<div className={'w-full h-full'}>
			<div className={'py-12'}>
				<div className={'flex justify-center'}>
					<div className={'bg-white shadow-xl rounded-xl flex flex-col items-center w-10/12 sm:w-4/12 py-6'}>


						<H3>Créer un compte Marketplace immo</H3>

						<div className={'p-8'}>
							<GoogleLogin
								clientId={GOOGLE_CLIENT_ID}
								buttonText="Créer un compte avec Google"
								onSuccess={handleGoogleLogin}
								onFailure={handleGoogleLogin}
								cookiePolicy={'single_host_origin'}
							/>
						</div>
						<Divider/>
						<div className={'pt-4 cursor-pointer text-blueAnchor hover:text-blue'} onClick={() => history.push(AppRoutes.LOGIN)}>Se connecter</div>
					</div>
				</div>
			</div>
		</div>
	)
}
