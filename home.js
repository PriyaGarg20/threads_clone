// let buttoncont=document.querySelector(".current");

// buttoncont.addEventListener("click",function(){
  
//     buttoncont.classList.toggle("hide");

// })
// let form = document.getElementById("form");
// let input = document.getElementById("input");
// let msg = document.getElementById("msg");
// let posts = document.getElementById("posts");
// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     console.log("button clicked");
//     formValidation();
// })
// function formValidation(){
//     if(input.value===""){
//         msg.innerHTML="Post cannot be blank";
//         console.log("failure");
//     }
//     else {
//         console.log("successs");
        
//         msg.innerHTML = "";
//         inputData();
//       }
// }
// let data={};
// function inputData(){
//     data["text"]=input.value;
//     createPost();
//     console.log(data);
// }
// let del=document.querySelector(".delete");
// del.addEventListener("click",function(){
//     console.log(del.parentElement.parentNode.remove());
//     // del.parentElement.parentElement.remove();
// })
// function createPost(){
//     posts.innerHTML+=`<div>
//     <p>${data.text}</p>
//     <span class="options"><svg class="edit" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.749c0-.414.336-.75.75-.75s.75.336.75.75v9.249c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm1.521 9.689 9.012-9.012c.133-.133.217-.329.217-.532 0-.179-.065-.363-.218-.515l-2.423-2.415c-.143-.143-.333-.215-.522-.215s-.378.072-.523.215l-9.027 8.996c-.442 1.371-1.158 3.586-1.264 3.952-.126.433.198.834.572.834.41 0 .696-.099 4.176-1.308zm-2.258-2.392 1.17 1.171c-.704.232-1.274.418-1.729.566zm.968-1.154 7.356-7.331 1.347 1.342-7.346 7.347z" fill-rule="nonzero"/></svg>
//     <svg class="delete"clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z" fill-rule="nonzero"/></svg>
//     </span></div>`;
//     input.value="";
// };

//home js
let btn_cont=document.querySelector(".btn-container");
// console.log(btn_cont);
btn_cont.addEventListener("click",function(e){
let classn=e.target.className;
// console.log(classn);
let ele=e.target;
// console.log(ele);
if(classn=="primary edit"){
    let img=document.querySelector(".img-container");
    let nimg=window.prompt("Enter new profile picture");
    console.log(nimg);
    img.innerHTML=`<img src="${nimg}" alt="profile avatar">`;
    console.log(img);


}
if(classn=="primary share"){
    window.open("https://web.whatsapp.com","popupWindow","width=50px;height=400px")
    // console.log("share")
}
})

let btn_threads=document.querySelector(".button-container");


