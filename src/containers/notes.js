import React, { Component } from 'react';

import NotesList from '../components/notes-list'
import Note from '../components/note'

const style = {
    display: 'flex',
    flexDirection: 'row'
}

class Notes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [{
                name: "something",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }, {
                name: "something else",
                content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
            }],
            active: 0
        }
    }

    setActiveNote = index => this.setState({ active: index })

    render() {
        const activeNote = Number.isInteger(this.state.active) ? this.state.items[this.state.active] : null

        return (
            <div style={style}>
                <NotesList style={{}} items={this.state.items} setActiveNote={this.setActiveNote} />
                <Note note={activeNote} />
            </div>
        )
    }
}

export default Notes
