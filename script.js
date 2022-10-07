const display = document.querySelector('#s=display');
const buttons = document.querySelectorAll

buttons.forEach ((item )=> {
    item.onclick = () => {
        if (item.id == 'clear'){
            display.innerText = '';
        } else if (item.id == 'backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substr (0,string.length - 1);
        }else if (display.innerText !='' && item.id == 'equal'){ 
            display.innerText = eval(display.innerText)
        }else if (display.innerText == '' && item.ied == 'equal'){
            display.innerText= 'Empty!';
            setTimeout(() => (display.innerText =''),2000);
        }else {
            display.innerText += item.id;
        }
    }
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const ToggleIcon = document.querySelector('.toggler-icon');
let isDrak = true;
themeToggleBtn.onclick =() =>{
     calculator.classList.toggle ('drak');
     themeToggleBtn.classList.toggle(active);
     isDark = !isDrak;
}