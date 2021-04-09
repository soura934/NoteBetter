import { connect } from 'react-redux';
import React from 'react';
import { fetchNotes } from '../../../actions/note_actions';
import { withRouter } from "react-router-dom";
import NoteIndex from './note_index';

const mstp = (state, ownProps) => {
    allNotes = Object.values(state.entities.notes);
    sortedNotes = allNotes.sorted(allNotes.updated_at);
    return {
        notes: sortedNotes,
        title: 'All Notes'
    }
}

const mdp = (dispatch) => {
    return {
        fetchNotes: () => dispatch(fetchNotes())
    }
}

export default connect(mstp, mdp)(NoteIndex);