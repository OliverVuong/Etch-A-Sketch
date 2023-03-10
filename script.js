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
        e.target.style.background = 'blue';
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