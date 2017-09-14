var crypt = 10;
var wall = 10;
var debug = 10;
function myFunction(id) {
    document.getElementById(id).classList.toggle("show");
}
var myVar = setInterval(update ,100);
function update() {
    document.getElementById("cryptography").innerHTML ="cryptography:" + crypt;
    document.getElementById("firewall").innerHTML ="firewall:" + wall;
    document.getElementById("debugging").innerHTML ="debugging:" + debug;
    window.alert("You have been hacked");
}
function trojanWorm(id) {
    var virusEl = document.getElementById(id);
    
    document.getElementById(id).classList.add("virus");
    document.getElementById(id).classList.remove("item");
    document.getElementById(id).innerHTML = "WORM";
    wall--;


