
let total;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;

function calculate(){
    total = Number(a + b + c + d + e + f); 
    document.getElementById("finalscore").innerHTML="Total Score: " + total+"/6";
}



let color = document.getElementById("sub");
let answer = document.getElementById("result1");

function checkbutton() {
     let question = document.getElementById("quest-1").value
     if (question.toLowerCase() === "d") {
       color.style.backgroundColor = "green";
        answer.innerText = " correct! ";
        a = 1;
     }else if(typeof(question) !== 'string' || question==0){
       console.log( typeof(question))
        answer.innerText = "Please select a valid option";
     }
     
     else {
         color.style.backgroundColor = "red";
         answer.innerText = "Answer - d ";
        a = 0; 
     }
     
     }

let color2 = document.getElementById("sub2");
let answer2 = document.getElementById("result2");

function checkbutton2() {
     let question = document.getElementById("quest-2").value
     if (question.toLowerCase() === "a") {
       color2.style.backgroundColor = "green";
        answer2.innerText = " Correct!!! ";
        b=1;
     } else if(question==0){
        answer2.innerText = "Please select an option";
     }
     
     else {
         color2.style.backgroundColor = "red";
         answer2.innerText = "Answer - a";
         b=0;
     }
    }

let color3 = document.getElementById("sub3");
let answer3 = document.getElementById("result3");

function checkbutton3() {
     let question = document.getElementById("quest-3").value
     if (question.toLowerCase() === "d") {
       color3.style.backgroundColor = "green";
        answer3.innerText = "you're Smart!! Correct";
        c=1;
        
     } else if(question==0){
        answer3.innerText = "Please select an option";
     }
     
     else {
         color3.style.backgroundColor = "red";
         answer3.innerText = "Answer - d";
         c=0
     }
     }

let color4 = document.getElementById("sub4");
let answer4 = document.getElementById("result4");

function checkbutton4() {
     let question = document.getElementById("quest-4").value
     if (question.toLowerCase() === "a") {
       color4.style.backgroundColor = "green";
        answer4.innerText = "Correct!";
        d=1;
        
     } else if(question==0){
        answer4.innerText = "Please select an option";
     }
     
     else {
         color4.style.backgroundColor = "red";
         answer4.innerText = " Answer - a";
         d=0;
     }

     }


let color5 = document.getElementById("sub5");
let answer5 = document.getElementById("result5");

function checkbutton5() {
     let question = document.getElementById("quest-5").value
     if (question.toLowerCase() === "c") {
       color5.style.backgroundColor = "green";
        answer5.innerText = "Correct!!!";
        e=1;
     } else if(question==0){
        answer5.innerText = "Please select an option";
     }
     
     else {
         color5.style.backgroundColor = "red";
         answer5.innerText = "Answer - c";
         e=0;
     }

     }



let color6 = document.getElementById("sub6");
let answer6 = document.getElementById("result6");

function checkbutton6() {
     let question = document.getElementById("quest-6").value
     if (question.toLowerCase() === "b") {
       color6.style.backgroundColor = "green";
        answer6.innerText = "you're Smart!! Correct";
        f=1;
        
     } else if(question==0){
        answer6.innerText = "Please select an option";
     }
     
     else {
         color6.style.backgroundColor = "red";
         answer6.innerText = "Answer - b";
         f=0;
     }

     }

     function home (){
         document.getElementById()
     }