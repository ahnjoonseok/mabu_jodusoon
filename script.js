function Scroll() {
    var ypos = window.pageYOffset;
    
    if(ypos > 200)
    {
        const test = document.getElementById('test')
        test.style.position = "absolute"
    } else {
        test.style.position = "fixed"
    }



}

window.addEventListener("scroll", Scroll);
window.onload = function() {

    const firstText = document.getElementById('appear')
    firstText.classList.add('fade-in');

}
