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
messageForm.addEventListener('submit', (e) => 
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
const removeButton = document.createElement('button');
removeButton.innerText= 'remove';
removeButton.type= 'button';
removeButton.className = 'remove-button';
messageList.appendChild(removeButton);
removeButton.addEventListener('click', e => {
    newMessages.remove();
    removeButton.remove();
});
});
fetch(`https://api.github.com/users/Whiteka16/repos`)
.then((response) => {
    if (response.ok) {
        return response.text();
    } else {
        throw new Error("Failed to fetch repositories");
    }
    })
.then((data) => {
    const repositories = JSON.parse(data);
    console.log(repositories);
    const projectSection = document.getElementById("projects");
    let projectList = document.createElement("ul");
    projectSection.appendChild(projectList);

    for (let repository of repositories)
    {let project = document.createElement("li");
    project.innerText = repository.name;
    projectList.appendChild(project);}
})
.catch((error) => {
    console.error("An error has occurred:", error)
});