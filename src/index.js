import "./style.css";
import pageSetup from "./todo_setup";
import createLi from "./create_li";
import startupListener from "./startup_listener";
import checkData from "./check_data";

// localStorage.clear();
pageSetup();
// set object array after page setup
let objectArray = checkData();

// get ahold of form input and form button
const formBtn = document.querySelector(".form-btn");
const formInput = document.querySelector(".form-input");

// set event listener form form input button
formBtn.addEventListener("click", function firstEvent() {
  if (formInput.value != "") {
    //  update object array after button click
    objectArray = checkData();
    // remove previous event listeners, if they dont exit, appears to do nothing
    let completeBtn = document.querySelectorAll(".complete-btn");
    completeBtn.forEach((item) => {
      item.removeEventListener("click", startupListener);
    });

    // set custom id attribute
    let ID = Date.now();
    formInput.setAttribute("data-ID", ID);

    // create new object for todo item.
    let todoObj = {
      id: ID,
      text: formInput.value,
      isComplete: false,
    };

    objectArray.push(todoObj);
    createLi(todoObj.id, todoObj.text, todoObj.isComplete);

    // update local storage and

    localStorage.setItem("todo list", JSON.stringify(objectArray));

    // add click event on current list
    completeBtn = document.querySelectorAll(".complete-btn");
    completeBtn.forEach((item) => {
      item.addEventListener("click", startupListener);
    });

    // reset form input
    document.getElementById("myForm").reset();
  }
});
