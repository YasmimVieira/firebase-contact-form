const firebaseConfig = {
    apiKey: "AIzaSyAQgrZY_03CSKVngvU-z1PugWmYXGsrY1I",
    authDomain: "contactform-6ca90.firebaseapp.com",
    databaseURL: "https://contactform-6ca90.firebaseio.com",
    projectId: "contactform-6ca90",
    storageBucket: "contactform-6ca90.appspot.com",
    messagingSenderId: "246688531083",
    appId: "1:246688531083:web:610136e60491c9ca9f0a8e",
    measurementId: "G-9LEWFBML5B"
};
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const submitBtn = document.querySelector('#submit')

let userName = document.querySelector('#userName');
let userEmail = document.querySelector('#userEmail');
let userMessage = document.querySelector('#userMessage');

const db = firestore.collection("contactData");
submitBtn.addEventListener('click', function() {
    let userNameInput = userName.value;
    let userEmailInput = userEmail.value;
    let userMessageInput = userMessage.value;

    db.doc().set({
        name: userNameInput,
        email: userEmailInput,
        message: userMessageInput
    })
    .then(function() {
        console.log("data saved")
    })
    .catch(function(error) {
        console.log(error)
    })
})