import * as auth from '../action/Auth'

const initialState = {
    start: false,
    success: false,
    authData : null
};


 const reducer = (state = initialState, action) => {
    switch (action.type) {

        case auth.AUTH_SATRT :
            return {
                authData:null,
                success: false,
                start: true
            };
        case auth.AUTH_SUCCESS :
            return {
                start:false,
                success: true,
                authData: action.value
            };
        case auth.AUTH_FAIL :
            return {
                authData:null,
                start:false,
                success: false
            };


        default :
            return state;

    }

};
 export default reducer;