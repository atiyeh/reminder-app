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
    <button class="btn-check" onclick="onCheckReminder(${id})"><i  class="fa">&#xf00c;</i>
</button
    ><button class="btn-delete" onclick="onDeleteReminder(${id})"><i class="fa fa-times" aria-hidden="true"></i>
</button>
  </div>
</li>
`;
}
function onDeleteReminder(id) {
    let reminderElement = document.querySelector(`#reminder-${id}`);
    confirm("حذف شود؟");
    reminderElement.remove("li");
}
function onCheckReminder(id) {
    let textElement = document.querySelector(`#text-${id}`);
    textElement.className = "text checked";
}

newReminder.addEventListener("click", function () {
    let money = document.getElementsByClassName("inmoney")[0].value;
    let date = document.getElementsByClassName("indate")[0].value;
    let description = document.getElementsByClassName("description")[0].value;
    let id = Math.ceil(Math.random() * 100);
    let reminder = createreminder(id, [money, date, description]);
    list.innerHTML = list.innerHTML + reminder;
});
