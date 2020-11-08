function drinksBuild() {
    let content = document.getElementById("content")
    content.setAttribute("class", "drinksContainer")
    let title = document.createElement('h1');
    title.textContent = "Drink Menu"
    title.setAttribute("id", "drinkTitle")

    let drinkText = document.createElement('p');
    drinkText.setAttribute("id", "drinkPara")
    drinkText.textContent = "Coffee\r\nOrange Juice\r\nGrape Juice\r\nSpring Water"

    let smoothieTitle = document.createElement('h2');
    smoothieTitle.textContent = "Smoothies"
    smoothieTitle.setAttribute("id", "smoothieTitle")

    let menuText = document.createElement('p');
    menuText.setAttribute("id", "smoothiePara")
    menuText.textContent = "Strawberry\r\nMango\r\nBerry\r\nAvocado"

    content.appendChild(title)
    content.appendChild(drinkText)
    content.appendChild(smoothieTitle)
    content.appendChild(menuText)

}

export { drinksBuild }