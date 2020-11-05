function drinksBuild() {
    let content = document.getElementById("content")
    content.setAttribute("class", "drinksContainer")
    let title = document.createElement('h1');
    title.textContent = "Drink Menu"
    title.setAttribute("id", "drinkTitle")

    content.appendChild(title)

}

export { drinksBuild }