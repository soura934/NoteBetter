import React from 'react';
import Sidebar from '../../greeting/sidebar';

class NoteIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotes();
    }



    render() { 
        // debugger
        if (this.props.notes === {}){
            return <p>No notes yet!</p>;
        } 
        const noteLi = this.props.notes.map(note => {
            return <li key={note.id}>
                <h2>{note.title}</h2>
                <p>{note.body}</p>
            </li>
        });
        return ( 
            <div>
                {/* {noteLi} */}
            </div>
         );
    }
}
 
export default NoteIndex;