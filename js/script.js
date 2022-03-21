const hamburger = document.getElementById('hamburger')
const nav_content = document.getElementById('nav_content')

hamburger.addEventListener('click', () => {
    nav_content.classList.toggle('show')
});


var acc = document.getElementsByClassName("faqs_accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
};