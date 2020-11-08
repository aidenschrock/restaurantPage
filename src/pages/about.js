function aboutBuild() {
    let content = document.getElementById("content")
    content.setAttribute("class", "aboutContainer")
    let title = document.createElement('h1');
    // title.textContent = "About"
    // title.setAttribute("id", "aboutTitle")
    let image = document.createElement('img');
    image.setAttribute("id", "aboutImage");
    image.src = "/assets/aboutimage.jpg"
    let para = document.createElement('p');
    para.setAttribute("id", "aboutPara")
    para.textContent = "The idea for Divine Diner was formed by Jan Brooks in 2006. She spent many twilight hours at\
     diners to recover from the traditional college drinking and fell in love with the 1950's diner vibe. However, \
     she found herself wanting comfort food that fit a healthier lifestyle. That's when Jan decided to create Divine \
     Diner! Divine Diner has the aesthetic and comfort of a typical diner, but creates the traditional diner meals with a \
     healthy twist."

    content.appendChild(image)
    content.appendChild(title)
    content.appendChild(para)
}

export { aboutBuild }