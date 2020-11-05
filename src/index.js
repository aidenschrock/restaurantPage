import { buildPage } from './pageElements'
import { aboutBuild } from './about'
import { menuBuild } from './menu'
import { contactBuild } from './contact'


buildPage()

document.getElementById("home").addEventListener("click", tabHome);
document.getElementById("about").addEventListener("click", tabAbout);
document.getElementById("menu").addEventListener("click", tabMenu);
document.getElementById("contact").addEventListener("click", tabContact);

function tabHome() {
    const content = document.getElementById("content")
    content.setAttribute("class", "")
    content.innerHTML = "";
    buildPage()
}

function tabAbout() {
    const content = document.getElementById("content")
    content.innerHTML = "";
    aboutBuild()
}

function tabMenu() {
    const content = document.getElementById("content")
    content.setAttribute("class", "")
    content.innerHTML = "";
    menuBuild()
}

function tabContact() {
    const content = document.getElementById("content")
    content.setAttribute("class", "")
    content.innerHTML = "";
    contactBuild()
}





console.log('Hello!')