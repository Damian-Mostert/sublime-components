
import React, { Fragment } from 'react'

interface ListProps{
  variant?:string,
  className?:string,
  list?:Array<string>,
  dots?:boolean,
  arrows?:boolean,
  align:"left"|"right"|"center"
}

export function List({
  variant = 'default',
  className = '',
  list = [],
  dots = false,
  arrows = false,
  align = 'center'
}:ListProps) {
  if (!dots && !arrows) dots = true
  return (
    <Fragment>
      <div className='list-container' style={{ textAlign: align }}>
        <ul
          className={`list list-variant-${variant} ${
            dots ? 'list-dots' : arrows ? 'list-arrows' : ''
          } ${className}`}
        >
          {list.map((item, key) => (
            <li key={key} style={{ textAlign: align }}>{item}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  )
}
