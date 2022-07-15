import checkData from "./check_data";

export default function deleteFun(item) {
  let objectArray = checkData();
  const objectArray2 = [];

  // select the correct button
  for (let i = 0; i < objectArray.length; i++) {
    if (
      objectArray[i].id ===
      Number(item.target.parentElement.getAttribute("data-ID"))
    ) {
      // remove list item object from the objectArray by creating a new array without it
      for (let j = 0; j < objectArray.length; j++) {
        if (objectArray[j].id != objectArray[i].id) {
          objectArray2.push(objectArray[j]);
        }
      }

      // update object array with new array
      objectArray = objectArray2;
      localStorage.setItem("todo list", JSON.stringify(objectArray));
      item.target.parentElement.remove();
      break;
    }
  }
}
