import checkData from "./check_data";
import createLi from "./create_li";
import deleteFun from "./delete_fun";

function startupListener(item) {
  let objectArray = checkData();

  for (let i = 0; i < objectArray.length; i++) {
    // changes clicked list items isComplete propterty to true
    if (
      objectArray[i].id ===
        Number(item.target.parentElement.getAttribute("data-ID")) &&
      objectArray[i].isComplete === false
    ) {
      objectArray[i].isComplete = true;
      // runs the list item object through the createLi function to create to-be-deleted list items
      createLi(
        objectArray[i].id,
        objectArray[i].text,
        objectArray[i].isComplete
      );
      // remove old list item from the to-be-completed area and update the local storage
      item.target.parentElement.remove();
      localStorage.setItem("todo list", JSON.stringify(objectArray));
      objectArray = checkData();
      // set click listener event for new delete buttons
      const deleteBtn = document.querySelectorAll(".delete-btn");
      deleteBtn.forEach((item) => {
        item.addEventListener("click", deleteFun);
      });
      break;
    }
  }
}

export default startupListener;
