import axios from 'axios'
import * as Utils from '../../Utils'

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

export const authStart = (email, password, isSignin) => {

    return (dispatcher) => {

        dispatcher(authStartAction());


        let url ="";
        if(isSignin){
            url= "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key="+Utils.FIREBASE_KEY;
        }else{
            url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key="+Utils.FIREBASE_KEY;
        }

        // call the API
        axios.post(url,

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
