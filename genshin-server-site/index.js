window.addEventListener('scroll', function(){
    let background = document.getElementById("background")
    let middleground = document.getElementById("middleground")
    let frontground = document.getElementById("frontground")

    var value = window.scrollY;
    background.style.top = value * 1 + 'px';
    middleground.style.top = value * 0.75 + 'px';
    frontground.style.top = value * 0.5 + 'px';

})