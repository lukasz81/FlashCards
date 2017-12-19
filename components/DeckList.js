import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import { getDecks } from '../utils/helper';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import {Constants} from 'expo';
import styles from '../styles';
import {connect} from "react-redux";
import {receiveEntries} from '../actions';
import { AsyncStorage } from 'react-native';

class DeckList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            decks: {}
        };
    }

    componentDidMount() {
        const decks = getDecks();
        //AsyncStorage.clear();
        this.props.receiveEntries(decks);
    }

    checkIfShouldBePlural = (amount) => {
        return (amount > 1 || amount === 0) ? 'S' : ''
    };

    firstName = () => {
        return Constants.deviceName.split(' ')[0].toUpperCase();
    };

    //TODO how to animate blur on scroll
    // handleScroll = (event) => {
    //     console.log(event.nativeEvent.contentOffset.y/10);
    //     this.setState({
    //         scrollAMount: event.nativeEvent.contentOffset.y / 10
    //     });
    // };

    render() {
        const {decks} = this.props;
        const {navigate} = this.props.navigation;
        //console.log('DECKS => ', decks);
        return (
            <View style={{flex: 1, backgroundColor: '#333'}}>
                <Image blurRadius={0} source={require('../assets/desk-800x533.jpg')} style={styles.imageStyle}/>
                <View style={styles.viewHeader}>
                    <View style={{backgroundColor: 'transparent'}}>
                        <Text style={[styles.heading, styles.textHeader]}>HELLO {this.firstName()}</Text>
                        <Text style={[styles.text, {fontWeight: '100'}]}>Choose your challenge</Text>
                    </View>
                </View>
                <ScrollView
                    onScroll={this.handleScroll}
                    scrollEventThrottle={1}
                    contentContainerStyle={{alignItems: 'center'}}
                    centerContent={false}>
                    {Object.keys(decks).map(deck => {
                        const cardsNumber = decks[deck].questions.length;
                        return (
                            <TouchableOpacity
                                key={decks[deck].title}
                                onPress={() => navigate('DeckView',{
                                    title: decks[deck].title,
                                    deckName: deck,
                                    cards: `${cardsNumber} QUESTION${this.checkIfShouldBePlural(cardsNumber)}`
                                })}>
                                <View style={[styles.deck, styles.shadow]}>
                                    <Text style={[styles.text, styles.heading]}>
                                        {deck}
                                    </Text>
                                    <Text style={styles.text}>
                                        <MaterialCommunityIcons
                                            name='cards'
                                            color={'#fff'}
                                            size={15}/>
                                        {` ${cardsNumber} QUESTION${this.checkIfShouldBePlural(cardsNumber)}`}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                    {( <TouchableOpacity onPress={() => navigate('EntryDeck',{title: 'Add new deck'})}>
                            <View style={[styles.deckAddNew, styles.shadow]}>
                                <Text style={[styles.text, styles.heading]}>
                                    <Ionicons
                                        name='md-add-circle'
                                        color={'#fff'}
                                        size={28}
                                    /> Add new deck
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </View>
        )
    }
}

function mapStateToProps (state) {
    return {
        decks: state
    }
}

function mapDispatchToProps (dispatch) {
    return {
        receiveEntries: (decks) => dispatch(receiveEntries(decks))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeckList)