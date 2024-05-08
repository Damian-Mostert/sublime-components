
import React, { Fragment } from 'react'

function Table({
  head,
  body,
  foot,
  variant = 'default',
  className = '',
  ...props
}) {
  return (
    <Fragment>
      <table
        className={`table table-variant-${variant} ${className}`}
        {...props}
      >
        {head && (
          <thead className='table-head'>
            {head.map((item, index) => {
              return (
                <tr key={'tr-' + index}>
                  {item.map((sub, subi) => {
                    return <td key={'td-' + index + '-' + subi}>{sub}</td>
                  })}
                </tr>
              )
            })}
          </thead>
        )}
        {body && (
          <tbody className='table-body'>
            {body.map((item, index) => {
              return (
                <tr key={'tr-' + index}>
                  {item.map((sub, subi) => {
                    return <td key={'td-' + index + '-' + subi}>{sub}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        )}
        {foot && (
          <tfoot className='table-foot'>
            {foot.map((item, index) => {
              return (
                <tr key={'tr-' + index}>
                  {item.map((sub, subi) => {
                    return <td key={'td-' + index + '-' + subi}>{sub}</td>
                  })}
                </tr>
              )
            })}
          </tfoot>
        )}
      </table>
    </Fragment>
  )
}

Table.Options = [
  {
    value: 'head'
  }
]

export { Table }
