import firebase from 'firebase/app'

const appName = 'your app name'
export const firebaseConfig = {
    apiKey: "your api key",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "your sender id"
}
firebase.initializeApp(firebaseConfig)