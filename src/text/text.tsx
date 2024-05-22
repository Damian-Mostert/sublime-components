

import React,{Fragment} from 'react'

import { Icon } from '../icon/icon.tsx'
import { List } from '../list/list.tsx'
import { Title } from '../title/title.tsx'

export interface TextProps{
	icon?:string,
	pre?:string,
	title?:string,
	text?:string,
	extra?:string,
	paragraphs?:Array<string>,
	list?:Array<string>,
	variant?:string,
	align?:"left"|"right"|"center",
	className?:string
}

export function Text({
	icon,
	title,
	pre,
	text,
	extra,
	paragraphs = [],
	variant = 'default',
	align = 'center',
	className = '',
	list
}:TextProps) {
	return (
		<Fragment>
		<div className={`text text-variant-${variant} ${className}`}>
		{icon && <Icon icon={icon} />}
		{(title || pre || text || extra) && (
			<Title
				align={align}
				pre={pre}
				text={text}
				extra={extra}
				{...(title ? title : [])}
			/>
		)}
		{paragraphs &&
			paragraphs.map((item, index) => {
				return (
					<p className='text-p' style={{ textAlign: align }} key={index}>
						{item}
					</p>
				)
			})}
		{list && <List align={align} list={list} />}
	</div>

		</Fragment>
	)
}
