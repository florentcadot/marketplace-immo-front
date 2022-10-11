import React from 'react'
import { InputText } from 'adapter/primary/view/atom/input-text.atom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GetOffersViewModel } from 'adapter/primary/view/view-model/get-offers.view-model'
import { useDispatch } from 'react-redux'
import { Button } from 'adapter/primary/view/atom/button.atom'
import { GetCustomerNeedsViewModel } from 'adapter/primary/view/view-model/get-customer-needs.view-model'
import { getCustomerNeeds } from 'core/use-case/customer-need/get-customer-needs.use-case'
import { Checkbox } from 'adapter/primary/view/atom/checkbox.atom'
import { DateTimePicker } from 'adapter/primary/view/atom/date-time-picker.atom'

export const CustomerNeedSearchForm = () => {
	const dispatch = useDispatch()
	const { register, handleSubmit, errors, control, reset } = useForm<GetOffersViewModel>(
		{
			defaultValues: {
				startDate: '',
				endDate: '',
			},
		}
	)
	const onSubmit: SubmitHandler<GetCustomerNeedsViewModel> = (form) => {
		dispatch(getCustomerNeeds(form))
	}

	const handleReset = () => {
		reset()
		dispatch(getCustomerNeeds({}))
	}


	return <form onSubmit={handleSubmit(onSubmit)}>

		<div className={'flex gap-3 items-center'}>
			<InputText
				placeholder={'Ville'}
				name={'city'}
				error={errors.city}
				ref={register({ required: false })}
			/>

			<DateTimePicker
				name={'startDate'}
				control={control}
				placeholder={'Date de départ'}
			/>

			<Checkbox
				label={'Espace de travail'}
				name={'office'}
				ref={register({ required: false })}
			/>

			<Checkbox
				label={'Entrepôt'}
				name={'warehouse'}
				ref={register({ required: false })}
			/>

			<Checkbox
				label={'Atelier'}
				name={'workshop'}
				ref={register({ required: false })}

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