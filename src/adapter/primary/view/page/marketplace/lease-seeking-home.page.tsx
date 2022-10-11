import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { DateTimePicker } from '../../atom/date-time-picker.atom'
import { Checkbox } from '../../atom/checkbox.atom'
import { Button } from '../../atom/button.atom'
import { H1 } from '../../atom/h1.atom'
import { InputText } from 'adapter/primary/view/atom/input-text.atom'
import { useHistory } from 'react-router-dom'
import { AppRoutes } from 'adapter/primary/routes/app-routes'
import { CreateCustomerNeedViewModel } from 'adapter/primary/view/view-model/create-customer-need.view-model'

export const LeaseSeekingHome = () => {
	const { register, handleSubmit, control, getValues , errors } = useForm<CreateCustomerNeedViewModel>()
	const history = useHistory()
	const [showError, setShowError] = useState(false)
	const onSubmit: SubmitHandler<CreateCustomerNeedViewModel> = (form) => {
		if(!form.office && !form.workshop && !form.warehouse){
			setShowError(true)
		} else {
			setShowError(false)
			history.push({ pathname: AppRoutes.ESPACE_LOCATAIRE_FINALISER_RECHERCHE, state: { createCustomerNeedForm: form } })
		}
	}
	const [advancedSearch, setAdvancedSearch] = useState<boolean>(false)

	return (
		<div>
			<div>
				<div className={'w-full'}>
					<div className={'flex justify-center bg-lease-seeking-home bg-no-repeat bg-cover'}>
						<div className={'w-750 my-250 h-500'}>
							<p className={'font-bold text-white text-5xl text-center'}>Marketplace immo, la seule plateforme qui cherche des locaux à votre place</p>

							<div className={'shadow-2xl mt-4 bg-white rounded-xl'}>
								<div className={'p-5'}>
									<form onSubmit={handleSubmit(onSubmit)}>
										<div className={'flex items-center gap-3'}>
											<div className={'w-4/6'}>
												<InputText
													label={'Dans quelle ville ?*'}
													name={'city'}
													ref={register({ required: true })}
													placeholder={'Lyon, Paris, Lille ...'}
													error={errors.city}
												/>
											</div>

											<div className={'w-2/6'}>
												<DateTimePicker
													label={'À partir de*'}
													name={'startDate'}
													control={control}
													placeholder={'Sélectionner une date'}
													error={errors.startDate}
													required
												/>
											</div>
										</div>


										<div className={'text-primary underline my-4 ml-1 cursor-pointer'}
											onClick={() => setAdvancedSearch(!advancedSearch)}>
											{
												advancedSearch ? <>Moins de filtres</> : <>Plus de filtres</>
											}
										</div>

										{
											advancedSearch && (
												<div className={'grid grid-cols-2 gap-4'}>
													<InputText
														label={'Surface min (en m2)'}
														type={'number'}
														name={'minArea'}
														ref={register({ required: false })}
													/>

													<InputText
														label={'Surface max (en m2)'}
														type={'number'}
														name={'maxArea'}
														ref={register({ required: false })}
													/>

													<InputText
														label={'Budget mensuel (en €)'}
														type={'number'}
														name={'price'}
														ref={register({ required: false })}
													/>
												</div>
											)
										}

										<div className={'grid grid-cols-4 mt-3'}>
											<div className={'col-span-2 w-full p-4'}>
												<Checkbox
													label={'Espace de travail'}
													name={'office'}
													ref={register({ required: false })}
												/>
											</div>

											<div className={'w-full py-4'}>
												<Checkbox
													label={'Entrepôt'}
													name={'warehouse'}
													ref={register({ required: false })}
												/>
											</div>

											<div className={'w-full p-4'}>
												<Checkbox
													label={'Atelier'}
													name={'workshop'}
													ref={register({ required: false })}

												/>
											</div>
										</div>
										{showError && <div className={'text-error'}> Veuillez cocher au moins une des cases ci-dessus</div>}
										<div className={'flex justify-center mt-4'}>
											<Button type={'submit'} medium={true}>
                                               Continuer
											</Button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>

					<div className={'mt-12'}>
						<div className={'ml-3'}>
							<H1>En savoir plus</H1>
						</div>
						<div className={'bg-lightBlue bg-cover p-20 flex justify-center'}>
							<iframe width="853" height="480" src="https://www.youtube.com/embed/BhqQFs7huwU"
								title="YouTube video player" frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
