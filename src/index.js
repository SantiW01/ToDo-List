import CreateToDo from "./ToDoList";
const container = document.querySelector(".container");
SetButton(container);

function SetButton(container) {
  const btnToDo = document.createElement("button");
  btnToDo.setAttribute("class", "btn_createToDo");
  btnToDo.textContent = "New ToDo List";
  btnToDo.addEventListener("click", () => ShowForm(container));
  container.appendChild(btnToDo);

  return container;
}

function ShowForm(container) {
  if (document.querySelector(".container").childNodes.length == 1) {
    const submitButton = document.createElement("button");
    CreateInputs(container);
    submitButton.setAttribute("type", "submit");
    submitButton.addEventListener("click", () =>
      CreateToDo(document.querySelector(".ToDo_Title").value, container)
    );
    submitButton.textContent = "Submit";
    container.appendChild(submitButton);
  }
}

function CreateInputs(container) {
  const div = document.createElement("div");
  const InputName = document.createElement("input");
  InputName.setAttribute("type", "text");
  InputName.setAttribute("class", "ToDo_Title");
  div.appendChild(InputName);
  container.appendChild(div);
}
