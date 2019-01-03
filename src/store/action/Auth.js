import axios from '../../axios-order'

export const AUTH_SATRT = 'AUTH_SATRT';
export const AUTH_SUCCESS = 'AUTH_SATRT';
export const AUTH_FAIL = 'AUTH_SATRT';



export const authStartAction = ()=>{
    return{
        type : AUTH_SATRT
    }
};
export const authSuccess = ()=>{
    return{
        type : AUTH_SATRT
    }
};
export const authFail = ()=>{
    return{
        type : AUTH_SATRT
    }
};

export const authStart = (email, password) => {

    return (dispatcher) => {

        // call the API

    }


};
