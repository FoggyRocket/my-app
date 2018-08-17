import {createStore} from 'redux';
//import rootReducer from "../reducers/rootReducer";
import {contadorReducer} from "../reducers/contadorReducer";



export default function configureStore(){
    const store = createStore(
        contadorReducer
    );
    return store;
}
