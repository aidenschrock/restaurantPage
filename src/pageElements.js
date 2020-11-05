function buildPage() {
    let content = document.getElementById("content")
    let title = document.createElement('h1');
    title.textContent = "Divine Diner"
    title.setAttribute("id", "title")
    let image = document.createElement('img');
    image.setAttribute("id", "homeImage");
    image.src = "/assets/diner.jpg"
    let para = document.createElement('p');
    para.setAttribute("id", "homePara")
    para.textContent = "Diner classics with ingredients that make every bite guilt-free."

    content.appendChild(image)
    content.appendChild(title)
    content.appendChild(para)
}

export { buildPage }