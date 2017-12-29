import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import styles from '../styles';
import { connect } from 'react-redux';
import { addCard } from '../actions';


class EntryQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: 'Incorrect'
        };
    }
    onSubmit = () => {
        const card = [this.state];
        const key = this.props.navigation.state.params.deckName.toString();
        this.props.addCard({card,key});
        this.props.navigation.goBack();
    };
    render() {
        return (
            <View style={[styles.container,{flex: 1, backgroundColor: '#333'}]}>
                <View style={{flex: 0.5}}>
                    <Text></Text>
                    <Text style={[styles.textHeader,styles.heading]}>
                        You are adding new question and answer to the card.
                    </Text>
                </View>
                <KeyboardAvoidingView behavior='padding' style={[{flex:0.6}]}>
                    <TextInput
                        style={styles.newDeckInput}
                        onChangeText={(question) => this.setState({question: question})}
                        allowFontScaling={true}
                        placeholder={'Add question'}
                        placeholderTextColor={'#999'}

                    />
                    <Text></Text>
                    <ToggleSwitch
                        style={{marginTop: 100}}
                        isOn={false}
                        onColor='#5fba7d'
                        offColor='#999'
                        label={`... and your answer: ${this.state.answer}`}
                        labelStyle={{color: '#fefefe', fontWeight: '200', minWidth: 200}}
                        onToggle={ (isOn) => this.setState({answer: isOn ? 'Correct' : 'Incorrect'}) }
                    />
                </KeyboardAvoidingView>
                <TouchableOpacity
                    disabled={this.state.question === '' || this.state.answer === ''}
                    style={[styles.primaryButton]}
                    onPress={() => this.onSubmit()}>
                    <Text style={styles.buttonText}>Add this card</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

function mapStateToProps (state) {
    return {
        decks: state
    }
}

export default connect(mapStateToProps,{addCard})(EntryQuestions)
