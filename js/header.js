window.onscroll = function() {
    fixedNavMenu();
};

var navbar = document.getElementById('navbar');
// получили кординаты верхнего меню
var sticky = navbar.offsetTop;

function fixedNavMenu () {
    if (window.pageYOffset >= sticky) {
        // для class="sticky" прописаны стиль
        // когда появляется этот клас, для него
        // есть свой стиль и меню фиксируется вверху
        // клас добавляется когда текущая позиция по Y
        // стает больше изначальной позиции меню
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky");
    }
}