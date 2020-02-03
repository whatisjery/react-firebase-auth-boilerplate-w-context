import * as type from "./authType";

export const initalState = {
    loading: false
};

export const reducer = (state, action) => {
    switch (action.type) {
        case type.AUTH_TRY:
            return { ...state, loading: true };
        case type.AUTH_SUCCESS:
            return { ...state, loading: false };
        case type.AUTH_ERROR:
            return { ...state, loading: false };
        default:
            return state;
    }
};
