
import React, { Fragment } from 'react'

import { useDevice } from '../modules/useDevice'

export function Lg({ children }) {
  const device = useDevice()
  return <Fragment>{device.lg && <>{children}</>}</Fragment>
}

export function Md({ children }) {
  const device = useDevice()
  return <Fragment>{device.md && <>{children}</>}</Fragment>
}
