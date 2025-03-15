function solve(val){
    var v=document.getElementById('input');
    v.value +=val;
}
function result(){
    var v1= document.getElementById('input').value;
    var v2= eval(v1);
    document.getElementById('input').value = v2;
}
function Cleardisplay()
{
    var input= document.getElementById('input');
    input.value='';
}
function backspace(C){
    var backspace= document.getElementById('input');
    backspace.value=backspace.value.slice(0,-1);
}