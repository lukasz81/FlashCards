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

    componentWillMount() {
        this.setState({
            deckName: this.props.navigation.state.params.deckName
        })
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.deckName}`
    });

    render() {
        const {deckName} = this.state;
        const numberOfQuestions = this.props.decks[deckName].questions.length;
        const stringToDisplay = (numberOfQuestions === 0 || numberOfQuestions > 1)
            ? `${numberOfQuestions} CARDS`
            : `${numberOfQuestions} CARD`;
        return (
            <View style={styles.container}>
                <Text></Text>
                <Text style={[styles.textHeader,styles.heading]}>
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
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('QuizView',{deckName: deckName})}
                        style={styles.primaryButton}>
                        <Text style={styles.buttonText}>Start quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.secondaryButton}
                        onPress={() => this.props.navigation.navigate('EntryQuestions',{deckName: deckName})}>
                        <Text style={styles.buttonText}>Add new question</Text>
                    </TouchableOpacity>
                </View>
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
        addEntry: ({entry,key}) => dispatch(addEntry({entry,key}))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeckView)
