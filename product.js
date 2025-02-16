//selecting sidenavbar,menuIcon
var sidenav = document.getElementById("sidenav");
var menuIcon = document.getElementById("menuIcon");
var closenav = document.getElementById("closenav");
menuIcon.addEventListener("click",function(){
sidenav.style.right="0px";})
closenav.addEventListener("click",function(){
sidenav.style.right="-50%";
});
//product search functionality
var productContainer = document.getElementById("product-Container");
var search= document.getElementById("search");
var productlist = productContainer.querySelectorAll("div");
search.addEventListener("keyup",function(event){
    var enteredvalue = event.target.value.toUpperCase();

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname = productlist[count].querySelector("h1");
        if(productname&& productname.textContent.toUpperCase().indexOf(enteredvalue)>-1)
    {productlist[count].style.display="block";}
else{productlist[count].style.display="none";}
    }
});