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
      CreateToDo(
        document.querySelector(".ToDo_Title").value,
        document.querySelector(".ToDo_Description").value,
        OptionSelected(),
        container
      )
    );
    submitButton.textContent = "Submit";

    container.appendChild(submitButton);
  }
}

function CreateInputs(container) {
  const InputName = document.createElement("input");
  const inputDescription = document.createElement("input");
  const lowInput = document.createElement("input");
  const highInput = document.createElement("input");
  const inputSubmit = document.createElement("input");
  const lowLabel = document.createElement("label");
  const highLabel = document.createElement("label");
  InputName.setAttribute("type", "text");
  InputName.setAttribute("class", "ToDo_Title");
  inputDescription.setAttribute("type", "text");
  inputDescription.setAttribute("class", "ToDo_Description");
  lowInput.type = "radio";
  lowInput.name = "true_falseInput";
  lowInput.value = "Low";
  highInput.type = "radio";
  highInput.name = "true_falseInput";
  highInput.value = "High";
  lowLabel.innerText = "Low";
  highLabel.innerText = "High";
  container.appendChild(InputName);
  container.appendChild(inputDescription);
  container.appendChild(lowInput);
  container.appendChild(lowLabel);
  container.appendChild(highInput);
  container.appendChild(highLabel);
}

function OptionSelected() {
  const priorityStatus = document.getElementsByName("true_falseInput");
  for (const radio of priorityStatus) {
    if (radio.checked) {
      return radio.value;
    }
  }
}
