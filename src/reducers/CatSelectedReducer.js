export default function (state = null, action) {
	switch(action.type) {
		case 'CAT_SELECTED':
			return action.data;
		default:
			return state;
	}
}