import {StyleSheet, Dimensions} from 'react-native';
import colors from '../utils/colors';

const IMAGE_HEADER_HEIGHT = 160;
const FULL_WIDTH = Dimensions.get('window').width;
const DECK_WIDTH = FULL_WIDTH - FULL_WIDTH/4;
const CARD_GUTTER = 30;

export default styles = StyleSheet.create({
    bgActive: {
        backgroundColor: colors.mainBackground
    },
    bgInactive: {
        backgroundColor: 'transparent'
    },
    textActive: {
        color: colors.white
    },
    textInactive: {
        color: colors.mainBackground
    },
    fullWidth: {
        width: FULL_WIDTH
    },
    fullHeight: {
        height: FULL_WIDTH
    },
    cardWidth: {
        width: FULL_WIDTH - CARD_GUTTER
    },
    cardHeight: {
        height: FULL_WIDTH - CARD_GUTTER
    },
    cardView: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.creamGrey,
        borderRadius: 8,
        marginLeft: CARD_GUTTER/2
    },
    buttonsHolder: {
        flex: 0.25,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    smallButton: {
        borderRadius: 20,
        padding: 4,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: colors.mainBackground
    },
    questionText: {
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 23,
        padding:15,
        color: colors.darkerGrey,
        fontWeight: '200'
    },
    primaryButton: {
        alignContent: 'center',
        backgroundColor: colors.primaryCTA,
        padding: 20,
        marginBottom: 10,
        marginTop: 20,
        borderRadius: 8
    },
    secondaryButton: {
        alignContent: 'center',
        backgroundColor: 'transparent',
        borderColor: colors.white,
        borderWidth: 1,
        padding: 20,
        marginBottom: 20,
        marginTop: 10,
        borderRadius: 8
    },
    buttonText: {
        fontWeight: '600',
        textAlign: 'center',
        color: colors.white,
        fontSize: 18
    },
    newDeckInput: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: colors.creamGrey,
        color: colors.creamGrey,
        fontSize: 28,
        textAlign: 'center',
        fontWeight: '400'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.mainBackground,
        padding: 15
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
        color: colors.white,
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
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 0
        }
    },
    deck: {
        alignContent: 'center',
        backgroundColor: colors.deckColor,
        padding: 10,
        marginTop: 20,
        borderRadius: 8,
        width: DECK_WIDTH
    },
    deckAddNew: {
        alignContent: 'center',
        backgroundColor: colors.primaryCTA,
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
        color: colors.creamGrey,
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: 15,
        fontWeight: '400'
    }
});