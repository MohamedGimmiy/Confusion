import * as ActionTypes from './ActionTypes'

export const Leaders = (state = {
    isLoading: true,
    errMess: null,
    leaders:[]
}, action) => {
    switch(action.type){

        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, errMess:null, leaders:[]};
        
        case ActionTypes.LEADERS_FAILD:
            return {...state, isLoading: false, errMess: action.payload, leaders:[]};
        
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, errMess: null, leaders: action.payload}

        // todo 
        default:
            return state;
    }
}