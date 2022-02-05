import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDd54WU1_6L5WN1QrEU8ZG2WViBaW0RfII",
	authDomain: "memories-aa.firebaseapp.com",
	projectId: "memories-aa",
	storageBucket: "memories-aa.appspot.com",
	messagingSenderId: "456618471506",
	appId: "1:456618471506:web:f151ccb8866f7e75162f8b",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
