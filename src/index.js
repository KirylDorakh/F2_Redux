import React from "react";
import ReactDOM from "react-dom";

import { createRoot } from "react-dom/client";
import {createStore} from "redux";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css"

// import App from "./components/App"
import ReduxApp from "./App-redux";

import reducers from "./redux/reducers/index"

const store = createStore(reducers)

// const initialState = {
//     libraries: ['redux', 'react'],
//     frameworks: ['angular']
// }

// const store = createStore(changeStore);

// function changeStore(state =initialState, action){
//     // console.log('1', state)
//     switch (action.type) {
//         case "ADD_LIBRARY":
//             return {
//                 ...state,
//                 libraries: [...state, action.payload]
//             }
//             break;
//         case "ADD_FRAMEWORKS":
//             return {
//                 ...state,
//                 frameworks: [...state, action.payload]
//             }
//             break;
//
//         case "DELETE_LIBRARY":
//             return state
//             break;
//
//         case "DELETE_FRAMEWORK":
//             return state
//             break;
//         default: return state
//     }
//     return state
// }

// const items = document.querySelector('.testUl');
// const testBtn = document.querySelector('.testBtn')
// const inputValue = document.querySelector('.testInput');
//
// store.subscribe(() => {
//     items.innerHTML = ''
//
//     document.querySelector('.testInput').value = ''
//
//     store.getState().map(item => {
//         const li = document.createElement('li');
//         li.textContent = item;
//         items.appendChild(li)
//     })
// })


// testBtn.addEventListener('click', () => {
//     console.log("INPUT", inputValue.value);
//     store.dispatch({ type: "WRITE", payload: inputValue.value})
// })


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <ReduxApp />
    </Provider>
);
