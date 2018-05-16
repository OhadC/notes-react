import React from 'react'

const NotesItem = props => {
    return (
        <li onClick={props.onClick}>
            {props.item.name}
        </li>
    )
}

export default NotesItem
