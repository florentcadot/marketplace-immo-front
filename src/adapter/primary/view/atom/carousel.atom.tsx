import React, { useState } from 'react'
import ReactCarousel, { autoplayPlugin, Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

interface Props {
  width?: number
  padding: number
  numberOfSlides: number
  children: any
}

export const Carousel = ({ width, padding, numberOfSlides, children }: Props) => {

	const [value, setValue] = useState(0)

	const handleChange = (value: number) => {
		setValue(value)
	}

	return (
		<div>
			<ReactCarousel
				plugins={[
					'infinite',
					'centered',
					{
						resolve: slidesToShowPlugin,
						options: {
							numberOfSlides,
						},
					},
					{
						resolve: autoplayPlugin,
						options: {
							interval: 5000,
						},
					},
				]}
				animationSpeed={1000}
				onChange={handleChange}
				slides={children}
				value={value}
			/>
			<Dots value={value} onChange={handleChange}   number={children.length} />
		</div>
	)
}
