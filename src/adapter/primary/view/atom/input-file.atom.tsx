import React, { useState } from 'react'
import ErrorInput from '../asset/image/error-input.svg'
import { FieldErrors } from 'react-hook-form'
import JpgLogo from '../asset/image/jpg.svg'

interface Props {
  label: string
  name: string
  value: File[]
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
  success?: boolean
  error?: FieldErrors
  warning?: boolean
  type?: 'jpg' | 'pdf'
  preview?: string
  showPreview?: boolean
}

export const InputFile = React.forwardRef(
	(
		{ onClick, label, name, success, error, warning, type, value, preview, showPreview }: Props,
		ref: React.ForwardedRef<HTMLInputElement>
	) => {
		const [imagePreview, setImagePreview] = useState<string>(preview || '')

		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			if (event.target.files) {
				setImagePreview(URL.createObjectURL(event.target.files[0]))
			}
		}

		const acceptType = () => {
			switch (type) {
			case 'jpg':
				return 'image/jpeg'
			case 'pdf':
				return '.pdf'
			default:
				return '*'
			}
		}

		return (
			<div className="w-full">
				<label className="relative flex flex-col">
					<div
						className={`border border-solid rounded-xl w-full p-4 font-normal text-base font-body box-border appearance-none outline-none cursor-pointer
                                    ${success ? 'border-success' : ''}
                                    ${error ? 'border-error' : ''}
                                    ${warning ? 'border-warning' : ''}
                                    ${!success && !error && !warning ? 'border-black-input' : ''}
                                `}>
						<div className="flex items-center overflow-hidden">
							<div className="flex aligns-center mr-6">
								<div className="mr-4">{type === 'jpg' && <img src={JpgLogo} alt="jpg" />}</div>
								<div className="leading-7">{label}</div>
							</div>
							<div>
								{value && value[0] && (
									<div className="mr-4 text-gray-500 w-24">{value[0].name}</div>
								)}
							</div>
						</div>
						{imagePreview && showPreview !== false && (
							<div className="flex justify-center">
								<div className="mt-4 w-48 h-48 rounded-xl flex justify-center">
									<img
										className="object-cover w-full h-full rounded-xl"
										src={imagePreview}
										alt="preview"
									/>
								</div>
							</div>
						)}
						<input
							ref={ref}
							name={name}
							className="hidden"
							onClick={onClick}
							type={'file'}
							accept={acceptType()}
							onChange={handleChange}
						/>
					</div>
				</label>
				{error && error?.type !== 'required' && (
					<div className="flex items-center mt-2">
						<img src={ErrorInput} alt="warning" />
						<div className="ml-2 text-black-secondary">{error?.message}</div>
					</div>
				)}
			</div>
		)
	}
)
