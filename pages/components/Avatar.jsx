
// import frameworks
import React from 'react'

// <Avatar name="Ayush Kumar"/>

const Avatar = props => {

    const name = props.name.split(' ')
    const initials = name[0].substring(0, 1) + name[1].substring(0, 1)

    return (
        <span className="inline-flex h-10 w-10 items-center font-display justify-center rounded-full bg-slate-400">
            <span className="text-base font-medium leading-none text-white">{initials}</span>
        </span>
    )
}

export default Avatar