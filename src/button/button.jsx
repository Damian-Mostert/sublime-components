
import React, { Fragment } from 'react'

//import Link from "next/link";

export function Button({
  label,
  variant = "default",
  href = null,
  onClick = null,
  target = null,
  className,
  ...props
}) {
  return (
    <Fragment>
      {href && (
        <a
          href={href}
          target={target || "_self"}
          className={`button button-variant-${variant} ${className}`}
          {...props}
        >
          <span />
          {label}
        </a>
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
