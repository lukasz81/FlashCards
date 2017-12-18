import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux'
import { addEntry } from '../actions'


class EntryQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: ''
        };
    }
    onSubmit = () => {
        const entry = {
            title: this.state.text,
            questions: []
        };
        const key = this.state.text.toString();
        this.props.addEntry({entry,key});
        this.props.navigation.goBack();
    };
    render() {
        console.log(this.state);
        return (
            <View style={{flex: 1, backgroundColor: '#333'}}>
                <Text></Text>
                <Text style={[styles.textHeader,styles.heading]}>
                    You are adding new question and answer to the card.
                </Text>
                <Text style={styles.textHeader}>
                    What should they be?
                </Text>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TextInput
                        style={styles.newDeckInput}
                        onChangeText={(question) => this.setState({question: question})}
                        allowFontScaling={true}
                        defaultValue={'Add question'}

                    />
                    <TextInput
                        style={styles.newDeckInput}
                        onChangeText={(answer) => this.setState({answer: answer})}
                        defaultValue={'Add answer'}
                    />
                    <TouchableOpacity
                        disabled={this.state.text === ''}
                        activeOpacity={this.state.text === '' ? 0.5 : 1}
                        style={[styles.primaryButton]}
                        onPress={() => this.onSubmit()}>
                        <Text style={styles.buttonText}>Add this card</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            </View>
        )
    }

}

function mapStateToProps (state) {
    return {
        decks: state.decks
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addEntry: ({entry,key}) => dispatch(addEntry({entry,key}))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EntryQuestions)
