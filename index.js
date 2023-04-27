const drawItems = (data, todoList) => {
  todoList.innerHTML = "";

  data.forEach((item, index) => {
    todoList.innerHTML += `
      <li id=${item.id}>
        <p>№: ${index + 1}</p>
        <p>Title:${item.title}</p>
        <p>Description: ${item.description}</p>
        <button class="editButton">Edit</button>
        <button class="deleteButton">Delete</button>
      </li>
    `;
  });
};

const deleteItem = (event, data, todoList) => {
  const id = event.target.closest("li").id;
  const index = data.findIndex((item) => item.id === +id);

  data.splice(index, 1);
  drawItems(data, todoList);
};

const addItem = (data, todoList) => {
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;

  // data.push({ id: Date.now(), title, description });
  data.push({
    id: Date.now(),
    title: title,
    description: description,
  });

  drawItems(data, todoList);
};

const init = () => {
  let data = [];
  const submitButton = document.querySelector("#submit");
  const todoList = document.querySelector(".todoList");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    addItem(data, todoList);
  });

  todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteButton")) {
      deleteItem(event, data, todoList);
    }

    if (event.target.classList.contains("editButton")) {
      deleteItem(event, data, todoList);
    }
  });
};

init();
