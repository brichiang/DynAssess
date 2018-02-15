var cimg1 = document.getElementById("ch1");
var cimg2 = document.getElementById("ch2");
var cimg3 = document.getElementById("ch3");
var show = document.getElementById("zoom");
var s1 = document.getElementById("set1");
var s2 = document.getElementById("set2");
var s3 = document.getElementById("set3");
var s4 = document.getElementById("set4");
var sizeW = 100;
var sizeH = 70;

s1.addEventListener("click",function(){
    cimg1.style.backgroundImage = "url(imgs/i1.jpg)";
    cimg2.style.backgroundImage = "url(imgs/i2.jpg)";
    cimg3.style.backgroundImage = "url(imgs/i3.jpg)";
});
s2.addEventListener("click",function(){
    cimg1.style.backgroundImage = "url(imgs/i4.jpg)";
    cimg2.style.backgroundImage = "url(imgs/i5.jpg)";
    cimg3.style.backgroundImage = "url(imgs/i6.jpg)";
});
s3.addEventListener("click",function(){
    cimg1.style.backgroundImage = "url(imgs/i7.jpg)";
    cimg2.style.backgroundImage = "url(imgs/i8.jpg)";
    cimg3.style.backgroundImage = "url(imgs/i9.jpg)";
});
s4.addEventListener("click",function(){
    cimg1.style.backgroundImage = "url(imgs/i10.jpg)";
    cimg2.style.backgroundImage = "url(imgs/i11.jpg)";
    cimg3.style.backgroundImage = "url(imgs/i12.jpg)";
});

cimg1.addEventListener("mouseenter",function(){
    show.style.backgroundImage = cimg1.style.backgroundImage;
    document.getElementById("zoomcontrols").style.display = "block";
});
cimg2.addEventListener("mouseenter",function(){
    show.style.backgroundImage = cimg2.style.backgroundImage;
    document.getElementById("zoomcontrols").style.display = "block";
});
cimg3.addEventListener("mouseenter",function(){
    show.style.backgroundImage = cimg3.style.backgroundImage;
    document.getElementById("zoomcontrols").style.display = "block";
});

document.getElementById("increase").addEventListener("click",function(){
    if (sizeW < 91 || sizeH < 64){
        sizeW = sizeW += 10;
        sizeH = sizeH += 7;
    } else if (sizeW > 11 || sizeH > 8) {
        
    }
    show.style.width = sizeW + "%";
    show.style.height = sizeH + "%";
});
document.getElementById("decrease").addEventListener("click",function(){
    if (sizeW < 91 || sizeH < 64){
        
    } else if (sizeW > 11 || sizeH > 8){
        sizeW = sizeW -= 10;
        sizeH = sizeH -= 7;
    }
    show.style.width = sizeW + "%";
    show.style.height = sizeH + "%";
});

document.getElementById("next").addEventListener("click",function(){
    
    if (cimg1.style.backgroundImage == 'url("imgs/i1.jpg")') {
        cimg1.style.backgroundImage = 'url("imgs/i4.jpg")';
        cimg2.style.backgroundImage = 'url("imgs/i5.jpg")';
        cimg3.style.backgroundImage = 'url("imgs/i6.jpg")';
    } 
    else if (cimg1.style.backgroundImage == 'url("imgs/i4.jpg")') {
        cimg1.style.backgroundImage = 'url("imgs/i7.jpg")';
        cimg2.style.backgroundImage = 'url("imgs/i8.jpg")';
        cimg3.style.backgroundImage = 'url("imgs/i9.jpg")';
    } 
    else if (cimg1.style.backgroundImage == 'url("imgs/i7.jpg")') {
        cimg1.style.backgroundImage = 'url("imgs/i10.jpg")';
        cimg2.style.backgroundImage = 'url("imgs/i11.jpg")';
        cimg3.style.backgroundImage = 'url("imgs/i12.jpg")';
    } 
    else if (cimg1.style.backgroundImage == 'url("imgs/i10.jpg")'){
        cimg1.style.backgroundImage = 'url("imgs/i1.jpg")';
        cimg2.style.backgroundImage = 'url("imgs/i2.jpg")';
        cimg3.style.backgroundImage = 'url("imgs/i3.jpg")';
    }
});
document.getElementById("previous").addEventListener("click",function(){
    
    if (cimg1.style.backgroundImage == 'url("imgs/i1.jpg")') {
        cimg1.style.backgroundImage = 'url("imgs/i10.jpg")';
        cimg2.style.backgroundImage = 'url("imgs/i11.jpg")';
        cimg3.style.backgroundImage = 'url("imgs/i12.jpg")';
    } 
    else if (cimg1.style.backgroundImage == 'url("imgs/i4.jpg")') {
        cimg1.style.backgroundImage = 'url("imgs/i1.jpg")';
        cimg2.style.backgroundImage = 'url("imgs/i2.jpg")';
        cimg3.style.backgroundImage = 'url("imgs/i3.jpg")';
    } 
    else if (cimg1.style.backgroundImage == 'url("imgs/i7.jpg")') {
        cimg1.style.backgroundImage = 'url("imgs/i4.jpg")';
        cimg2.style.backgroundImage = 'url("imgs/i5.jpg")';
        cimg3.style.backgroundImage = 'url("imgs/i6.jpg")';
        
    } 
    else if (cimg1.style.backgroundImage == 'url("imgs/i10.jpg")'){
        cimg1.style.backgroundImage = 'url("imgs/i7.jpg")';
        cimg2.style.backgroundImage = 'url("imgs/i8.jpg")';
        cimg3.style.backgroundImage = 'url("imgs/i9.jpg")';
        
    }
});