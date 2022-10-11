import React from 'react'
import { Controller } from 'react-hook-form'
import { FieldErrors } from 'react-hook-form'
import Select from 'react-select'
import Creatable from 'react-select/creatable'
import ValidInput from 'adapter/primary/view/asset/image/valid-input.svg'
import WarningInput from 'adapter/primary/view/asset/image/warning-input.svg'
import ErrorInput from 'adapter/primary/view/asset/image/error-input.svg'

export type InputSelectAutoCompleteValue<T> = {
	value: T
	label: string
}

interface Props {
	label?: string;
	name: string;
	options: { value: string; label: string }[];
	success?: boolean;
	error?: FieldErrors;
	warning?: boolean;
	creatable?: boolean;
	multiple?: boolean;
	required?: boolean;
	control: any;
	placeholder?: string
}

export const InputSelectAutocomplete = ({
	label,
	name,
	success,
	error,
	warning,
	options,
	creatable,
	multiple,
	control,
	required,
	placeholder,
}: Props) => {
	return (
		<label htmlFor={name} className="w-full">
			{
				label && (
					<div className='mb-2 font-normal'>{label}</div>
				)
			}
			<div className="relative flex items-center justify-end">
				{creatable ? (
					<Controller
						placeholder={placeholder? placeholder : 'Select or type'}
						as={Creatable}
						control={control}
						rules={{ required }}
						noOptionsMessage={() => 'Enter value'}
						isMulti={multiple}
						name={name}
						className={`border border-solid rounded-xl w-full px-4 py-2 font-normal text-base font-body box-border appearance-none outline-none 
                        ${success ? 'border-success' : ''}
                        ${error ? 'border-error' : ''}
                        ${warning ? 'border-warning' : ''}
                        ${!success && !error && !warning ? 'border-black-input' : ''}
                    `}
						options={options}
						styles={{
							container: () => ({
								width: '100%',
								height: '100%',
							}),
							control: () => ({
								border: 'none',
								display: 'flex',
							}),
						}}
					/>
				) : (
					<Controller
						placeholder={placeholder ? placeholder : 'Select'}
						as={Select}
						control={control}
						rules={{ required }}
						isMulti={multiple}
						name={name}
						className={`border border-solid rounded-xl w-full px-4 py-2.5 font-normal text-base font-body box-border appearance-none outline-none 
                            ${success ? 'border-success' : ''}
                            ${error ? 'border-error' : ''}
                            ${warning ? 'border-warning' : ''}
                            ${!success && !error && !warning ? 'border-black-input' : ''}
                        `}
						options={options}
						styles={{
							container: () => ({
								width: '100%',
								height: '100%',
							}),
							control: () => ({
								border: 'none',
								display: 'flex',
							}),
						}}
						defaultValue={''}
					/>
				)}

				<div className="absolute h-4 w-4 mr-16">
					{success && <img src={ValidInput} alt="success" />}
					{warning && <img src={WarningInput} alt="warning" />}
					{error?.type === 'required' && <img src={ErrorInput} alt="error" />}
				</div>
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
