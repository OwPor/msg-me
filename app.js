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

//signIN function
function signIn(){
	var email = document.getElementById("email");
	var password  = document.getElementById("password");
	const promise = auth.signInWithEmailAndPassword(email.value,password.value);
	promise.catch(e=>alert(e.message));
  
}


//signOut

function signOut(){
	auth.signOut();
	alert("Logged out successfully from system");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user)=>{
	if(user){
		var email = user.email;
		alert("Successfully logged in "+email+"!");
		// Redirect to the desired page
		window.location.href = "Admin/index.html";
	
	}
}
