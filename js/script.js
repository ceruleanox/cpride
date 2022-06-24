function load_walk(load, p1, p2) { 

    console.log( "000" + load + " " + p1 + p2 + direction);

    var loader = document.getElementById(String(load));
    var page1 = document.getElementById(String(p1));
    var page2 = document.getElementById(String(p2));

    console.log( "first" + load + " " + p1 + p2 + direction);

    console.log( "second" + loader + " " + p1 + p2 + direction);

    if (load === 'loader_left') {
        loader.style.left = "0";
    } else if (load === 'loader_right') {
        loader.style.left = "-100%";
    } else {
        loader.style.opacity = "0";
        loader.style.transition = 'opacity 2s ease-in';
    }

    setTimeout(function() { 
        if (direction === 'left') {
            loader.style.left = "-100%";
        } else if (direction === 'right') {
            loader.style.left = "0";
        } else {
            loader.style.opacity = "1";
        }
        page1.style.display = "none";
        page2.style.display = "block";
     }, 1500)
 }

