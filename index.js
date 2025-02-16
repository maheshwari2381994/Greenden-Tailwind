//selecting sidenavbar,menuIcon
var sidenav = document.getElementById("sidenav");
var menuIcon = document.getElementById("menuIcon");
var closenav = document.getElementById("closenav");
menuIcon.addEventListener("click",function(){
sidenav.style.right="0px";})
closenav.addEventListener("click",function(){
sidenav.style.right="-50%";}
)