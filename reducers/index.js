import {
    RECEIVE_ENTRIES,
    ADD_ENTRY,
    ADD_CARD,
    REGISTER_FINISHED_QUIZ
} from "../actions/index";

function entries(state={},action) {
    switch(action.type) {
        case RECEIVE_ENTRIES :
            return {
                ...state,
                ...Object.assign(action.decks,action.results)
            };
        case ADD_ENTRY :
            return {
                ...state,
                ...Object.assign(state,action.entry)
            };
        case ADD_CARD :
            return {
                ...state,
                ...Object.assign(state,action.decks)
            };
        default:
            return state
    }
}

export default entries;