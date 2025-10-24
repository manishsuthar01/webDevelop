//parent element
const parent = document.querySelector("ul");
const p = parent.parentElement;
console.log(p);


//children
console.log(" ");
console.log("children");
var child = document.querySelector("ul");
const c = child.children;
console.log(c);

//children node
console.log(" ");
console.log("children node")
console.log(child.childNodes);
console.log(child.childNodes[2]);

// sibling
console.log(" ");
console.log("sibling");
console.log(document.querySelector(".two").previousElementSibling);
console.log(document.querySelector(".four").previousElementSibling);
console.log(document.querySelector(".four").previousSibling);

const A = document.querySelector(".two").previousElementSibling;
if(A==null){
    console.log("sibling not present");
}
else{
    console.log(A);
}

const f=document.querySelectorAll("#hero");
console.log(f);
f.forEach((element)=>{
    console.log(element.previousElementSibling);
})


//Append child
console.log(" ");
console.log("append child");

const g=document.querySelector("ul");
const ele=document.createElement("li");
ele.textContent="panther";
g.appendChild(ele);


// remove 
console.log(" ");
console.log("remove any element ");

// const h=document.querySelector("ul");
// h.remove();
// if(h.remove()==null){
//     console.log('element removed succefull');
// }
// else{
//     console.log("element not removed")
// }
// console.log(h);



//Replace Child
console.log(" ");
console.log("Replace Child");

const list=document.querySelector("ul");
// list.replaceChild(newli,child to change);
const childTOchange= list.children[6];
const newli=document.createElement("li");
newli.textContent="emiway"
list.replaceChild(newli,childTOchange);
 


// parent node
console.log("parent node");

const parent_node=document.querySelector("html");
const node=parent_node.parentNode;
console.log(node);


//more sibling
console.log("more sibling");

var a=document.querySelector(".two");
// console.log(a.previousElementSibling);
console.log(a.nextElementSibling);

var b=document.querySelector(".two");
// console.log(b.previousSibling);
console.log(b.nextSibling);


// first child and last child
console.log("first_child or last_child");

var fchild=document.querySelector("body");
var ch=fchild.firstElementChild;
console.log(ch);

var fchild=document.querySelector("body");
var chh=fchild.firstChild;
console.log(chh);
