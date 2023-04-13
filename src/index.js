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
    const InputName = document.createElement("input");
    InputName.setAttribute("type", "text");
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";
    container.appendChild(InputName);
    container.appendChild(submitButton);
  }
}
