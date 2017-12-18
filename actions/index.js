import {DECKS_STORAGE_KEY} from "../utils/helper";
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const ADD_ENTRY = 'ADD_ENTRY';
import { AsyncStorage } from 'react-native';

export function receiveEntries(decks) {
    return (dispatch) => {
        AsyncStorage.getItem(DECKS_STORAGE_KEY)
            .then(JSON.parse)
            .then(results => dispatch({
                type: RECEIVE_ENTRIES,
                decks: decks,
                results: results
            }))
            .catch(error => console.log(error))
    }
}

export function addEntry ({entry,key}) {
    return (dispatch) => {
        AsyncStorage.mergeItem(
            DECKS_STORAGE_KEY,
            JSON.stringify({
                [key]: entry
            })).then(() => dispatch({
                type: ADD_ENTRY,
                entry: {[key]: entry}
            }))
            .catch(error => console.log(error))
    };
}