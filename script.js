let searchBox = document.querySelector("#search-box");
let addBtn = document.querySelector("#add-btn");
let listItems = document.querySelector(".list-items");

function addList() {
  if (searchBox.value == "") {
    alert("Enter some value");
  } else {
    let newList = document.createElement("li");
    let span = document.createElement("span");
    newList.innerHTML = searchBox.value;
    newList.appendChild(span);
    listItems.appendChild(newList);
  }
  searchBox.value = "";
  saveData();
}

addBtn.addEventListener("click", addList);
listItems.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

searchBox.addEventListener("keydown", function enterPressed(event) {
  if (event.keyCode === 13) {
    addBtn.click();
  }
});

function saveData() {
  localStorage.setItem("userData", listItems.innerHTML);
}
function showData() {
  listItems.innerHTML = localStorage.getItem("userData");
}
showData();
