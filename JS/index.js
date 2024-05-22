const currentDate = new Date();
const thisYear = currentDate.getFullYear();

const footer =  document.createElement("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<small> Kayla White &copy; ${thisYear}</small>`;

footer.appendChild(copyright);
document.body.appendChild(footer);

let skills = ["CSS", "HTML", "JS"]
let skillsSection = document.getElementById("skills");
let skillsList = document.createElement("ul");
skillsSection.appendChild(skillsList);

for(let skill of skills){
    let skillItem = document.createElement("li");
    skillItem.innerText = skill;
    skillsList.appendChild(skillItem);
}
const messageForm=document.querySelector(".message-form");
console.log(messageForm);
messageForm.addEventListener('submit', e => 
{e.preventDefault();
    let usersName = e.target.usersName;
    let usersEmail = e.target.usersEmail;
    let usersMessage = e.target.usersMessage;
    console.log(usersName.value + usersEmail.value + usersMessage.value);
let messageSection = document.getElementById("message-section");
let messageList = messageSection.querySelector("ul");
let newMessages = document.createElement("li")
newMessages.innerText= usersName.value;
messageList.appendChild(newMessages);
e.target.reset();
});

const removeButton = document.createElement('button');
removeButton.innerText= 'remove';
removeButton.type= 'button';
removeButton.className = 'remove-button';
removeButton.addEventListener('click', e => {
    let entry = removeButton.parentNode;
    entry.removeChild(newMessages);
    newMessages.appendChild(removeButton);
    messageList.appendChild(newMessages);

});

