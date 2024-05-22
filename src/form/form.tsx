import React,{Fragment} from 'react'

import { useState } from 'react'
import { Text, TextProps } from '../text/text.tsx'
import { Input, InputProps } from '../input/input.tsx'
import { Button, ButtonProps } from '../button/button.tsx'

/* const makeHandleFormSubmit = (onsubmit) => {
	let [keys, type] = onsubmit.split("::");
	var Key0 = keys.split(".")[0];
	var Key1 = keys.split(".")[1];
	const service = services[Key0][Key1];
	return async (input) => {
		return service
			? await (async function () {
				let res = await service(input, { fire: true }, {}, type == "client");
				if (res?.success)
					switch (keys) {
						//trigger on auth routes
						case `${process.env.NEXT_PUBLIC_AUTH_MODULE_SERVICE}.${process.env.NEXT_PUBLIC_AUTH_MODULE_LOGIN_KEY}`:
						case `${process.env.NEXT_PUBLIC_AUTH_MODULE_SERVICE}.${process.env.NEXT_PUBLIC_AUTH_MODULE_REGISTER_KEY}`:
							localStorage.setItem(
								process.env.NEXT_PUBLIC_AUTH_LOCAL_STORAGE_KEY,
								res.data.token
							);
							useUser.mutate();
					}
				return res?.success;
				})()
			: false;
	};
}; */

interface FormProps{
	className?:string,
	variant?:string,
	text?:TextProps,
	submittedText?:TextProps,
	fields:Array<InputProps>,
	button?:ButtonProps,
	onSubmit?:any
}

export function Form({
	className = '',
	variant = 'default',
	fields = [],
	text,
	button,
	onSubmit = () => {},
	submittedText
}:FormProps) {
	const [submitted, setSubmitted] = useState(false)

	var busy = false

	const handleSubmit = async (ev) => {
		ev.preventDefault()
		if (!busy) {
			busy = true
			var valid = true
			let result = {}
			fields.map((input) => {
				if (input?.ref?.current && input.name) {
					result[input.name] = input.ref.current.value
					const validation = input.ref.current.validate()
					if (valid) valid = validation
				}
			})
			if (valid) {
				setSubmitted(await onSubmit(result))
			}
			busy = false
		}
	}

	return (
		<Fragment>
		<form
			onSubmit={handleSubmit}
			className={`form form-variant-${variant} ${className}`}
		>
			{!submitted && (
				<>
					{text && <Text {...text} />}
					<div className='form-fields'>
						{fields.map((item, index) => {
							return <Input key={index} {...item} />
						})}
					</div>

					<Button label='Submit' {...button} className='mx-auto' />
				</>
			)}
			{submitted && <>{submittedText && <Text {...submittedText} />}</>}
		</form>
			</Fragment>
	)
}

import { useRef } from 'react'

Form.new = function (props) {
	return (
		<Fragment>

			<Form
				{...props}
				fields={props?.fields?.map((field, index) => ({
					ref: useRef(index),
					...field
				}))}
			/>
		</Fragment>
	)
}
