


let submit = document.querySelector(".submit")
let dismiss = document.querySelector(".dismiss-btn")
let modal = document.querySelector("#modal");
let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
let invalid = document.querySelector("small");
let input = document.querySelector("input")

var dialog = document.querySelector('dialog');
   // dialogPolyfill.registerDialog(dialog);

submit.addEventListener('click',()=>{
  
let email = document.querySelector(".email").value;
  if(email.match(regex)){
    console.log("grammer")
  modal.showModal();
  }
  else{
    invalid.style.color = "#db8000";
    input.style.borderColor = "#d10000"
  }
  
})

dismiss.addEventListener("click", ()=>{
  modal.close();
})

