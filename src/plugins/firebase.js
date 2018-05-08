import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
	apiKey: process.env.firebaseApiKey,
	authDomain: process.env.firebaseAuthDomain,
	databaseURL: process.env.firebaseDatabaseURL,
	projectId: process.env.firebaseProjectId,
	storageBucket: process.env.firebaseStorageBucket,
	messagingSenderId: process.env.firebaseMessagingSenderId,
	timestampsInSnapshots: true
});

export default{
	install(Vue){
		Vue.prototype.$_firebase = firebase;
	}
}