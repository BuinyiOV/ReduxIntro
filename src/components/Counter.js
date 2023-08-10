import { connect } from "react-redux";//зв'язується з провайдером
import * as actions from '../actions'
//import { bindActionCreators } from "redux";

const Counter = ({counter, inc, dec, rnd}) => {
	return (
		<div className="jumbotron">
			<h1 >{counter}</h1>
			<button onClick={dec} className="btn btn-primary">DEC</button>
			<button onClick={inc} className="btn btn-primary">INC</button>
			<button onClick={rnd} className="btn btn-primary">RND</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		counter: state.value
	}
}
// має бути чистою і синхронною

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators(actions, dispatch)
// }
//урок 194 19 хв

export default connect(mapStateToProps, actions)(Counter);