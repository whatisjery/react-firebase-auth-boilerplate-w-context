import * as type from "./authType";

export const initalState = {
    loading: false,
    errorMsg: null
};

export const reducer = (state, action) => {
    switch (action.type) {
        case type.AUTH_TRY:
            return { ...state, loading: true };
        case type.AUTH_SUCCESS:
            return { ...state, loading: false };
        case type.AUTH_ERROR:
            return { ...state, loading: false, errorMsg: action.payload };
        case type.AUTH_CLEAN_UP:
            return { ...state, loading: false, errorMsg: null };
        default:
            return state;
    }
};
