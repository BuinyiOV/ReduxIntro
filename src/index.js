import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore, bindActionCreators} from 'redux'
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

const update = () => {
	document.getElementById('counter').textContent = getState().value;
}


subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
// 	dispatch(creator(...args));
// }
// //bindActionCreator вбудована в redux (bindActionCreators)
const {inc, dec, rnd} = bindActionCreators(
	//const {incDispatch, decDispatch, rndDispatch} = bindActionCreators(
	// {
	// incDispatch: inc,
	// decDispatch: dec,
	// rndDispatch: rnd
	// }
	//це все замінить actions який несе в собі inc, dec, rnd
	actions, dispatch);

// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);
// //аргументи з rnd збере ...args з ф-ї bindActionCreator 


document.getElementById('inc').addEventListener('click', inc)

document.getElementById('dec').addEventListener('click', dec)

document.getElementById('rnd').addEventListener('click', () => {
	const value = Math.floor(Math.random() * 10);
	rnd(value);
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<>
		
		</>
	</React.StrictMode>
);
