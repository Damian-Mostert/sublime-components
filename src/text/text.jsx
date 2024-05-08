

import React, { Fragment } from 'react'

import { Icon } from '../icon/icon'
import { List } from '../list/list'
import { Title } from '../title/title'

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
}) {
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
