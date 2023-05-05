export default function CreateToDo(title, container) {
  ToDoProject.SetTitle = title;
  CreateToDoStructure(container, ToDoProject.GetTitle);
}

const ToDoProject = {
  get GetTitle() {
    return this.title;
  },

  set SetTitle(title) {
    this.title = title;
  },
};

function CreateToDoStructure(container, title) {
  const h1 = document.createElement("h1");
  h1.setAttribute("class", "ToDo_title");
  h1.textContent = `${title}`;
  container.appendChild(h1);
}
