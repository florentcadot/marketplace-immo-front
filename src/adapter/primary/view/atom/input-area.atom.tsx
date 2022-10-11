import React from 'react'

interface Props {
  label: string
  name: string
  onClick?: (event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => void
  rows?: number
}

export const InputArea = React.forwardRef(
	({ onClick, label, rows, name }: Props, ref: React.ForwardedRef<HTMLTextAreaElement>) => (
		<div className="w-full">
			<div className="mb-2 font-normal">{label}</div>
			<textarea
				ref={ref}
				name={name}
				rows={rows || 4}
				className="border border-solid border-black-input rounded-xl w-full p-4 font-normal text-base font-body box-border appearance-none outline-none max-w-full"
				onClick={onClick}
			/>
		</div>
	)
)
