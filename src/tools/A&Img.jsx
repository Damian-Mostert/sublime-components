


//import Image from "next/image";
//import Link from "next/link";

import React, { Fragment } from 'react'

export function Img({ ...props }) {
  return (
    <Fragment>
      <img {...props} />
    </Fragment>
  )
}

export function A(props) {
  return <Fragment><a {...props} /></Fragment>
}
