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
var orderform = document.getElementById("orderform");

var user = firebase.auth().currentUser;
var name;

            // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead

//----------------------donuts----------------------------
function donuts() {
    var tdonuts = document.getElementById("ddon").value;
    var dlis = document.getElementById('ndon');
    dlis.innerHTML = tdonuts + " Dozen Donuts";
    tprice();
}
//--------------------coffee-----------------------
function coffee() {
    var tcoffee = document.getElementById("bjoe").value;
    var dliss = document.getElementById('ncof');
    dliss.innerHTML = tcoffee + " Boxes of Joe";
    tprice();
}
//------------------------------bagels---------------------------
function bage() {
    var tbagel = document.getElementById("bagel").value;
    var dlisss = document.getElementById('nbagel');
    dlisss.innerHTML = tbagel + " Bagels";
    tprice();
}


//------------------------------muffins---------------------------
function muffin() {
    var tmuf = document.getElementById("muf").value;
    var dlisse = document.getElementById('nmuf');
    dlisse.innerHTML = tmuf + " Muffins";
    tprice();
}

//-------------calculate price after each input----------

function tprice() {
    //prices
    var dprice = 9.00;
    var cprice = 16.00;
    var cbagel = 1.75;
    var bbagel = 1.50;
    var jbagel = 1.00;
    var cmuf = 2.00;
    var bmuf = 1.75;
    var jmuf = 1.50;
    //calculating each ind price
    var tdonuts = document.getElementById("ddon").value;
    var tcoffee = document.getElementById("bjoe").value;
    var tbagel = document.getElementById("bagel").value;
    var typbagel = document.getElementById("bspreads").value;
    var tmuf = document.getElementById("muf").value;
    var typmuf = document.getElementById("mspreads").value;
    var tdonutp = +dprice * +tdonuts;
    var tcofp = +cprice * +tcoffee;
    var tbagep = 0;
    var tmufp = 0;
    if (typbagel == "Butter") {
        tbagep = +bbagel * +tbagel;
    }
    if (typbagel == "Creme Cheese") {
        tbagep = +cbagel * +tbagel;
    }
    if (typbagel == "Jelly") {
        tbagep = +jbagel * +tbagel;
    }
    if (typmuf == "Butter") {
        tmufp = +bmuf * +tmuf;
    }
    if (typmuf == "Creme Cheese") {
        tmufp = +cmuf * +tmuf;
    }
    if (typmuf == "Jelly") {
        tmufp = +jmuf * +tmuf;
    }
    //posting to html
    var pp = document.getElementById('pdon');
    pp.innerHTML = "$ " + tdonutp;
    var pc = document.getElementById('pcof');
    pc.innerHTML = "$ " + tcofp;
    var pb = document.getElementById('pbagel');
    pb.innerHTML = "$ " + tbagep;
    var pm = document.getElementById('pmuf');
    pm.innerHTML = "$ " + tmufp;
    //totals
    var totalprice = +tdonutp + +tcofp + +tbagep + +tmufp;
    var totalitems = +tdonuts + +tcoffee + +tbagel + +tmuf;

    var tb = document.getElementById('titems');
    tb.innerHTML = totalitems + " Items";
    var plz = document.getElementById('tpricee');
    plz.innerHTML = "$ " + totalprice;
}

//-------------------FIREBASE-------------------
function storedata(evt) {
    evt.preventDefault();
    var tdonuts = document.getElementById("ddon").value;
    var tcoffee = document.getElementById("bjoe").value;
    var tbagel = document.getElementById("bagel").value;
    var tmuf = document.getElementById("muf").value;
  


    db.collection("Orders").doc(tdonuts).set({
           // Donuts:tdonuts,
            Coffee: tcoffee,
            Bagels: tbagel,
            Muffins: tmuf,
            
        })
        .then(function () {
            console.log("Doc successful");
            window.alert("Order Sucessful!")
            window.location.assign("indexx.html");
        })
        .catch(function (error) {
            console.error("Error writing doc", error);
        });
}


orderform.addEventListener("submit", storedata);