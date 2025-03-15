var fullimgBox=document.getElementById("fullimgBox");
var fullimg=document.getElementById("fullimg");

function openfullimg(pic){
    fullimgBox.style.display="flex";
    fullimg.src=pic;
}
function closefullimg(){
    fullimgBox.style.display="none";
}
