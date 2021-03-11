import * as ActionTypes from './ActionTypes';

/**
 * returns a new state
 * @param {state that needs to be provieded to create a new state} state 
 * @param {action that crates a new state} action 
 */
export const Comments = (state = {
    errMess: null,
    comments:[]
}, action) => {
    switch(action.type){
            case ActionTypes.ADD_COMMENTS:
                return {...state, isLoading: false, errMess: null, comments: action.payload}

            case ActionTypes.COMMENTS_FAILED:
                return {...state, isLoading: false, errMess: action.payload, comments: []}
            
            case ActionTypes.ADD_COMMENT:
                let comment = action.payload;
                // add new comment to our comments
                return {...state, comments: state.comments.concat(comment)};
        default:
            return state;
    }
}