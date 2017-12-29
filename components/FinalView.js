import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles';
import { connect } from 'react-redux';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';

RenderText = (score) => {
    return (
        <Text style={[styles.textHeader, styles.heading]}>
            Congratulations,{"\n"}your score is {score.score}%
        </Text>
    )
};

class FinalView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deckName: ''
        };
    }

    render() {

        const {score} = this.props;
        return (
            <View style={styles.container}>
                <View style={{flex:0.8}}>
                    <RenderText score={score}/>
                </View>
                <View style={{flex:1}}>
                    <Text style={{fontSize: 80, textAlign: 'center', margin: 20}}>🎉</Text>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity
                        onPress={this.props.restartQuiz}
                        style={styles.primaryButton}>
                        <Text style={styles.buttonText}>Restart quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.secondaryButton}
                        onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.buttonText}>Back to 'Deck'</Text>
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

export default connect(mapStateToProps,null)(FinalView)
