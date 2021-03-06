import React from 'react';
import NoteList from "./note_list"
import EditorContainer from "./editor_container"
import { Route } from 'react-router-dom';
import Editor from './editor';

class NoteIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotes();
    }
    componentDidUpdate(prevProps){
        if(prevProps.notes.length !== this.props.notes.length){
            this.props.fetchNotes();
        }
    }

    render() { 
        return ( <>
        <div className="list-of-notes">
            <div className="notes-list-header">
                <div className="notes-header-title">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="notes-sub-header">
                    <p className="notes-count">{this.props.notes.length} notes</p>
                </div>
            </div>
            <div className="notes-list-body">
                <NoteList notes={this.props.notes} notebookId={this.props.notebookId}/>
            </div>
        </div>
    </>

         );
    }
}
 
export default NoteIndex;