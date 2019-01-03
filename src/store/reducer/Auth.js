import * as auth from '../action/Auth'

const initialState = {
    start: false,
    success: false
};


 const reducer = (state = initialState, action) => {
    switch (action.type) {

        case auth.AUTH_SATRT :
            return {
                ...state,
                start: true
            };
        case auth.AUTH_SUCCESS :
            return {
                ...state,
                success: true
            };
        case auth.AUTH_FAIL :
            return {
                ...state,
                success: false
            };


        default :
            return state;

    }

};
 export default reducer;