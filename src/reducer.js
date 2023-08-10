const initialState = {counter: 0};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INC':
			return {
				...state,
				counter: state.counter + 1
			};
		case 'DEC':
			return {
				...state,
				counter: state.counter - 1
			};
		case 'RND':
			return {
				...state,
				counter: state.counter * action.payload
			};
		default:
			return state;
	}
}
//ф-ція reducer завжди має бути чистою ф-єю. Має залежати тільки від state та action, має повертати однаковий результат при тих самих аргументах і не мати побічних ефектів

export default reducer;