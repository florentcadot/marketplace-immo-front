import React from 'react'
import { FieldError } from 'react-hook-form'

interface Props {
  label: string
  name: string
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
  error?: FieldError
}

export const Checkbox = React.forwardRef(
	({ onClick, label, name, error }: Props, ref: React.ForwardedRef<HTMLInputElement>) => (
		<div className="w-full flex border border-solid rounded-xl w-full p-4 font-normal text-base font-body box-border appearance-none outline-none">
			<input
				ref={ref}
				name={name}
				onClick={onClick}
				className={`form-checkbox text-primary w-4 h-4 rounded border-2 border-solid  focus:border-black-tertiary appearance-none outline-none mt-1
                    ${error ? 'border-error' : 'border-black-tertiary'}
                `}
				type={'checkbox'}
				id={name}
			/>
			<label
				htmlFor={name}
				className={`ml-2 font-normal leading-relaxed select-none ${
					error ? 'text-error' : 'text-black-primary'
				}`}
			>
				{label}
			</label>
		</div>
	)
)
