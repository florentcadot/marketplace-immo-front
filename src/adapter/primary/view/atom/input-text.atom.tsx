import React from 'react'
import ValidInput from '../asset/image/valid-input.svg'
import WarningInput from '../asset/image/warning-input.svg'
import ErrorInput from '../asset/image/error-input.svg'
import { FieldError } from 'react-hook-form'

interface Props {
  label?: string
  name: string
  placeholder?: string
  value?: string
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  success?: boolean
  error?: FieldError
  warning?: boolean
  type?: 'number' | 'password'
  disabled?: boolean
}

export const InputText = React.forwardRef((
	{
		onClick,
		onChange,
		label,
		name,
		value,
		placeholder,
		success,
		error,
		warning,
		type,
		disabled,
	}: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
	return (
		<label htmlFor={name} className='w-full'>
			{
				label && (
					<div className='mb-2 font-normal'>{label}</div>
				)
			}
			<div className='relative flex items-center justify-end'>
				<input
					id={name}
					ref={ref}
					name={name}
					className={`border border-solid rounded-xl w-full p-4 font-normal text-base font-body box-border appearance-none outline-none 
                            ${success ? 'border-success' : ''}
                            ${error ? 'border-error' : ''}
                            ${warning ? 'border-warning' : ''}
                            ${!success && !error && !warning ? 'border-black-input' : ''}
                        `}
					onClick={onClick}
					onChange={onChange}
					type={type || 'text'}
					placeholder={placeholder}
					value={value}
					disabled={disabled ? disabled :  false}
				/>
				<div className='absolute h-4 w-4 mr-4'>
					{success && <img src={ValidInput} alt='success' />}
					{warning && <img src={WarningInput} alt='warning' />}
					{error?.type === 'required' && <img src={ErrorInput} alt='error' />}
				</div>
			</div>
			{error && error.type !== 'required' && error.message && (
				<div className='flex items-center mt-2'>
					<img src={ErrorInput} alt='warning' />
					<div className='ml-2 text-black-secondary'>{error.message}</div>
				</div>
			)}
		</label>
	)
}
)
