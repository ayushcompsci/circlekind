
// import packages
import clsx from 'clsx'

// import next.js
import Link from 'next/link'

// import frameworks
import React from 'react'

const baseStyles = {

  solid: 'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  empty: 'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm text-normal outline-2 outline-offset-2 transition-colors',

}

const variantStyles = {

  solid: {
    cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },

  empty: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },

}

export const Button = function Button({ 
  variant = 'solid', 
  color = 'gray', 
  className, 
  href, 
  ...props
}) {

  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return (
    <Link  href={href} className={className} {...props}>
      <button className={className} {...props} />
    </Link>
  )
  
}
