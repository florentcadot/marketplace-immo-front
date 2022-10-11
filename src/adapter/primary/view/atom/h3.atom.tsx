import React from 'react'

interface Props {
    children: any;
}

export const H3 = ({ children }: Props) => (
	<h3 className="text-2xl font-title font-semibold m-0 leading-tight">{children}</h3>
)
