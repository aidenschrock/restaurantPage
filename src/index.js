import { buildPage } from './pages/pageElements'
import { aboutBuild } from './pages/about'
import { menuBuild } from './pages/menu'
import { contactBuild } from './pages/contact'

import './css/main.css'

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