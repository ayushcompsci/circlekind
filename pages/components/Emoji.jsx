
// import frameworks
import React from 'react'

// <Emoji label="sheep" symbol="🐑"/>

const Emoji = props => {
    return (
        <span
            className="emoji"
            role="img"
            aria-label={props.label ? props.label : ""}
            aria-hidden={props.label ? "false" : "true"}
        >
            {props.symbol}
        </span>
    )
}

export default Emoji