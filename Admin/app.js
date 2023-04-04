// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyCQaGLn4HCbesVcHvPtTcDKZzVYqU08BPU",
	authDomain: "anon-mess.firebaseapp.com",
	projectId: "anon-mess",
	storageBucket: "anon-mess.appspot.com",
	messagingSenderId: "54977689429",
	appId: "1:54977689429:web:f58d80087065cba005e1dc"
};

firebase.initializeApp(firebaseConfig);

const auth =  firebase.auth();

//signOut
function signOut(){
	auth.signOut();
	alert("Logged out successfully from system!");
	window.location.href = "https://rvthemoves.github.io/msg-me/Admin/index.html";
}

// Get a reference to the database service
const database = firebase.database();

// Get the chat form and messages container
const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('chat-messages');

// Function to scroll to the bottom of the messages container
function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}


// Add event listener to the chat form
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the username and message input fields
  // const username = document.getElementById('username-input').value;
  const message = document.getElementById('message-input').value;

  // Save the message to the database
  database.ref('messages').push().set({
    // username: username,
    message: message
  });

  // Clear the message input field
  document.getElementById('message-input').value = '';
});

// Listen for new messages in the database and display them in the chat
database.ref('messages').on('child_added', (snapshot) => {
  const message = snapshot.val();
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `
    <strong></strong>${message.message}
  `;
  chatMessages.appendChild(messageElement);
  
  scrollToBottom();
});