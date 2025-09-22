const btn = document.querySelector(".operation");
const operation = () =>{
    const name = prompt("enter your name");
    alert (`Your name is ${name}`);
}
btn.addEventListener('onclick' ,()=>(operation));
