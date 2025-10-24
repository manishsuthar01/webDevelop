console.log("ok");

const a=document.querySelector("p");
console.log(a.textContent);
// text ke sath chhechhad krne pe style me change ho jata hai
a.innerText+=" <i>hidden</i>";
a.textContent+=" <i>hidden</i>";
console.log(a.innerText);
console.log(a.textContent);



//inserting new text 
var target=document.querySelector(".hero");
var newE='<b>manish</b>';
target.insertAdjacentHTML("beforeend",newE );
target.insertAdjacentHTML("beforebegin",newE );
target.insertAdjacentHTML("afterend",newE );
target.insertAdjacentHTML("afterbegin",newE );




