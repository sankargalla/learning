let count = 0

function increaseCount(){
    count++;
    displayCount();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}