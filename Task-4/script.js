// To-Do App
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) return;
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  showTasks();
}

function showTasks() {
  const list = document.getElementById("taskList");
  if (!list) return; // Not on To-Do page
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    list.innerHTML += `<li>${task} <button onclick="deleteTask(${index})">❌</button></li>`;
  });
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}

if (document.getElementById("taskList")) showTasks();

// Product Page
const products = [
  { name: "Leather Bag", price: 50, img: "assets/prod1.jpg" },
  { name: "Sports Shoes", price: 30, img: "assets/prod2.jpg" },
  { name: "Wrist Watch", price: 80, img: "assets/prod3.jpg" },
  { name: "Headphones", price: 40, img: "assets/prod4.jpg" }
];

function displayProducts(list) {
  const container = document.getElementById("productContainer");
  if (!container) return;
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>💲${p.price}</p>
      </div>
    `;
  });
}

function applyFilters() {
  let sorted = [...products];
  const sort = document.getElementById("sort").value;
  if (sort === "low") sorted.sort((a, b) => a.price - b.price);
  else if (sort === "high") sorted.sort((a, b) => b.price - a.price);
  displayProducts(sorted);
}

if (document.getElementById("productContainer")) displayProducts(products);
