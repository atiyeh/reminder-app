const list = document.getElementsByClassName("list")[0];
const newReminder = document.getElementById("newReminder");
function createreminder(id, message) {
  const li = document.createElement("li");
  li.id = id;
  li.className = "reminder";
  const div = document.createElement("div");
  div.className = "text";
  div.innerText = message;

  if (message && message.length > 45) {
    alert("we only accept 45 charecters");
    return;
  } else if (!message) {
    alert("please enter a reminder");
    return;
  }
  const actioncontainer = document.createElement("div");
  actioncontainer.className = "actions";

  const Checkbtn = document.createElement("button");
  Checkbtn.className = "btn-check";
  Checkbtn.innerText = "Checked";

  const Deletebtn = document.createElement("button");
  Deletebtn.className = "btn-delete";
  Deletebtn.innerText = "Delete";

  Checkbtn.addEventListener("click", function () {
    if (li.id == id) {
      div.style.textDecoration = "line-through";
      div.style.textDecorationColor = "red";
      div.style.textEmphasis = "bold";
    }
  });
  Deletebtn.addEventListener("click", function () {
    if (li.id == id) {
      list.removeChild(li);
    }
  });

  actioncontainer.appendChild(Checkbtn);
  actioncontainer.appendChild(Deletebtn);

  li.appendChild(div);
  li.appendChild(actioncontainer);
  return li;
}
newReminder.addEventListener("click", function () {
  let message = prompt("please enter a reminder ");
  let id = Math.ceil(Math.random() * 100);
  let reminder = createreminder(id, message);
  list.appendChild(reminder);
});
