import ACTIONS from '../actions/'

 
const noms = []
const nomsReducer = (noms = [], action) => {
    switch(action.type){
        case ACTIONS.FETCH_ALL:
            return action.payload;
        default:
            return noms;
    }
}


export default nomsReducer