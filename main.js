//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCT2xPIxpiZmXEia5Zbbh8WLxxMvnkfKqA",
      authDomain: "kwitter-e63b4.firebaseapp.com",
      databaseURL: "https://kwitter-e63b4-default-rtdb.firebaseio.com",
      projectId: "kwitter-e63b4",
      storageBucket: "kwitter-e63b4.appspot.com",
      messagingSenderId: "147965146650",
      appId: "1:147965146650:web:e071d2434a64b15c9843a3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_email = localStorage.getItem("user_email");                                                                 
    room_name = localStorage.getItem("room_name");
    function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({ name:user_email, message:msg });
      document.getElementById("msg").value = ""; 
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
 console.log(message_data);
  name= message_data['name'];
  message = message_data['message'];
  name_with_tag = "<h4> "+ name;
   message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag + span_with_tag;
 document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();
       function logout() { 
             localStorage.removeItem("user_name");
              localStorage.removeItem("room_name");
               window.location.replace("https://bhandariarnav2020.github.io/chatsite");
             }
