import {POST_ADD, POST_REMOVE, USER_LOGOUT, USER_LOGIN, POSTS_UPDATE} from "./actions"

const postReducer = (state, action) => {
    switch(action.type) {
        case POST_ADD:
            return {
                ...state,
                data: state.data.concat(action.payload)
            };
        case POST_REMOVE:
            fetch('http://localhost:8081/api/post/delete/' + action.payload, {
                method: 'DELETE',
            })
            return  {
                ...state,
                data: state.data.filter(post => post._id !== action.payload)
            };

            //Kodutööna uue listi vastuvõtmine
        case POSTS_UPDATE:
            return {
                ...state,
                data: action.payload
            }
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
                user: {
                    id: action.payload.id,
                    email: action.payload.email,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName
                }
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