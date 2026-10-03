<<<<<<< HEAD
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

let btns = Array.from(buttons);
btns.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})


=======
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

let btns = Array.from(buttons);
btns.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})


>>>>>>> 050417ea57ebfcee9dc46bd9b8476e1ec4629ed0
