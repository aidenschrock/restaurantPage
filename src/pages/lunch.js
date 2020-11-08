function lunchBuild() {
    let content = document.getElementById("content")
    content.setAttribute("class", "lunchContainer")
    let title = document.createElement('h1');
    title.textContent = "Lunch / Dinner Menu"
    title.setAttribute("id", "lunchTitle")

    let menuText = document.createElement('p');
    menuText.setAttribute("id", "lunchPara")
    menuText.textContent = "Vegan Burger\r\nHealthy Turkey Chili\r\nVeggie sandwich"

    let sidesTitle = document.createElement('h2');
    sidesTitle.setAttribute("id", "lunchSidesTitle");
    sidesTitle.textContent = "Sides";
    let lunchSides = document.createElement('p');
    lunchSides.setAttribute("id", "lunchSides")
    lunchSides.textContent = "Sweet Potato Fries\r\nBroccoli\r\nAsparagus Spears\r\nFeta Cheese Bites"

    content.appendChild(title)
    content.appendChild(menuText)

    content.appendChild(sidesTitle)
    content.appendChild(lunchSides)


}

export { lunchBuild }