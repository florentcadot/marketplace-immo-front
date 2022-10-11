import React from 'react'

interface Props {
  children: any
  type?: 'button' | 'submit' | 'reset'
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  secondary?: boolean
  transparent?: boolean
  medium?: boolean
  full?: boolean
  success?: boolean
  disabled?: boolean
  small?: boolean
  loading?: boolean
}

export const Button = ({
	children,
	onClick,
	secondary,
	transparent,
	medium,
	small,
	full,
	success,
	disabled,
	type,
	loading,
}: Props) => {
	const classState = () => {
		if (success)
			return 'text-white no-underline bg-success border-solid border border-white cursor-not-allowed'
		if (secondary)
			return `text-primary bg-white border-solid border border-primaryLight ${
				loading ? '' : 'hover:shadow-secondaryButton'
			}`
		return `text-white bg-primary border-solid border border-white ${
			loading || success ? '' : 'hover:bg-primaryLight'
		}`
	}

	return (
		<button
			type={type}
			disabled={disabled || loading || success}
			className={`text-base no-underline p-4 transition duration-500 appearance-none outline-none whitespace-nowrap 
                ${classState()}
                ${loading ? 'cursor-wait' : 'cursor-pointer'} 
                ${transparent ? 'bg-transparent' : ''}
                ${medium ? 'p-6' : ''}
                ${small ? 'py-3 px-6 rounded-md uppercase font-bold' : 'rounded-full'}
                ${full ? 'w-full' : ''}
                ${disabled ? 'cursor-not-allowed opacity-20' : ''}
             `}
			onClick={onClick}
			style={{ fontSize: small ? '12px' : 'inherit' }}>
			{loading ? 'loading' : children}
		</button>
	)
}
