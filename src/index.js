import { buildPage } from './pageElements'
import { aboutBuild } from './about'
import { menuBuild } from './menu'
import { contactBuild } from './contact'


buildPage()

document.getElementById("about").addEventListener("click", tabAbout);
document.getElementById("menu").addEventListener("click", tabMenu);
document.getElementById("contact").addEventListener("click", tabContact);


function tabAbout() {
    console.log('about click')
    const content = document.getElementById("content")
    content.innerHTML = "";
    aboutBuild()
}

function tabMenu() {
    console.log('menu click')
    const content = document.getElementById("content")
    content.innerHTML = "";
    menuBuild()
}

function tabContact() {
    console.log('contact click')
    const content = document.getElementById("content")
    content.innerHTML = "";
    contactBuild()
}





console.log('Hello!')