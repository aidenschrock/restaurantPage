function lunchBuild() {
    let content = document.getElementById("content")
    content.setAttribute("class", "lunchContainer")
    let title = document.createElement('h1');
    title.textContent = "Lunch / Dinner Menu"
    title.setAttribute("id", "lunchTitle")

    content.appendChild(title)

}

export { lunchBuild }