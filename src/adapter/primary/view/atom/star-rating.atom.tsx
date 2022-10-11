import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

interface Props {
	name?: string
	value?: number
	starCount?: number
	onStarClick?: (nextValue: number, prevValue: number, name: string) => void
	onStarHover?: (nextValue: number, prevValue: number, name: string)=> void
	onStarHoverOut?: (nextValue: number, prevValue: number, name: string)=> void
	renderStarIconHalf?: (nextValue: number, prevValue: number, name: string)=> void
	starColor?: string
	emptyStarColor?: string
	editing?: boolean
}

export const StarRating = (props: Props) => (
	<StarRatingComponent
		name={props.name ? props.name : 'rating'}
		value={props.value? props.value : 0 }
		starCount={props.starCount ? props.starCount : 10}
		onStarClick={props.onStarClick}
		onStarHover={props.onStarHover}
		onStarHoverOut={props.onStarHoverOut}
		starColor={props.starColor}
		emptyStarColor={props.emptyStarColor}
		editing={props.editing ? props.editing :  false }
	/>
)
