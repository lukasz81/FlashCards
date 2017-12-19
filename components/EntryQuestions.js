import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux';
import { addCard } from '../actions';


class EntryQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: ''
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
            <View style={{flex: 1, backgroundColor: '#333'}}>
                <View style={{flex: 0.5}}>
                    <Text></Text>
                    <Text style={[styles.textHeader,styles.heading]}>
                        You are adding new question and answer to the card.
                    </Text>
                </View>
                <KeyboardAvoidingView behavior='padding' style={[styles.container,{flex:0.5}]}>
                    <TextInput
                        style={styles.newDeckInput}
                        onChangeText={(question) => this.setState({question: question})}
                        allowFontScaling={true}
                        placeholder={'Add question'}
                        placeholderTextColor={'#999'}

                    />
                    <TextInput
                        style={styles.newDeckInput}
                        onChangeText={(answer) => this.setState({answer: answer})}
                        placeholder={'Add answer'}
                        placeholderTextColor={'#999'}
                    />
                    <TouchableOpacity
                        disabled={this.state.question === '' || this.state.answer === ''}
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
        decks: state
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addCard: ({card,key}) => dispatch(addCard({card,key}))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EntryQuestions)
