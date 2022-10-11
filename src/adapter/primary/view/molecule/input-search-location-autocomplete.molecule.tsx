import React, { useState, useEffect, useRef, Dispatch, RefObject } from 'react'
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_API_URL, GOOGLE_MAPS_PLACES_LIB } from '../../../../../env'
import { InputText } from 'adapter/primary/view/atom/input-text.atom'

//https://github.com/Gapur/google-place-autocomplete
//https://betterprogramming.pub/the-best-practice-with-google-place-autocomplete-api-on-react-939211e8b4ce

let autoComplete: google.maps.places.Autocomplete

const loadScript = (url: string, callback: () => void) => {
	const script: any = document.createElement('script')
	script.type = 'text/javascript'

	if (script.readyState) {
		script.onreadystatechange = () => {
			if (script.readyState === 'loaded' || script.readyState === 'complete') {
				script.onreadystatechange = null
				callback()
			}
		}
	} else {
		script.onload = () => callback()
	}

	script.src = url
	document.getElementsByTagName('head')[0].appendChild(script)
}

const handleScriptLoad = (updateQuery: Dispatch<React.SetStateAction<string>>, autoCompleteRef: RefObject<any>, ref: React.ForwardedRef<HTMLInputElement> ) => {

	autoComplete = new window.google.maps.places.Autocomplete(
		autoCompleteRef.current,
		{ types: [], componentRestrictions: { country: 'fr' } }
	)
	autoComplete.setFields(['address_components', 'formatted_address'])
	autoComplete.addListener('place_changed', () =>
		handlePlaceSelect(updateQuery, ref)
	)
}

const handlePlaceSelect = async (updateQuery: Dispatch<React.SetStateAction<string>>, ref: React.ForwardedRef<HTMLInputElement>) => {
	const addressObject = autoComplete.getPlace()
	const query = addressObject.formatted_address
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	updateQuery(query!)
}

interface Props {
	label: string
	name: string
	placeholder?: string
}

export const InputSearchLocationAutocomplete = React.forwardRef(
	({ label, name, placeholder }: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
		const [query, setQuery] = useState('')
		const autoCompleteRef = useRef(null)

		useEffect(() => {
			loadScript(
				`${GOOGLE_MAPS_API_URL}?key=${GOOGLE_MAPS_API_KEY}&libraries=${GOOGLE_MAPS_PLACES_LIB}`,
				() => handleScriptLoad(setQuery, autoCompleteRef, ref)
			)
		}, [])

		return (
			<div>
				{/*TODO*/}
				{/*<input ref={ref}/>*/}
				<InputText
					label={label}
					name={name}
					ref={autoCompleteRef}
					onChange={event => setQuery((event.target as HTMLInputElement).value)}
					value={query}
					placeholder={placeholder? placeholder :  ''}
				/>
			</div>
		)
	})
