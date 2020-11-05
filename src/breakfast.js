function breakfastBuild() {
    let content = document.getElementById("content")
    content.setAttribute("class", "breakfastContainer")
    let title = document.createElement('h1');
    title.textContent = "Breakfast Menu"
    title.setAttribute("id", "breakfastTitle")

    let menuText = document.createElement('p');
    menuText.setAttribute("id", "breakfastPara")
    menuText.textContent = "Banana Oat Waffles\r\nBreakfast Burritos\r\nEgg & Sweet Potato Hash\r\nUltimate Breakfast Bowl"

    let sidesTitle = document.createElement('h2');
    sidesTitle.setAttribute("id", "sidesTitle");
    sidesTitle.textContent = "Sides";
    let breakfastSides = document.createElement('p');
    breakfastSides.setAttribute("id", "breakfastSides")
    breakfastSides.textContent = "Vegan Hashbrowns\r\nFruit cup\r\nFruit & Yogurt Parfaits\r\nTurkey Bacon"

    content.appendChild(title)
    content.appendChild(menuText)

    content.appendChild(sidesTitle)
    content.appendChild(breakfastSides)

}

export { breakfastBuild }