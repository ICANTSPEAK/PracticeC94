var firebaseConfig = {
    apiKey: "AIzaSyAxBDld7vIRCMHm8prP8NR8085yYTInzLE",
    authDomain: "kwitter-bcf39.firebaseapp.com",
    databaseURL: "https://kwitter-bcf39-default-rtdb.firebaseio.com",
    projectId: "kwitter-bcf39",
    storageBucket: "kwitter-bcf39.appspot.com",
    messagingSenderId: "913495626664",
    appId: "1:913495626664:web:23ffe925d70163c40f039d"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update ({
        purpose : "adding user"
    });
}