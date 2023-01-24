let len = 16;

makeGrid(len);

function makeGrid(len){
    const container = document.querySelector('.container');
    //const rows = [];
    for(let i = 0; i < len; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        //row.textContent = "Helloooo";
        container.appendChild(row);
    }
}