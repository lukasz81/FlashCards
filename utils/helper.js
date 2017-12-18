export const DECKS_STORAGE_KEY = 'flashcards:decks';
export function getDecks() {
    const decks = {
        'React': {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        'JavaScript': {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        },
        'Python': {
            title: 'Python',
            questions: [
                {
                    question: 'Is Python named after well known TV programme called "Monty Python"?',
                    answer: 'Yes it is !'
                }
            ]
        },
        'PHP': {
            title: 'PHP',
            questions: [
                {
                    question: 'Is Python named after well known TV programme called "Monty Python"?',
                    answer: 'Yes it is !'
                }
            ]
        }
    };
    return decks;
}