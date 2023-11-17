const Send = () => {
  console.log("Sent");

  let name = document.getElementById("Name").value;
  let email = document.getElementById("Email").value;
  let subject = document.getElementById("Subject").value;
  let contact = document.getElementById("Contact").value;
  let message = document.getElementById("Message").value;

  let body =
    "Name: " +
    name +
    "<br/> Email: " +
    email +
    "<br/> Contact: " +
    contact +
    "<br/> Message: " +
    message;

  console.log(body);

  Email.send({
    SecureToken: "5e5c8ccb-c2ec-4a41-8d83-4e041eace4ba",
    To: "aqibaliakbar@gmail.com",
    From: "aqibaliakbar@gmail.com",
    Subject: subject,
    Body: body,
  }).then((message) => {
    if (message === "OK") {
      // Handle success case
      openModal("successModal");
    } else {
      // Handle error case
      openModal("errorModal");
    }
  });
};

function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark");
  // Update the mode text
  let logo = document.getElementById("logo");
  logo.src = body.classList.contains("dark")
    ? "assets/LogoDark.svg"
    : "assets/Logo.svg";

  let toggle = document.getElementById("toggle");
  toggle.className = body.classList.contains("dark")
    ? "bx bx-sun bx-md"
    : "bx bx-moon bx-md";
}

// Function to open the modal
const openModal = (modalId) => {
  let modal = document.getElementById(modalId);
  modal.style.display = "block";
  // Close the modal if clicked anywhere outside the modal content
  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal(modalId);
    }
  };
};

// Function to close the modal
const closeModal = (modalId, event) => {
  let modal = document.getElementById(modalId);
  modal.style.display = "none";

  event.preventDefault();
  // Remove the click event listener when the modal is closed
  window.onclick = null;
};

// Attach the event listener to your close buttons
document.querySelectorAll(".close").forEach(function (closeButton) {
  closeButton.addEventListener("click", function (event) {
    closeModal("successModal", event);
  });
});
