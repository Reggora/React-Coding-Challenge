export default function (state = [], action) {
	console.log(action)
	switch(action.type) {
		case 'CAT_ADDED':
			return Object.assign([], state, state.concat(action.data));
		case 'CAT_SAVED':
			let saveArray = [...state];
			saveArray.map((cat, index) => {
				if(cat.name == action.removeCat.name) {
					saveArray.splice(index, 1)
					saveArray.splice(index, 0, action.addCat);
				}
			})
			return saveArray
		case 'CAT_DELETED':
			console.log(action)
			let array = [...state];
			array.map((cat, index) => {
				if(cat.name == action.data.name) {
					array.splice(index, 1)
				}
			})
			return array
    	default:
    		return state
	}	
}