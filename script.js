let len = 16;

makeRows(len);
makePixel(len);

function makeRows(len){
    const container = document.querySelector('.container');
    //const rows = [];
    for(let i = 0; i < len; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        //row.textContent = "Helloooo";
        container.appendChild(row);
    }
}

function makePixel(len){
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        for(let i = 0; i < len; i++){
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            addHoverEffect(pixel);
            row.appendChild(pixel);
        }
    })
}

function addHoverEffect(pixel){
    pixel.addEventListener('mouseover', function (e) {
        /*if(Array.from(e.target.classList).includes('visited')){
            return;
        }*/
        if([... e.target.classList].includes('visited')){
            e.target.style.filter = 'brightness(10%)';
            return;
        }
        e.target.style.background = getRandRGB();
        e.target.classList.add('visited');
    })
}

function getLenFromUser(){
    len = prompt("Please enter a length between 0 and 100");
    
    if(len < 0 || len > 100){
        alert("Invalid length. Length must be between 0 and 100");
        return;
    }
    let rows = document.querySelectorAll('.row');
    rows.forEach(row => {(row.remove())});

    makeRows(len);
    makePixel(len);
}

function getRandRGB(){
    const max = 255;
    const red = Math.floor(Math.random() * max);
    const green = Math.floor(Math.random() * max);
    const blue = Math.floor(Math.random() * max);
    return `rgb(${red}, ${green}, ${blue})`;
}