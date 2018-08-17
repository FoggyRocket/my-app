
export const contadorReducer = (state = 0, action) => {
    switch(action.type){
        case "SUMAR":
            return state + 1;
        case "RESTAR":
            if(state < 1) return 0;
            return state - 1;
        default:
            return state;
    }
};