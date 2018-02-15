document.getElementById("open").addEventListener("click", function(){
   document.getElementById("menu").style.left = "0px"; 
});
document.getElementById("close").addEventListener("click", function(){
   document.getElementById("menu").style.left = "-110px"; 
});

document.getElementById("BG").addEventListener("click",function(){
   document.getElementById("bg").style.backgroundImage = show.style.backgroundImage; 
});

document.getElementById("reset").addEventListener("click",function(){
 document.getElementById("bg").style.backgroundImage = "none";
});

document.getElementById("hide").addEventListener("click",function(){
    document.getElementById("app1").style.display = "none";
});
document.getElementById("show").addEventListener("click",function(){
    document.getElementById("app1").style.display = "block";
});

document.getElementById("number").addEventListener("change", function(){
    var pic = parseInt(number.value);
    
    if (pic > 12 || pic < 1){
        alert("Doesn't Exist!");
    } else {
        document.getElementById("bg").style.backgroundImage = "url(imgs/i "+pic+".jpg)";
    }
});