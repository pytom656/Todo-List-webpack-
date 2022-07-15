export default function checkData() {
  // if local storage array exists, return it as a variable. Else, return an empty array variable
  if (localStorage.getItem("todo list")) {
    let objectArray = JSON.parse(localStorage.getItem("todo list"));

    return objectArray;
  } else {
    let objectArray = [];
    return objectArray;
  }
}
