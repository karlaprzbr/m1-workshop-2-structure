// document.getElementsByTagName('body').addEventListener("wheel", myFunction);

// function myFunction() {
//   this.style.background = "yellow";
// }

console.log("test js");

var addToBasket = document.getElementsByClassName('btn-basket');

function addToBasket(rid) {
    console.log("add to basket function");
    addToBasket.hide();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "add_to_basket.php?rid=" + rid + "&act=add", true);
    xmlhttp.send();
}

document.getElementsByTagName('footer').addEventListener('hover', test);

function test() {
    console.log('hover du footer');
}