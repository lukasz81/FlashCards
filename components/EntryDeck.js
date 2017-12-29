import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux'
import { addEntry } from '../actions'


class EntryDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    static navigationOptions = ({ navigation }) => ({
        title: `New Deck`
    });

    onSubmit = () => {
        const entry = {
            title: this.state.text,
            questions: []
        };
        const key = this.state.text.toString();
        if (this.props.decks.hasOwnProperty(key)) {
            alert(`Deck with the name ${key} already exists.`);
            return
        }
        this.props.addEntry({entry,key});
        this.props.navigation.navigate('DeckView',{
            title: key,
            deckName: key,
            cards: `0 QUESTIONS`
        })
    };
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#333'}}>
                <Text></Text>
                <Text style={[styles.textHeader,styles.heading]}>
                    You are adding a new deck to the game.
                </Text>
                <Text style={styles.textHeader}>
                    What name would you like to give it?
                </Text>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TextInput
                        style={styles.newDeckInput}
                        onChangeText={(text) => this.setState({text})}
                        allowFontScaling={true}
                        autoFocus={true}
                        placeholder={'Deck title'}
                        placeholderTextColor={'#999'}
                    />
                    <TouchableOpacity
                        disabled={this.state.text === ''}
                        activeOpacity={this.state.text === '' ? 0.5 : 1}
                        style={[styles.primaryButton]}
                        onPress={() => this.onSubmit()}>
                        <Text style={styles.buttonText}> Add this deck </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            </View>
        )
    }

}

const mapStateToProps = decks => ({ decks });

export default connect(mapStateToProps,{addEntry})(EntryDeck)
