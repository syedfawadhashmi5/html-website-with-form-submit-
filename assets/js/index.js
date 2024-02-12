// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuh5CWLcWWbZjyfDX0ESB4UK6TAbIVqr8",
  authDomain: "zeroone-2509e.firebaseapp.com",
  projectId: "zeroone-2509e",
  storageBucket: "zeroone-2509e.appspot.com",
  messagingSenderId: "716028132329",
  appId: "1:716028132329:web:b76badafcccab1a138a978",
};


firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function sendEmail() {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Simple form validation
  if (name === "" || email === "" || phone === "") {
    alert("Please fill in all required fields.");
    return;
  }

  // Prevent spamming (You can add more advanced anti-spam measures here)

  // Prepare data for Firestore
  var formData = {
    name: name,
    email: email,
    phone: phone,
    message: message
  };

  // Add data to Firestore
  db.collection("form_entries")
    .add(formData)
    .then(function (docRef) {
      // Reset the form after successful submission
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";

      alert("Form submitted successfully!");
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
      alert("An error occurred. Please try again later.");
    });
}

// Attach the form submission function to the form's onsubmit event
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  sendEmail(); // Call your custom function to handle form submission
});

