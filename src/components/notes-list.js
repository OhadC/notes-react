import React from 'react'
import NotesItem from './notes-item'

const NotesList = props => {
    return (
        <ul>
            {props.items.map((item, idx) => <NotesItem item={item} key={idx} onClick={props.setActiveNote.bind(null, idx)} />)}
        </ul>
    )
}

export default NotesList
