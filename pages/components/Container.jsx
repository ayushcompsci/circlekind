// import packages
import clsx from 'clsx'

// import frameworks
import React from 'react'

const Container = ({ className, ...props }) => {
  return (
    <div
        className={clsx('container mx-auto px-4 sm:px-6 lg:px-8', className)}
        {...props}
    />
  )
}

export default Container