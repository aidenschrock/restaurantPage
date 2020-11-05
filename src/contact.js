function contactBuild() {
    let content = document.getElementById("content")
    let title = document.createElement('h1');
    title.textContent = "Reach out to us!"
    title.setAttribute("id", "contactTitle")
    let para = document.createElement('p');
    para.setAttribute("id", "contactPara")
    para.textContent = "Hours of Operation:\r\nMon-Thurs: 9am-9pm\r\nFri & Sat: 9am-11pm\r\nSun: 9am-5pm \r\n\r\nPhone Number: 888-888-888 \r\nAddress: 666 goodboy lane bmx, TX \r\nEmail:Gotcha @aol.com "

    content.appendChild(title)
    content.appendChild(para)
}


export { contactBuild }