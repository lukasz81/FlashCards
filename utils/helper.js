export const DECKS_STORAGE_KEY = 'flashcards:decks';
export function getDecks() {
    return {
        'React': {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'Correct',
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'Correct'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'Correct'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'Correct'
                }
            ]
        },
        'JavaScript': {
            title: 'JavaScript',
            questions: [
                {
                    question: 'Is closure a function?',
                    answer: 'Correct'
                }
            ]
        },
        'Python': {
            title: 'Python',
            questions: [
                {
                    question: 'Is Python named after well known TV programme called Monty Python?',
                    answer: 'Correct'
                }
            ]
        },
        'PHP': {
            title: 'PHP',
            questions: [
                {
                    question: 'Is Python named after well known TV programme called Benny Hill?',
                    answer: 'Correct'
                }
            ]
        }
    };
}