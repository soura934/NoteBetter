import { 
    RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS,
    UNMOUNT_ERRORS
 } from "../actions/session_actions";

 const sessionErrorsReducer = (oldState = [], action) => {
     Object.freeze(oldState);
     switch (action.type) {
         case RECEIVE_ERRORS:
             return action.errors;
            case RECEIVE_CURRENT_USER, UNMOUNT_ERRORS:
                return [];
         default:
             return oldState;
     }

 }
 export default sessionErrorsReducer;