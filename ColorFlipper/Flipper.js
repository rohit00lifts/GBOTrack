let container=document.querySelector('.innerCont');
let button=document.querySelector('button');
function randomNumGiver(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
button.addEventListener('click',()=>{
    let randomColor=randomNumGiver();
    container.style.backgroundColor=randomColor;
})