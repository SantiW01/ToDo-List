export default function CreateToDo(title, description, priority, container) {
  ToDoProject.SetTitle = title;
  ToDoProject.SetDescription = description;
  ToDoProject.SetPriority = priority;
  CreateToDoStructure(
    container,
    ToDoProject.GetTitle,
    ToDoProject.GetDescription,
    ToDoProject.GetPriority
  );
}

const ToDoProject = {
  get GetTitle() {
    return this.title;
  },

  set SetTitle(title) {
    this.title = title;
  },

  get GetDescription() {
    return this.description;
  },

  set SetDescription(description) {
    this.description = description;
  },

  get GetPriority() {
    return this.priority;
  },

  set SetPriority(priority) {
    this.priority = priority;
  },
};

function CreateToDoStructure(container, title, description, priority) {
  const h1 = document.createElement("h1");
  h1.textContent = `${title}`;
  const pDescription = document.createElement("p");
  pDescription.textContent = `${description}`;
  const pPriority = document.createElement("p");
  pPriority.textContent = `${priority}`;
  container.appendChild(h1);
  container.appendChild(pDescription);
  container.appendChild(pPriority);
}
