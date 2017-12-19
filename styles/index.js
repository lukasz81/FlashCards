import {StyleSheet, Dimensions} from 'react-native';

const IMAGE_HEADER_HEIGHT = 160;
const FULL_WIDTH = Dimensions.get('window').width;
const DECK_WIDTH = FULL_WIDTH - FULL_WIDTH/4;

export default styles = StyleSheet.create({
    primaryButton: {
        alignContent: 'center',
        backgroundColor: '#5fba7d',
        padding: 20,
        marginBottom: 10,
        marginTop: 20,
        borderRadius: 8
    },
    secondaryButton: {
        alignContent: 'center',
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 1,
        padding: 20,
        marginBottom: 20,
        marginTop: 10,
        borderRadius: 8
    },
    buttonText: {
        fontWeight: '600',
        textAlign: 'center',
        color: '#fff',
        fontSize: 18
    },
    newDeckInput: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#fefefe',
        color: '#fefefe',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: '400'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#333',
        padding: 15,
    },
    imageStyle: {
        alignSelf: 'stretch',
        width: undefined,
        opacity: 0.3,
        height: IMAGE_HEADER_HEIGHT
    },
    scrollingView: {
        alignItems: 'center'
    },
    textHeader: {
        fontWeight: '400',
        textAlign: 'center',
        color: '#fff',
    },
    viewHeader: {
        height: IMAGE_HEADER_HEIGHT,
        position: 'absolute',
        top: IMAGE_HEADER_HEIGHT / 2 - (IMAGE_HEADER_HEIGHT / 4),
        width: FULL_WIDTH
    },
    shadow: {
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        }
    },
    deck: {
        alignContent: 'center',
        backgroundColor: '#444',
        padding: 10,
        marginTop: 20,
        borderRadius: 8,
        width: DECK_WIDTH
    },
    deckAddNew: {
        alignContent: 'center',
        backgroundColor: '#5fba7d',
        padding: 10,
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 8,
        width: DECK_WIDTH
    },
    heading: {
        fontSize: 28,
        padding: 10,
        fontWeight: '200'
    },
    text: {
        color: '#fefefe',
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: 15,
        fontWeight: '400'
    }
});