import "./style.css";

// creates and catagorizes new list items into:  to-be-completed list item or  to-be-deleted list item
export default function createLi(ID, text, bool) {
  // to-be-completed
  if (!bool) {
    const ul = document.querySelector(".todo-ul");
    const li = document.createElement("li");
    li.classList.add("todo-li");
    li.setAttribute("data-ID", ID);
    li.textContent = text;
    const liBtn = document.createElement("button");
    liBtn.classList.add("complete-btn");
    liBtn.textContent = "completed";
    ul.appendChild(li);
    li.appendChild(liBtn);
  }
  // to-be-deleted
  else if (bool) {
    const ul = document.querySelector(".done-ul");
    const li = document.createElement("li");
    li.classList.add("done-li");
    li.setAttribute("data-ID", ID);
    li.textContent = text;
    const liBtn = document.createElement("button");
    liBtn.classList.add("delete-btn");
    liBtn.textContent = "delete";
    ul.appendChild(li);
    li.appendChild(liBtn);
  } else {
    console.log("You have a problem");
  }
}
