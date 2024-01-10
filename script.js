"use strict";
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addBtn");
const regex = /^(?=.*[A-Z])[^\d]+$/;
addBtn.addEventListener("click", addTask);
function addTask() {
  const inputValue = inputBox.value.trim();

  if (!regex.test(inputValue)) {
    alert(
      "Invalid input. Please enter text with at least one capital letter and no numbers."
    );
  } else {
    /* Create Li :  */
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    /* adding X  */
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  } /* Clear input */
  inputBox.value = "";
  SaveData();
}
inputBox.addEventListener("keydown", function (Enter) {
  if (Enter.key == "Enter") {
    addTask();
  }
});

/* Remove Task Or Finish task : */
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      SaveData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      SaveData();
    }
  },
  false
);

function SaveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
