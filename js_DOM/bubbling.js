console.log("ok");
var body=document.getElementsByTagName('body')[0];
var div=document.getElementsByTagName('div')[2];
var span=document.getElementsByTagName('span')[0];
var button=document.getElementsByTagName('button')[1];

body.addEventListener('click',(et)=>{
    et.stopPropagation();
    console.log("body was clicked")
})
div.addEventListener('click',(et)=>{
    et.stopPropagation();
    console.log("div was clicked")
})
span.addEventListener('click',(et)=>{
    et.stopPropagation();
    console.log("span was clicked")
})
button.addEventListener('click',(et)=>{
    et.stopPropagation();
    console.log("button was clicked")
})
