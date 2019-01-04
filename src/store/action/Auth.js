import axios from 'axios'

export const AUTH_SATRT = 'AUTH_SATRT';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_SATRT';



export const authStartAction = ()=>{
    return{
        type : AUTH_SATRT
    }
};
export const authSuccess = (authData)=>{
    return{
        type : AUTH_SUCCESS,
        value: authData
    }
};
export const authFail = ()=>{
    return{
        type : AUTH_FAIL
    }
};

export const authStart = (email, password) => {

    return (dispatcher) => {

        dispatcher(authStartAction());

        // call the API
        axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyABowARG5mI-D-e439qOts6y4bVtvpMImE",
            {
                email: email,
                password:password,
                returnSecureToken: true
            })
            .then(res =>{
                console.log(res);
                dispatcher(authSuccess(res));
            }).catch(error=>{
                console.log(error);
                dispatcher(authFail());
        })
    }


};
