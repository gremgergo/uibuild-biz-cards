const bizCardsComponent = function (){
    return `
        <section>
            <div id="first">
                <h2>John Freeman</h2>
                <h6>pizza thief</h6>
                <p>2610 NW Vaughn St, Portland,</p>
                <p>OR 97210,<br>
                United States</p>
            </div>
            <div id="second">
                <h2>Angela Sliders</h2>
                <h6>max steaks</h6>
                <p>3653 Germantown Ave,<br>
                Philadelphia,</p>
                <p>PA 19140,<br> 
                United States</p>
            </div>
            <div id="third">
                <h2>Rita</br>Lehigh</h2>
                <h6>pizza ranch</h6>
                <p>1327 Main St Ste. 6, Billings Heights,</p>
                <p>MT 59105,<br>
                United States</p>
            </div>
        </section>
    `
}

const loadEvent = function (){
    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", bizCardsComponent())
}

window.addEventListener("load", loadEvent)