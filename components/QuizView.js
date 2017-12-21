import React from 'react';
import {ScrollView, View, Text, Animated, Dimensions} from 'react-native';
import {MaterialCommunityIcons, Ionicons, MaterialIcons} from '@expo/vector-icons';
import styles from '../styles';
import {connect} from "react-redux";
import {receiveEntries} from '../actions';
import CardView from './CardView';

class QuizView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: {}
        };
    }

    componentWillMount() {
        const deck = this.props.navigation.state.params.deckName;
        const cards = this.props.decks[deck].questions;
        this.setState({cards: cards});
    }

    SCREEN_WIDTH = Dimensions.get('window').width;
    xOffset = new Animated.Value(0);
    onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: this.xOffset, y: 0 } } }]
    );

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

    render() {
        const {cards} = this.state;
        return (
            <View style={[styles.container,{padding: 0}]}>
                <View>
                    <Text style={[styles.textHeader,styles.heading]}>
                        1/2
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
                                <CardView card={card} index={index} />
                            </Animated.View>
                        )
                    })}
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

export default connect(mapStateToProps,mapDispatchToProps)(QuizView)