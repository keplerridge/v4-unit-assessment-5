const initialState = {
    username: '',
    profilePic: ''
}

const {username, profilePic} = initialState,
      UPDATE_USER = 'UPDATE_USER',
      LOGOUT = 'LOGOUT';

export function logout(){
    return{
        tpye: LOGOUT,
    }
}

export function updateUser(userObj){

    return{
        type: UPDATE_USER,
        payload: userObj
    }
}

export function logout(){

}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_USER:
            return {...state}
        case LOGOUT:
            return username = '', profilePic = ''
        default:
            return state;
    }
}