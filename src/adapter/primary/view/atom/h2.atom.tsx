import React from 'react'

interface Props {
    children: any;
}

export const H2 = ({ children }: Props) => <h2 className="text-3xl font-semibold m-0 leading-tight">{children}</h2>
