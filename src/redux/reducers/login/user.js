import user from '../../actions/auth'

const user = (
    state = {isLoggedIn: false, user: undefined},
    action
    ) => {
    switch (action.type) {
    case LOGIN_SUCCESS: {
    return {isLoggedIn: true, user: action.payload}
    }
    case LOGIN_ERROR: {
    return {...state, error: action.payload}
    }
    case LOGOUT_SUCCESS: {
    return {isLoggedIn: false, user: undefined}
    }
    default: {
    return state
    }
    }
}