const initialState = {
    username: '',
    profilePic: ''
}

// const {username, profilePic} = initialState,
const UPDATE_USER = 'UPDATE_USER',
      LOGOUT = 'LOGOUT';

export function logout(){
    return{
        tpye: LOGOUT,
        payload: {}
    }
}

export function updateUser(userObj){

    return{
        type: UPDATE_USER,
        payload: userObj
    }
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_USER:
            return {...state}
        case LOGOUT:
            return initialState
        default:
            return state;
    }
}