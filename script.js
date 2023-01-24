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
            row.appendChild(pixel);
        }
    })
}