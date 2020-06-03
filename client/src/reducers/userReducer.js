import { DATA_LIST} from "../Actions/types";

const initialState = {
	dataList:[]
}
const userReducer = (currentState = initialState, action) => {
    switch (action.type) {
    	case DATA_LIST:
	  	return {
	  		...currentState, dataList: action.payload
	  	};
        default:
            return currentState
    }
}
export default userReducer;