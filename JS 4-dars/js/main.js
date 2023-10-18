

// let round = Math.round(8.5);
// let pow = Math.pow(4, 3);
// let sqrt = Math.sqrt( 116);
// let abs = Math.abs( -12.8);
// let ceil = Math.ceil(49.1);
// let floor = Math.floor(49.9);
// let trunc = Math.trunc(49.9);
// let min = Math.min(110,77,80,70,140,310,85,90);
// let max = Math.max(110,77,80,70,140,310,85,90);
// document.write(max);

let byTag = document.getElementsByTagName('h1');
let byId = document.getElementById('idNome');
let byClass = document.getElementsByClassName('classnomi');
let bySelector = document.querySelector(".classNomi");
let bySelectorAll = document.querySelectorAll(".classNomi");
let byAll = document.getElementsByTagName('h1').namedItem("idNomi");

byAll.style.color = "yellow"
byAll.style.backgroundColor = "royalblue"
byAll.style.width = "300px"
byAll.style.height = "250px"
byAll.style.fontSize = "45px"
byAll.style.paddingTop = "90px"
byAll.style.boxSizing = "border-box"
byAll.style.textAlign = "center"
byAll.style.border = "10px solid black"



console.log(byAll)








