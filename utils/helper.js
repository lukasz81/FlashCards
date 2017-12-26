import { AsyncStorage } from 'react-native';
export const DECKS_STORAGE_KEY = 'flashcards:decks';
const NOTIFICATION_KEY = 'UdaciFitness:notifications';
import { Notifications, Permissions } from 'expo';

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

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

const createNotification = () => {
    return {
        title: 'Take the quiz!',
        body: "👋 don't forget to practice today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
};

export default function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(18);
                            tomorrow.setMinutes(45);

                            Notifications.scheduleLocalNotificationsAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            );
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}