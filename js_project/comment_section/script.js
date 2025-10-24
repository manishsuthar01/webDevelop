let submit_btn = document.getElementById("submit");
let comment_list = document.querySelector(".comments");
let commentsArray = [];

submit_btn.addEventListener("click", () => {
  let text = document.querySelector("#text").value.trim();
  if (!text) return;
  let obj = {
    id: Date.now(),
    user: "John Doe",
    text: text,
    likes: 0,
    timestamp: Date.now(),
    replies: [],
  };
  commentsArray.push(obj);
  document.querySelector("#text").value = "";
  render(commentsArray, comment_list);
});

function render(list, container) {
  comment_list.innerHTML = "";
  list.forEach((comment) => {
    let div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `
       <p><strong>${comment.user}</strong></p> 
       <p>${comment.text}</p>
       <div class="comment-actions">
         <button class="like">👍 ${comment.likes}</button>
         <button class="reply-btn">↩ Reply</button>
       </div>
     `;

    let replyForm = document.createElement("div");
    replyForm.classList.add("replyForm")
    replyForm.innerHTML = `
     <textarea placeholder="Write your reply..."></textarea>
       <button class="post-reply">Post Reply</button>
    `;
    replyForm.style.display = "none";

    let replycontainer = document.createElement("div");
    replycontainer.classList.add("replies");

    if (comment.replies.length > 0) {
      render(comment.replies, replycontainer);
    } 

    div.querySelector(".reply-btn").addEventListener("click", () => {
      replyForm.style.display = replyForm.style.display === "none" ? "block" : "none";
    });

    replyForm.querySelector(".post-reply").addEventListener("click", () => {
      let replyText = replyForm.querySelector("textarea").value.trim();
      if (!replyText) return;
      comment.replies.push({
        id: Date.now(),
        user: "Jane Smith",
        text: replyText,
        likes: 0,
        timestamp: Date.now(),
        replies: [],
      });
      render(commentsArray, comment_list);
    });
    div.appendChild(replyForm);
    div.appendChild(replycontainer);

    container.appendChild(div);
  });
}
