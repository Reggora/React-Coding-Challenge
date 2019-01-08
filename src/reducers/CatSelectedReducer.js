export default function (state = null, action) {
	switch(action.type) {
		case 'CAT_SELECTED':
			return action.data;
		case 'CAT_SAVED':
			return action.addCat;
		case 'CAT_DELETED':
			if(action.data.name == state.name){
				return null
			} else {
				return state
			}
		default:
			return state;
	}
}