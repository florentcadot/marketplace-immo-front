import React from 'react'

interface Props {
  children: any
}

export const H1 = ({ children }: Props) => (
	<h1 className="text-4xl font-title font-semibold leading-tight">{children}</h1>
)
