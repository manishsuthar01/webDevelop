console.log("ok");
const div = document.getElementsByTagName("div")[2];


     div.addEventListener("click", (event) => {
   
        if (event.target.tagName === "BUTTON") { 
           console.log("button was clicked");
    } 
        else if (event.target.tagName === "SPAN") {
           console.log("span was clicked");
    }
         else {
           console.log("div was clicked");
    }
  });

