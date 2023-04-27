const firebaseConfig = {
    apiKey: "AIzaSyAEmI9A5AVKjP8tUZ6Q3AfRUsbPtY8mtP8",
    authDomain: "final-project-bncc-feb-888c1.firebaseapp.com",
    databaseURL: "https://final-project-bncc-feb-888c1-default-rtdb.firebaseio.com",
    projectId: "final-project-bncc-feb-888c1",
    storageBucket: "final-project-bncc-feb-888c1.appspot.com",
    messagingSenderId: "472254657438",
    appId: "1:472254657438:web:5633b1fa06ad462702dc8f",
  };

firebase.initializeApp(firebaseConfig);
let database = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector("#phone").value;
    const event = document.querySelector("#event").value;

    $.post("https://final-project-bncc-feb-888c1-default-rtdb.firebaseio.com/.json", JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        event: event
    }),function(respond){
        alert("Your Data Has Been Successfully Addded");
        document.getElementById("contactForm").reset();
    })
}