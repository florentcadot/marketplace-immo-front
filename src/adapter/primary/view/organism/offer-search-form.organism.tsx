import React, { useEffect, useState } from 'react'
import { InputText } from 'adapter/primary/view/atom/input-text.atom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GetOffersViewModel } from 'adapter/primary/view/view-model/get-offers.view-model'
import { useDispatch } from 'react-redux'
import { getOffers } from 'core/use-case/offer/get-offers.use-case'
import { InputSelectAutocomplete } from 'adapter/primary/view/atom/input-select-autocomplete.atom'
import { REGIONS } from 'adapter/primary/view/asset/data/france-regions'
import { Button } from 'adapter/primary/view/atom/button.atom'
import { DateTimePicker } from 'adapter/primary/view/atom/date-time-picker.atom'
import { AssetType } from 'core/domain/asset/asset'

export const OfferSearchForm = () => {
	const dispatch = useDispatch()
	const { register, handleSubmit, control, reset, errors, getValues } = useForm<GetOffersViewModel>({
		defaultValues: {
			startDate: '',
			endDate: '',
		},
	})
	const onSubmit: SubmitHandler<GetOffersViewModel> = (form) => {
		dispatch(getOffers(form))
	}
	const [assetTypeOptions] = useState(
		Object.values(AssetType).map((assetType) => ({
			value: assetType,
			label: assetType[0].toUpperCase() + assetType.substring(1),
		}))
	)

	const handleReset = () => {
		reset()
		dispatch(getOffers({}))
	}

	return <form onSubmit={handleSubmit(onSubmit)}>
        
		<div className={'flex gap-3 items-center'}>

			<InputText
				placeholder={'Ville'}
				name={'city'}
				error={errors.city}
				ref={register({ required: false })}
			/>

			<InputSelectAutocomplete
				name={'region'}
				error={errors.region}
				control={control}
				options={REGIONS}
				placeholder={'Région'}
			/>

			<InputSelectAutocomplete
				name={'type'}
				error={errors.type}
				control={control}
				options={assetTypeOptions}
				placeholder={'Bureaux, entrepôt ...'}
			/>

			<DateTimePicker
				name={'startDate'}
				control={control}
				placeholder={'Date de départ'}
			/>

			<DateTimePicker
				name={'endDate'}
				control={control}
				placeholder={'Date limite'}
			/>

			<div className={'text-center'}>
				<Button type={'submit'}>
					Rechercher
				</Button>
				<div className={'mt-2'}>
					<Button type={'button'} secondary onClick={() => handleReset()}>
						Réinitialiser
					</Button>
				</div>
			</div>

		</div>
	</form>
}