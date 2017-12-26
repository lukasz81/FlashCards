import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {StackNavigator} from 'react-navigation';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView';
import EntryDeck from './components/EntryDeck';
import QuizView from './components/QuizView';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import entries from "./reducers";
import {Provider} from 'react-redux';
import EntryQuestions from "./components/EntryQuestions";
import FinalView from "./components/FinalView";
import setLocalNotification from './utils/helper'

const store = createStore(
    entries,
    applyMiddleware(thunk)
);

function UdaciStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor}}>
            <StatusBar translucent backgroundColor={'#000'} {...props} />
        </View>
    )
}

export default class App extends React.Component {

    componentDidMount(){
        setLocalNotification()
    }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <UdaciStatusBar barStyle="light-content"/>
                    <MainNavigator/>
                </View>
            </Provider>
        );
    }
}

const header = {
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#333333'
    }
};

const MainNavigator = StackNavigator({
    Home: {
        screen: DeckList,
        navigationOptions: {
            header: null
        }
    },
    EntryDeck: {
        screen: EntryDeck,
        navigationOptions: header
    },
    DeckView: {
        screen: DeckView,
        navigationOptions: header
    },
    EntryQuestions: {
        screen: EntryQuestions,
        navigationOptions: header
    },
    QuizView: {
        screen: QuizView,
        navigationOptions: header
    },
    FinalView: {
        screen: FinalView,
        navigationOptions: {
            header: null
        }
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});
