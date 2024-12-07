// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJrQpp1ZbSUPL_wIFl3uFkBz5IEEO7xZU",
  authDomain: "womensafety-53bf9.firebaseapp.com",
  databaseURL: "https://womensafety-53bf9-default-rtdb.firebaseio.com",
  projectId: "womensafety-53bf9",
  storageBucket: "womensafety-53bf9.appspot.com",
  messagingSenderId: "1027972515933",
  appId: "1:1027972515933:web:962094136904b7258e25b4",
  measurementId: "G-F4WC3EDYPT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var paymentFormDB = firebase.database().ref("payments");

document.getElementById("paymentForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var movieName = document.getElementById("movie-name").textContent;
  var totalAmount = document.getElementById("total_Amount").textContent;
  var cardNumber = getElementVal("cardNumber");
  var cvv = getElementVal("cvv");
  var expiryDate = getElementVal("expiryDate");
  var userName = getElementVal("userName");

  savePaymentDetails(movieName, totalAmount, cardNumber, cvv, expiryDate, userName);

  // Show success message
  document.querySelector(".alert").style.display = "block";

  // Remove success message after 3 seconds
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Reset the form
  document.getElementById("paymentForm").reset();
}

const savePaymentDetails = (movieName, totalAmount, cardNumber, cvv, expiryDate, userName) => {
  var newPaymentForm = paymentFormDB.push();

  newPaymentForm.set({
    movieName: movieName,
    totalAmount: totalAmount,
    cardNumber: cardNumber,
    cvv: cvv,
    expiryDate: expiryDate,
    userName: userName,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
