import React, {useRef} from "react";
import { connect  } from "react-redux";

function ReduxApp(props) {
    const inputValue = useRef(null)
    function addLibrary(){
        let elem = inputValue.current.value
        console.log('action done', elem)
        props.addElement(elem)
        inputValue.current.value = ''
    }

    console.log(props)
    return (
        <div>
            <input type="type" ref={inputValue}/>
            <button onClick={addLibrary}>Click</button>
            <ul key={1}>
                {props.libraries.map(lib =>
                    <li key={lib}> {lib} </li>
                )}
            </ul>
            <ul key={2}>
                {props.frameworks.map(fr =>
                    <li key={fr}> {fr} </li>
                )}
            </ul>
        </div>
    )
}


// class ReduxApp extends React.Component {
//     addLibrary(){
//         console.log('action done', this.inputValue.value)
//         this.props.addElement(this.inputValue.value)
//         this.inputValue.value = ''
//     }
//
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <input type="type" ref={(input) => { this.inputValue = input }}/>
//                 <button onClick={this.addLibrary.bind(this)}>Click</button>
//                 <ul>
//                     {this.props.testStore.map(item =>
//                         <li key={item}> {item} </li>
//                     )}
//                 </ul>
//             </div>
//         )
//     }
// }

const ConnectedReduxApp = connect(
    // mapStateToPropes
    state => ({
        libraries: state.libraries,
        frameworks: state.frameworks
    }),
    // mapDispatchToPropes
    dispatch => ({
        addElement: (elem) => {
            dispatch({type: "ADD_LIBRARY", payload: elem})
        }
    })
)(ReduxApp)

export default ConnectedReduxApp;