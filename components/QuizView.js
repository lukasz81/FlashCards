import React from 'react';
import {ScrollView, View, Text, Animated, Dimensions} from 'react-native';
import {MaterialCommunityIcons, Ionicons, MaterialIcons} from '@expo/vector-icons';
import styles from '../styles';
import {connect} from "react-redux";
import {receiveEntries} from '../actions';
import CardView from './CardView';
import FinalView from './FinalView';
import {
    clearLocalNotification,
    setLocalNotification
} from '../utils/helper';

class QuizView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: {},
            quizScore: 0,
            answeredCards: 0,
            answeredAll: false,
            deckName: ''
        };
    }

    SCREEN_WIDTH = Dimensions.get('window').width;
    xOffset = new Animated.Value(0);
    onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: this.xOffset } } }]
    );

    componentWillMount() {
        const deck = this.props.navigation.state.params.deckName;
        const cards = this.props.decks[deck].questions;
        this.onScroll;
        this.setState({
            cards: cards,
            deckName: deck
        });
    }


    rotateTransform(index) {
        return {
            transform: [{
                rotate: this.xOffset.interpolate({
                    inputRange: [
                        (index - 1) * this.SCREEN_WIDTH,
                        index * this.SCREEN_WIDTH,
                        (index + 1) * this.SCREEN_WIDTH
                    ],
                    outputRange: ['30deg', '0deg', '-30deg'],
                })
            }]
        };
    }

    onChildAnswerPress = (args) => {
        this.setState({
            answeredCards: ++this.state.answeredCards,
            answeredAll: this.state.answeredCards === this.state.cards.length
        });
        if (args.assignedAnswer === args.choice) this.setState({
            quizScore: ++this.state.quizScore
        });
        if (this.state.answeredCards === this.state.cards.length) {
            clearLocalNotification().then(setLocalNotification)
        }
    };

    calculateScore = () => {
        return Math.fround( this.state.quizScore / this.state.cards.length * 100);
    };

    restartQuiz = () => {
        this.setState({
            quizScore: 0,
            answeredCards: 0,
            answeredAll: false
        })
    };


    render() {
        const {cards,answeredCards,answeredAll} = this.state;
        if (answeredAll) {
            return(
                <FinalView
                    deckName={this.state.deckName}
                    navigation={this.props.navigation}
                    score={this.calculateScore()}
                    restartQuiz={() => this.restartQuiz()}
                />
            )
        } else {
            return (
                <View style={[styles.container,{padding: 0}]}>
                    <View>
                        <Text style={[styles.textHeader,styles.heading]}>
                            Answered questions
                        </Text>
                        <Text style={[styles.textHeader,styles.heading]}>
                            {answeredCards} / {cards.length}
                        </Text>
                    </View>
                    <ScrollView
                        contentContainerStyle={styles.scrollingView}
                        horizontal
                        pagingEnabled
                        scrollEventThrottle={16}
                        centerContent={true}
                        onScroll={this.onScroll}>
                        {cards.map((card,index) => {
                            return(
                                <Animated.View
                                    key={`id_${index+1}`}
                                    style={[this.rotateTransform(index),styles.fullWidth,styles.fullHeight]}>
                                    <CardView
                                        onAnswerPress={this.onChildAnswerPress}
                                        card={card}
                                        deckName={this.state.deckName}
                                        index={index} />
                                </Animated.View>
                            )
                        })}
                    </ScrollView>
                </View>
            )}
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

export default connect(mapStateToProps,mapDispatchToProps)(QuizView)