export default function (state = [], action) {
	switch(action.type) {
		case 'CAT_ADDED':
		 	//return Object.assign([], state, state.push(action.data));
		 	return state.concat(action.data)
    	default:
    		return state
	}	
}