import ValidInput from 'adapter/primary/view/asset/image/valid-input.svg'
import WarningInput from 'adapter/primary/view/asset/image/warning-input.svg'
import ErrorInput from 'adapter/primary/view/asset/image/error-input.svg'
import React from 'react'
import { FieldError, Controller, Control } from 'react-hook-form'
import ReactDatePicker from 'react-datepicker'

interface Props {
  label?: string
  name: string
  control: Control
  success?: boolean
  error?: FieldError
  warning?: boolean
  required?: boolean
  placeholder?: string
}

export const DateTimePicker = ({
	label,
	name,
	success,
	error,
	warning,
	control,
	required,
	placeholder,
}: Props) => {

	return (
		<label htmlFor={name} className="w-full">
			{label && <div className="mb-2 font-normal">{label}</div> }
			<div className="relative flex items-center" >
				<Controller
					control={control}
					name={name}
					rules={{ required }}
					render={(props) => (
						<ReactDatePicker
							placeholderText={placeholder ? placeholder : ''}
							onChange={(e) => props.onChange(e)}
							selected={props.value}
							className={`border border-solid rounded-xl w-full p-4 font-normal text-base font-body box-border appearance-none outline-none
					                  ${success ? 'border-success' : ''}
					                  ${error ? 'border-error' : ''}
					                  ${warning ? 'border-warning' : ''}
					                  ${!success && !error && !warning ? 'border-black-input' : ''}
					              `}
						/>
					)}
				/>

				{/*<div className="absolute h-4 w-4 mr-4">*/}
				{/*	{success && <img src={ValidInput} alt="success" />}*/}
				{/*	{warning && <img src={WarningInput} alt="warning" />}*/}
				{/*	{error?.type === 'required' && <img src={ErrorInput} alt="error" />}*/}
				{/*</div>*/}
			</div>
			{error && error.type !== 'required' && error.message && (
				<div className="flex items-center mt-2">
					<img src={ErrorInput} alt="warning" />
					<div className="ml-2 text-black-secondary">{error.message}</div>
				</div>
			)}
		</label>
	)
}

