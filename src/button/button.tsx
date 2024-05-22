
import React,{Fragment} from 'react'

import Link from "next/link";

export interface ButtonProps{
	label:string,
	variant?:string,
	href?:string,
	onClick?:any,
	target?:string,
	className?:string
};

export function Button({
	label,
	variant = "default",
	href,
	onClick,
	target,
	className,
	...props
}:ButtonProps) {
	return (
		<Fragment>
			{href && (
				<Link
					href={href}
					target={target || "_self"}
					className={`button button-variant-${variant} ${className}`}
					{...props}
				>
					<span />
					{label}
				</Link>
			)}
			{!href && !target && (
				<button
					className={`button button-variant-${variant} ${className}`}
					onClick={onClick}
					{...props}
				>
					<span />
					{label}
				</button>
			)}
			{!href && target && (
				<label
					className={`button button-variant-${variant} ${className}`}
					onClick={onClick}
					htmlFor={target}
					{...props}
				>
					<span />
					{label}
				</label>
			)}
		</Fragment>
	);
}
