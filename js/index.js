
var name = prompt('What is your Name?');
var ct = document.getElementById("Welcome")
ct.innerText= 'Welcome' +' '+ name

let menu = document.querySelector('.menu')

                                  
let sidebar = function(){
    menu.classList.add('show-menu')
}
let closesidebar = function(){
    menu.classList.remove('show-menu')
}


