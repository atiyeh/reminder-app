const list = document.getElementsByClassName("list")[0];
const newReminder = document.getElementById("newReminder");
function createreminder(id, [message, date, caption]) {
    return `<li class="reminder" id="reminder-${id}">
  <div class="text" id="text-${id}">
  ${message}
    <div class="date">
    ${date}
      <div class="caption">${caption}</div>
    </div>
  </div>
  <div class="actions">
    <button class="btn-check" onclick="onCheckReminder(${id})">Checked</button
    ><button class="btn-delete" onclick="onDeleteReminder(${id})">Delete</button>
  </div>
</li>
`;
}
function onDeleteReminder(id) {
    let reminderElement = document.querySelector(`#reminder-${id}`);
    reminderElement.remove("li");
}
function onCheckReminder(id) {
    let textElement = document.querySelector(`#text-${id}`);
    textElement.className = "text checked";
}

newReminder.addEventListener("click", function () {
    let message = prompt("please enter a reminder ");
    if (message && message.length > 45) {
        alert("we only accept 45 charecters");
        return;
    } else if (!message) {
        alert("please enter a reminder");
        return;
    }
    let Date = prompt("please enter a date");
    let caption = prompt("please write  the details");
    let id = Math.ceil(Math.random() * 100);
    let reminder = createreminder(id, [message, Date, caption]);
    list.innerHTML = list.innerHTML + reminder;
});
