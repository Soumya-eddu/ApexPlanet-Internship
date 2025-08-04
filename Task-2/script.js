// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let valid = true;

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    valid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    valid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required.";
    valid = false;
  }

  if (valid) {
    alert("Thanks! Your message has been sent.");
    document.getElementById("contactForm").reset();
  }
});

// To-Do List Logic
function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${text}</span>
    <button onclick="removeTask(this)">✖</button>
  `;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function removeTask(btn) {
  btn.parentElement.remove();
}

function toggleComplete(span) {
  span.parentElement.classList.toggle("completed");
}
