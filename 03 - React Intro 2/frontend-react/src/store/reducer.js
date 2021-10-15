import {POST_ADD, POST_REMOVE, USER_LOGOUT, USER_LOGIN} from "./actions"

const postReducer = (state, action) => {
    switch(action.type) {
        case POST_ADD:
            return {
                ...state,
                data: state.data.concat(action.payload)
            };
        case POST_REMOVE:
            return  {
                ...state
            };
        default:
            return state
    }
}

const authReducer = (state, action) => {
    switch(action.type) {
        case USER_LOGIN:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            }
        case USER_LOGOUT:
            return {
                ...state,
                token: null,
                user: null
            }
        default:
            return state
    }
}

export {postReducer, authReducer}