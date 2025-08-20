let h2Element=document.querySelector('h2');
let Increase=document.querySelector('.Increase');
let Decrease=document.querySelector('.Decrease');
let Reset=document.querySelector('.Reset');
console.log('Integrated successfully');
function countUpdater(){
 h2Element.innerHTML=`Current count :${currentCounter}`
}
let currentCounter=0;
Increase.addEventListener('click',()=>{
currentCounter < 10 ? currentCounter++ : Increase.disabled=true;
    countUpdater();
})
Decrease.addEventListener('click',()=>{
   currentCounter>0 ? currentCounter-- : Decrease.disabled=true;
    h2Element.innerHTML=`Current count :${currentCounter}`
})
Reset.addEventListener('click',()=>{
    currentCounter=0;
    h2Element.innerHTML=`Current count :${currentCounter}`
})