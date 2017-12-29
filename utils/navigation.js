import DeckList from "../components/DeckList";
import FinalView from "../components/FinalView";
import EntryDeck from "../components/EntryDeck";
import DeckView from "../components/DeckView";
import EntryQuestions from "../components/EntryQuestions";
import QuizView from "../components/QuizView";

const header = {
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#333333'
    }
};

export default nav = {
    Home: {
        screen: DeckList,
        navigationOptions: {
            header: null
        }
    },
    EntryDeck: {
        screen: EntryDeck,
        navigationOptions: header
    },
    DeckView: {
        screen: DeckView,
        navigationOptions: header
    },
    EntryQuestions: {
        screen: EntryQuestions,
        navigationOptions: header
    },
    QuizView: {
        screen: QuizView,
        navigationOptions: header
    },
    FinalView: {
        screen: FinalView,
        navigationOptions: {
            header: null
        }
    }
};