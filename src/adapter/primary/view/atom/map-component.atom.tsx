import React, { Children, cloneElement, EffectCallback, FC, isValidElement, useEffect, useRef, useState } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { createCustomEqual } from 'fast-equals'
import { isLatLngLiteral } from '@googlemaps/typescript-guards'
import { GOOGLE_MAPS_API_KEY } from '../../../../../env'

interface Props {
	lat: number
	lng: number
}

const render = (status: Status) => {
	return <h1>{status}</h1>
}

export const MapComponent = (props: Props ) => {
	const [zoom, setZoom] = useState(15) // initial zoom
	const [center, setCenter] = useState<google.maps.LatLngLiteral>({
		lat: props.lat,
		lng: props.lng,
	})

	const onClick = (e: google.maps.MapMouseEvent) => {
		// avoid directly mutating state
		window.open(`https://maps.google.com?q=${props.lat},${props.lng}`, '_blank')
		console.log('onClick')
	}

	const onIdle = (m: google.maps.Map) => {
		console.log('onIdle')
		// setZoom(m.getZoom()!)
		// setCenter(m.getCenter()!.toJSON())
	}

	return (
		<div style={{ display: 'flex', height: '100%' }}>
			<Wrapper
				apiKey={GOOGLE_MAPS_API_KEY}
				render={render}
			>
				<Map
					center={center}
					onClick={onClick}
					onIdle={onIdle}
					zoom={zoom}
					style={{ flexGrow: '1', height: '100%' }}
				>
					<Marker position={center} />
				</Map>
			</Wrapper>
		</div>
	)
}

interface MapProps extends google.maps.MapOptions {
	style: { [key: string]: string };
	onClick?: (e: google.maps.MapMouseEvent) => void;
	onIdle?: (map: google.maps.Map) => void;
}

const Map: FC<MapProps> = ({ onClick,onIdle,children,style,...options }) => {
	const ref = useRef<HTMLDivElement>(null)
	const [map, setMap] = useState<google.maps.Map>()

	useEffect(() => {
		if (ref.current && !map) {
			setMap(new window.google.maps.Map(ref.current, {}))
		}
	}, [ref, map])

	// because React does not do deep comparisons, a custom hook is used
	// see discussion in https://github.com/googlemaps/js-samples/issues/946
	useDeepCompareEffectForMaps(() => {
		if (map) {
			map.setOptions(options)
		}
	}, [map, options])

	useEffect(() => {
		if (map) {
			['click', 'idle'].forEach((eventName) =>
				google.maps.event.clearListeners(map, eventName)
			)

			if (onClick) {
				map.addListener('click', onClick)
			}

			if (onIdle) {
				map.addListener('idle', () => onIdle(map))
			}
		}
	}, [map, onClick, onIdle])

	return (
		<>
			<div ref={ref} style={style} />
			{Children.map(children, (child) => {
				if (isValidElement(child)) {
					// set the map prop on the child component
					return cloneElement(child, { map })
				}
			})}
		</>
	)
}

const Marker: FC<google.maps.MarkerOptions> = (options) => {
	const [marker, setMarker] = useState<google.maps.Marker>()

	useEffect(() => {
		if (!marker) {
			setMarker(new google.maps.Marker())
		}

		// remove marker from map on unmount
		return () => {
			if (marker) {
				marker.setMap(null)
			}
		}
	}, [marker])

	useEffect(() => {
		if (marker) {
			marker.setOptions(options)
		}
	}, [marker, options])

	return null
}

const deepCompareEqualsForMaps = createCustomEqual(
	(deepEqual) => (a: any, b: any) => {
		if (
			isLatLngLiteral(a) ||
			a instanceof google.maps.LatLng ||
			isLatLngLiteral(b) ||
			b instanceof google.maps.LatLng
		) {
			return new google.maps.LatLng(a).equals(new google.maps.LatLng(b))
		}

		// TODO extend to other types

		// use fast-equals for other objects
		return deepEqual(a, b)
	}
)

function useDeepCompareMemoize(value: any) {
	const ref = useRef()

	if (!deepCompareEqualsForMaps(value, ref.current)) {
		ref.current = value
	}

	return ref.current
}

function useDeepCompareEffectForMaps(
	callback: EffectCallback,
	dependencies: any[]
) {
	useEffect(callback, dependencies.map(useDeepCompareMemoize))
}
