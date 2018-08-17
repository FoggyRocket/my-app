import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {Provider} from 'react-redux';
import configureStore from "./redux/store/configureStore";
import registerServiceWorker from './registerServiceWorker';
export const store = configureStore();



const ReduxProvider = ()=>(
    <Provider store={store}>
        <App
            Valor={store.getState()}
            Sumar={ ()=> store.dispatch({type: "SUMAR"}) }
            Restar={ ()=> store.dispatch({type: "RESTAR"}) }
        />
    </Provider>
)
const render  = () =>{
    ReactDOM.render(<ReduxProvider/>, document.getElementById('root'));
}

store.subscribe(render);
render();
registerServiceWorker();
