import React, { useEffect, useState } from 'react'
import { H1 } from '../../atom/h1.atom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from 'adapter/primary/view/atom/button.atom'
import { InputText } from 'adapter/primary/view/atom/input-text.atom'
import { InputSelectAutocomplete } from 'adapter/primary/view/atom/input-select-autocomplete.atom'
import { InputFile } from 'adapter/primary/view/atom/input-file.atom'
import { Checkbox } from 'adapter/primary/view/atom/checkbox.atom'
import { InputArea } from 'adapter/primary/view/atom/input-area.atom'
import { AssetTarget, AssetType } from 'core/domain/asset/asset'
import { CreateAssetViewModel } from 'adapter/primary/view/view-model/create-asset.view-model'
import { useDispatch } from 'react-redux'
import { createAsset } from 'core/use-case/asset/create-asset.use-case'
import { DateTimePicker } from 'adapter/primary/view/atom/date-time-picker.atom'
import { REGIONS } from 'adapter/primary/view/asset/data/france-regions'

export const OwnerHome = () => {
	const { register, handleSubmit, errors, control, watch, setValue } = useForm<CreateAssetViewModel>()
	const dispatch = useDispatch()
	const sendForm: SubmitHandler<CreateAssetViewModel> = (form) => {
		dispatch(createAsset({ ...form }))
	}
	const [assetTypeOptions] = useState(
		Object.values(AssetType).map((assetType) => ({
			value: assetType,
			label: assetType[0].toUpperCase() + assetType.substring(1),
		}))
	)
	const [assetTargetOptions] = useState(
		Object.values(AssetTarget).map((assetType) => ({
			value: assetType,
			label: assetType[0].toUpperCase() + assetType.substring(1),
		}))
	)

	const assetStandardsCompliance = watch('assetStandardsCompliance')

	useEffect(() => {
		setValue('assetCountry', 'France')
	}, [])

	return (
		<div className={'w-full h-full bg-owner-home bg-cover'}>
			<div className={'py-12'}>
				<div className={'flex justify-center'}>
					<div className={'bg-white shadow-xl rounded-xl w-6/12'}>
						<div className={'text-center p-4 shadow-md'}>
							<H1>Vous souhaitez louer votre actif ?</H1>

							<H1>Remplissez le formulaire.</H1>
						</div>

						<div className={'mt-4 px-12'}>
							<form onSubmit={handleSubmit(sendForm)}>
								<div className={'grid grid-cols-2 gap-4'}>

									<div className={'col-span-2 grid grid-cols-2 gap-4'}>
										<InputText
											label={'Nom de l\'actif'}
											name={'assetName'}
											ref={register({ required: true })}
											placeholder={'Le Millénaire'}
											error={errors.assetName}
										/>
									</div>

									<InputText
										label={'Pays'}
										name={'assetCountry'}
										ref={register({ required: true })}
										error={errors.assetCountry}
									/>

									<InputSelectAutocomplete
										label={'Région'}
										name={'assetRegion'}
										error={errors.assetRegion}
										control={control}
										options={REGIONS}
										placeholder={'Île-de-France, Bretagne ...'}
										required
									/>


									<InputText
										label={'Code postal'}
										type={'number'}
										name={'assetPostCode'}
										ref={register({ required: true })}
										placeholder={'93300'}
										error={errors.assetPostCode}
									/>

									<InputText
										label={'Ville'}
										name={'assetCity'}
										ref={register({ required: true })}
										placeholder={'Aubervilliers'}
										error={errors.assetCity}
									/>

									<InputText
										label={'Rue'}
										name={'assetStreet'}
										ref={register({ required: true })}
										placeholder={'Rue Madeleine Vionnet'}
										error={errors.assetStreet}
									/>

									<InputText
										label={'Numéro'}
										name={'assetBuildingNumber'}
										ref={register({ required: true })}
										placeholder={'23'}
										error={errors.assetBuildingNumber}

									/>

									<InputSelectAutocomplete
										label={'Typologie d\'actif'}
										name={'assetType'}
										error={errors.assetType}
										control={control}
										required={true}
										options={assetTypeOptions}
										placeholder={'Bureaux, entrepôt ...'}
									/>

									<InputSelectAutocomplete
										label={'Cibles'}
										name={'assetTarget'}
										error={errors.assetTarget}
										control={control}
										required={true}
										options={assetTargetOptions}
										placeholder={'Start-ups, profession libérale ...'}
									/>

									<div className={'col-span-2 grid grid-cols-2 gap-4'}>
										<div className={'grid grid-cols-1 gap-4'}>

											<InputText
												label={'Surface totale (en m2)'}
												type={'number'}
												name={'assetArea'}
												ref={register({ required: true })}
												error={errors.assetArea}
											/>

											<InputText
												label={'Nombre de locaux'}
												type={'number'}
												name={'offerQuantity'}
												ref={register({ required: true })}
												error={errors.offerQuantity}
											/>

											<InputText
												label={'Loyer recherché (en €)'}
												type={'number'}
												name={'offerPrice'}
												ref={register({ required: true })}
												error={errors.offerPrice}
											/>
										</div>
									</div>

									<DateTimePicker
										label={'Date de départ'}
										name={'offerStartDate'}
										control={control}
										placeholder={'Selectionner une date de départ'}
										error={errors.offerStartDate}
									/>

									<DateTimePicker
										label={'Date de fin'}
										name={'offerEndDate'}
										control={control}
										placeholder={'Selectionner une date de fin'}
										error={errors.offerEndDate}
									/>

									<div className={'col-span-2 grid grid-cols-2 gap-4'}>
										<div className={'grid grid-cols-1 gap-4'}>
											<Checkbox
												label={'Votre actif nécessite-il une remise aux normes ?'}
												name={'assetStandardsCompliance'}
												ref={register({ required: false })}
												error={errors.assetStandardsCompliance}
											/>

											{
												assetStandardsCompliance === true && (
													<InputArea
														label={'Remise aux normes nécessaires'}
														name={'assetStandardsRehabilitation'}
														ref={register({ required: false })}
														rows={3}
													/>
												)
											}
										</div>
									</div>


									{/*<div className={'mt-7'}>*/}
									{/*	<InputFile*/}
									{/*		label={'Photos'}*/}
									{/*		name={'assetPhotos'}*/}
									{/*		value={watch('assetPhotos')}*/}
									{/*		type={'jpg'}*/}
									{/*		ref={register({ required: false })}*/}
									{/*	/>*/}
									{/*</div>*/}

									<div className={'col-span-2 w-full'}>
										<InputArea
											label={'Présenter votre actif en quelques lignes...'}
											name={'offerDescription'}
											ref={register({ required: false })}
											rows={10}
										/>
									</div>
								</div>

								<div className={'flex justify-center my-4'}>
									<Button type={'submit'} medium={true}>
										Envoyer
									</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
