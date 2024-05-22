
import React,{Fragment} from 'react'

export interface TitleProps{
	pre?:string,
	text?:string,
	extra?:string,
	align?:"left"|"right"|"center",
	variant?:string,
	className?:string
}

export function Title({
	pre,
	text = '',
	extra = '',
	align = 'center',
	variant = 'default',
	className = ''
}:TitleProps) {
	return (
		<Fragment>
			<div className={`title-variant-${variant} ${className}`}>
				{pre && (
					<pre
						className={`title-variant-${variant}-pre`}
						style={{ textAlign: align }}
					>
						{pre}
					</pre>
				)}
				<h2
					className={`title-variant-${variant}-text`}
					style={{ textAlign: align }}
				>
					{text}
					{extra && (
						<>
							<span className={`title-variant-${variant}-text-extra`}>
								{extra}
							</span>
						</>
					)}
				</h2>
			</div>
		</Fragment>
	)
}
