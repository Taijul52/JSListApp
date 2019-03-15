let form = document.getElementById("addForm");
let input = document.getElementById("input");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

itemList.addEventListener("click", removeItem);
form.addEventListener("submit", addItem);
filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();
  let newItem = document.getElementById("input").value;
  let li = document.createElement("li");
  let deleteBtn = document.createElement("button");
  li.className = "list-group-item";
  deleteBtn.className = "btn btn-sm btn-danger float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  // convert text to lowercase
  let text = e.target.value.toLowerCase();
  // Get list
  let items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

}