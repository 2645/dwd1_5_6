var xPos = 0;

document.onkeydown = function(e){
    console.log(e.keyCode);
    if(e.keyCode == "39"){
        var div = document.createElement('DIV');
        div.setAttribute('class', 'blok');
        div.setAttribute('style', 'left: ' + xPos + 'px'); // <== fucked up work around
        div.style.left = xPos;                             // <== cuz this shit doesn't work (only once)
        xPos +=80;
        console.log(xPos);
        document.body.appendChild(div);
    }else if(e.keyCode =="37"){
        var div = document.getElementsByClassName('blok');
        var lastAdded = div[div.length-1];
        document.body.removeChild(lastAdded);
        xPos -=80;
    }
};
