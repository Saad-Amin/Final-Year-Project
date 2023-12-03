import React from 'react'
import './box.scss'

const Box = props => {
    const className = {
        box: 'box',
        purple: props.purple && 'box-secondary',
        fullheight: props.fullheight && 'box-fullheight'
    }

    return (
        <div className={Object.values(className).join(' ')}>
            {props.children}
        </div>
    )
}

export default Box
