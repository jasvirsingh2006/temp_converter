let btn1 = document.querySelector("#btn1");
const paragraph1 = document.getElementsByClassName(".para1")
const paragraph2 = document.querySelector(".para2")
const resultbox1= document.querySelector("h3")
const resultbox2= document.querySelector("h4")

let input1= document.querySelector("#input1");
console.log(input1.value);
   
btn1.addEventListener("click",() => {
    console.log(input1.value);
    console.log((input1.value - 32)*5/9);
    result1 = (input1.value - 32)*5/9;
    console.log(result1);
    resultbox2.innerText= result1;
    
})
let btn2 = document.querySelector("#btn2");

let input2= document.querySelector("#input2");
console.log(input2.value);

btn2.addEventListener("click",() => {
    console.log(input2.value);
    result_2=((input2.value * 9/5)+ 32);
    console.log(result_2);
    resultbox1.innerHTML=result_2;
    

})


