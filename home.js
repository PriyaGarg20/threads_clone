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


