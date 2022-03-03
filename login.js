//Login config with firebase to store data
//Login config with firebase to store data
var firebaseConfig = {
    apiKey: "AIzaSyASJBB7CdACJxdHhz1k_7Kuu-F-colyqlA",
    authDomain: "sketchbook-c2298.firebaseapp.com",
    databaseURL: "https://sketchbook-c2298.firebaseio.com",
    projectId: "sketchbook-c2298",
    storageBucket: "sketchbook-c2298.appspot.com",
    messagingSenderId: "745971111191",
    appId: "1:745971111191:web:68bc56b8900a40962cd352",
    measurementId: "G-X56P0EJSBY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

var loginForm = document.getElementById("loginForm");
var registerForm = document.getElementById("registerForm");

function loginUser(evt) {
    evt.preventDefault();
    let formData = new FormData(loginForm);
    user = {}
    for (var pair of formData.entries()) {
        user[pair[0]] = pair[1];
    }
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(function (result) {
            window.location.assign("order.html");
        })
        .catch(function (error) {
            var errorMessage = error.message;
            alert("Password is incorrect.");
        });
}

function registerUser(evt) {
    evt.preventDefault();
    let formData = new FormData(registerForm);
    user = {}
    for (var pair of formData.entries()) {
        user[pair[0]] = pair[1];
    }
    if (user.password !== user.passwordConfirm) {
        alert("Passwords dont match")
    } else {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(function (result) {
                window.location.assign("order.html");
            })
            .catch(function (error) {
                var errorMessage = error.message;
                alert(errorMessage);
            })
    }
}
//Guest Checkout

function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("reg").style.display = "none";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("reg").style.display = "none";
}

function opensignup() {
    document.getElementById("reg").style.display = "block";
    document.getElementById("myForm").style.display = "none";
}


loginForm.addEventListener("submit", loginUser);
registerForm.addEventListener("submit", registerUser);