import "./style.css";
import checkData from "./check_data";
import startupListener from "./startup_listener";
import createLi from "./create_li";
import deleteFun from "./delete_fun";

// create html on startup

export default function pageSetup() {
  const content = document.getElementById("content");
  const outerCard = document.createElement("div");
  outerCard.classList.add("outer-card");
  content.appendChild(outerCard);

  const top = document.createElement("div");
  top.classList.add("top");
  const card = document.createElement("div");
  card.classList.add("card");
  outerCard.appendChild(top);
  outerCard.appendChild(card);

  const h1 = document.createElement("h1");
  h1.textContent = "Todo List";
  top.appendChild(h1);
  const form = document.createElement("form");
  form.id = "myForm";
  top.appendChild(form);

  const input = document.createElement("input");
  input.classList.add("form-input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "example");
  input.setAttribute("data-ID", "");
  input.setAttribute("maxlength", "40");
  form.appendChild(input);

  const formBtn = document.createElement("button");
  formBtn.setAttribute("type", "button");
  formBtn.classList.add("form-btn");
  formBtn.textContent = "Submit";
  form.appendChild(formBtn);

  const middle = document.createElement("div");
  middle.classList.add("middle");
  card.appendChild(middle);
  const ul = document.createElement("ul");
  ul.classList.add("todo-ul");
  middle.appendChild(ul);

  const bottom = document.createElement("div");
  bottom.classList.add("bottom");
  bottom.classList.add("border-red");

  card.appendChild(bottom);
  const ulB = document.createElement("ul");
  ulB.classList.add("done-ul");
  bottom.appendChild(ulB);
  let objectArray = checkData();

  checkForLocalStorage(objectArray, startupListener, createLi);
}
// checks for saved objects in local storage after page reset, adds li items with event listeners if they exist
function checkForLocalStorage(objectArray, startupListener, createLi) {
  if (objectArray.length > 0) {
    for (let i = 0; i < objectArray.length; i++) {
      createLi(
        objectArray[i].id,
        objectArray[i].text,
        objectArray[i].isComplete
      );
    }
    localStorage.setItem("todo list", JSON.stringify(objectArray));
    const completeBtn = document.querySelectorAll(".complete-btn");
    completeBtn.forEach((item) => {
      item.addEventListener("click", startupListener);
    });

    const deleteBtn = document.querySelectorAll(".delete-btn");
    deleteBtn.forEach((item) => {
      item.addEventListener("click", deleteFun);
    });
  }
}
