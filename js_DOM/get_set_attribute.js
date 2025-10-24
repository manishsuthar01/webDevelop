console.log("ok");

var a=document.querySelector(".hero");
// console.log(a);
console.log(a.getAttribute('class'));
a.setAttribute("example",123);

for(let i of a.attributes){
    console.log(`${i.name} = ${i.value}`);
}


