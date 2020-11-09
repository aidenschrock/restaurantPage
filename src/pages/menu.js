import { breakfastBuild } from './breakfast'
import { lunchBuild } from './lunch'
import { drinksBuild } from './drinks'

import bananaOatWafflesImage from '../assets/BananaOatWaffles.jpg'
import burgerImage from '../assets/burger.jpg'
import smoothieImage from '../assets/smoothie.jpg'

function menuBuild() {
    let content = document.getElementById("content")
    content.setAttribute("class", "menuGrid")

    let figure1 = document.createElement('figure');
    figure1.setAttribute("id", "figure1");
    let image1 = document.createElement('img');
    image1.setAttribute("id", "breakfastImage");
    image1.src = bananaOatWafflesImage;
    let figcap1 = document.createElement('figcaption');
    figcap1.setAttribute("id", "figcap1");
    figcap1.textContent = "Breakfast";
    figure1.appendChild(image1)
    figure1.appendChild(figcap1);

    let figure2 = document.createElement('figure');
    figure2.setAttribute("id", "figure2");
    let image2 = document.createElement('img');
    image2.setAttribute("id", "lunchImage");
    image2.src = burgerImage;
    let figcap2 = document.createElement('figcaption');
    figcap2.setAttribute("id", "figcap2");
    figcap2.textContent = "Lunch/Dinner";
    figure2.appendChild(image2);
    figure2.appendChild(figcap2);

    let figure3 = document.createElement('figure');
    figure3.setAttribute("id", "figure3");
    let image3 = document.createElement('img');
    image3.setAttribute("id", "drinkImage");
    image3.src = smoothieImage;
    let figcap3 = document.createElement('figcaption');
    figcap3.setAttribute("id", "figcap3");
    figcap3.textContent = "Drinks";
    figure3.appendChild(image3);
    figure3.appendChild(figcap3);

    figure1.addEventListener("click", selectBreakfast);
    figure2.addEventListener("click", selectLunch);
    figure3.addEventListener("click", selectDrinks);

    function selectBreakfast() {
        console.log('contact click')
        const content = document.getElementById("content")
        content.innerHTML = "";
        breakfastBuild()
    }

    function selectLunch() {
        console.log('contact click')
        const content = document.getElementById("content")
        content.innerHTML = "";
        lunchBuild()
    }

    function selectDrinks() {
        console.log('contact click')
        const content = document.getElementById("content")
        content.innerHTML = "";
        drinksBuild()
    }



    content.appendChild(figure1)
    content.appendChild(figure2)
    content.appendChild(figure3)
}


export { menuBuild }