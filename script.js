const body = document.getElementsByTagName("body")[0];

function setColor(bColor){
    body.style.backgroundColor = bColor
}

function randomColor(){
    const red = Math.round(Math.random() * 225) 
    const green = Math.round(Math.random() * 225) 
    const blue = Math.round(Math.random() * 225) 

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color
    document.getElementById("show").innerHTML = `string:${red}`

    // return {red}
}

// const {red} = randomColor()
// document.getElementById("show").innerHTML = `string:${red}`

randomColor();
