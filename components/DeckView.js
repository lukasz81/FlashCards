import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux';
import { addEntry } from '../actions';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';


class DeckView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deckName: ''
        };
    }

    componentWillMount(newProps) {
        console.log('DECK VIEW => ',this.props.navigation.state.params.deckName);
        console.log('NEW PROPS => ', newProps);
        this.setState({
            deckName: this.props.navigation.state.params.deckName
        })
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.deckName}`
    });

    render() {
        console.log('DECKS from PROPS =>',this.props.decks);
        const {deckName} = this.state;
        if (this.props.decks[deckName]) {
            const numberOfQuestions = this.props.decks[deckName].questions.length;
            const stringToDisplay = (numberOfQuestions === 0 || numberOfQuestions > 1)
                ? `${numberOfQuestions} CARDS`
                : `${numberOfQuestions} CARD`;
            return (
                <View style={styles.container}>
                    <Text></Text>
                    <Text style={[styles.textHeader, styles.heading]}>
                        {deckName}
                    </Text>
                    <Text style={styles.text}>
                        {stringToDisplay}
                    </Text>
                    <MaterialCommunityIcons
                        style={{textAlign: 'center'}}
                        name='cards'
                        color={'#fff'}
                        size={100}/>
                    <View>
                        {numberOfQuestions > 0 && (
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('QuizView', {deckName: deckName})}
                                style={styles.primaryButton}>
                                <Text style={styles.buttonText}>Start quiz</Text>
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity
                            style={numberOfQuestions > 0 ? styles.secondaryButton : styles.primaryButton}
                            onPress={() => this.props.navigation.navigate('EntryQuestions', {deckName: deckName})}>
                            <Text style={styles.buttonText}>Add new question</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else {
            return (
                <Text>LOADING</Text>
            )
        }
    }

}

function mapStateToProps (state) {
    return {
        decks: state
    }
}

export default connect(mapStateToProps,null)(DeckView)
