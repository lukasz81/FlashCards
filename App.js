import React from 'react';
import {View, StatusBar} from 'react-native';
import {StackNavigator} from 'react-navigation';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import entries from "./reducers";
import {Provider} from 'react-redux';
import setLocalNotification from './utils/helper';
import styles from './styles';
import nav from './utils/navigation'

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
                <View style={[styles.container,{padding:0}]}>
                    <UdaciStatusBar barStyle="light-content"/>
                    <MainNavigator/>
                </View>
            </Provider>
        );
    }
}

const MainNavigator = StackNavigator(nav);
