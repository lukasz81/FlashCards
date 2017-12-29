import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons, Ionicons, MaterialIcons} from '@expo/vector-icons';
import styles from '../styles';
import {connect} from "react-redux";
import FlipCard from 'react-native-flip-card';

class CardView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: {},
            flip: false,
            index: null,
            isAnswered: false,
            choice: ''
        };
    }

    ANSWER_CORRECT_STRING = 'Correct';
    ANSWER_INCORRECT_STRING = 'Incorrect';

    componentWillMount() {
        const {card,index} = this.props;
        this.setState({card: card, index: index});
    }

    onAnswerPress = (choice) => {
        const assignedAnswer = this.state.card.answer;
        this.setState({choice: choice, isAnswered: true});
        this.props.onAnswerPress({
            choice: choice,
            assignedAnswer: assignedAnswer,
            cardIndex: this.state.index
        });
    };

    render() {
        const {card} = this.state;
        return (
            <View style={[styles.cardView,styles.shadow,styles.cardWidth,styles.cardHeight]}>
                <View style={{flex: 0.75, alignItems: 'center', justifyContent: 'center'}}>
                    <MaterialIcons
                        style={{textAlign: 'center', marginTop: 20}}
                        name='question-answer'
                        color={'#eff0f1'}
                        size={50}/>
                    <FlipCard
                        perspective={1000}
                        flipHorizontal={true}
                        style={{borderWidth: 0, flex: 1}}
                        clickable={false}
                        flip={this.state.flip}>
                        <View style={styles.face}>
                            <Text style={[styles.questionText]}>
                                {card.question}
                                </Text>
                        </View>
                        <View style={styles.back}>
                            <Text style={[styles.questionText]}>
                                {card.answer}
                                </Text>
                        </View>
                    </FlipCard>
                </View>
                <View View style={styles.buttonsHolder}>
                    <TouchableOpacity
                        disabled={this.state.isAnswered}
                        onPress={() => this.onAnswerPress(this.ANSWER_CORRECT_STRING)}
                        style={[
                            styles.smallButton,
                            {marginLeft: 10},
                            this.state.choice === this.ANSWER_CORRECT_STRING ? styles.bgActive : styles.bgInactive]}>
                        <Text style={[
                            styles.textInactive,
                            this.state.choice === this.ANSWER_CORRECT_STRING ? styles.textActive : styles.textInactive
                        ]}>{this.ANSWER_CORRECT_STRING}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled={this.state.isAnswered}
                        onPress={() => this.onAnswerPress(this.ANSWER_INCORRECT_STRING)}
                        style={[
                            styles.smallButton,
                            {marginLeft: 10},
                            this.state.choice === this.ANSWER_INCORRECT_STRING ? styles.bgActive : styles.bgInactive]}>
                        <Text style={[
                            styles.textInactive,
                            this.state.choice === this.ANSWER_INCORRECT_STRING ? styles.textActive : styles.textInactive
                        ]}>{this.ANSWER_INCORRECT_STRING}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({flip: !this.state.flip})}
                        style={[styles.smallButton,{marginRight: 10}, this.state.flip ? styles.bgActive : styles.bgInactive]}>
                        <Text style={this.state.flip ? styles.textActive : styles.textInactive}>See answer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = decks => ({ decks });

export default connect(mapStateToProps,null)(CardView)