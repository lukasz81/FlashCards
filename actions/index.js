import {DECKS_STORAGE_KEY} from "../utils/helper";
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const ADD_ENTRY = 'ADD_ENTRY';
export const ADD_CARD = 'ADD_CARD';
import { AsyncStorage } from 'react-native';

export function receiveEntries (decks) {
    return (dispatch) => {
        AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse)
            .then(() =>
                AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(decks), () => {
                    AsyncStorage.getItem(DECKS_STORAGE_KEY)
                        .then(JSON.parse)
                        .then(results => dispatch({
                            type: RECEIVE_ENTRIES,
                            decks: decks,
                            results: results
                        }))
                })
            )
            .catch(error => console.log(error))
    }
}

export function addEntry ({entry,key}) {
    return (dispatch) => {
        AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({[key]: entry}), () => {
            AsyncStorage.getItem(DECKS_STORAGE_KEY)
                .then(JSON.parse)
                .then(result => dispatch({
                    type: ADD_ENTRY,
                    entry: result
                }))
                .catch(error => console.log(error))
        })
    };
}

export function addCard ({card,key}) {
    return (dispatch) => {
        AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse).then(decks => {
            const concatCard = {questions: decks[key].questions.concat(card)};
            AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({[key]: concatCard}), () => {
                AsyncStorage.getItem(DECKS_STORAGE_KEY)
                    .then(JSON.parse)
                    .then(results => dispatch({
                        type: ADD_CARD,
                        decks: results
                    }))
            })
        });
    };
}


