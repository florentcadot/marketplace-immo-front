import React from 'react'

interface Props {
    marginY?: number
}

export const Divider = (props: Props) => (
	<div style={{ height: 1 }} className={`bg-divider w-full ${props.marginY ? 'my-' + props.marginY : '' }`}/>
)
