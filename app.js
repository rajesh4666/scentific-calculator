let display = document.querySelector("#display")

function append(char){
    display.value += char;
}

function clearDisplay(){
    display.value = '';
}
function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){


let angle = display.value;

    if (angle.includes('sin')) {
        let num = parseFloat(angle.replace('sin', ''));
        display.value = Math.sin(num * Math.PI / 180);
    }
    else if (angle.includes('cos')){
        let num = parseFloat(angle.replace('cos', ''));
        display.value = Math.cos(num * Math.PI / 180); 
    }
    else if (angle.includes('tan')){
        let num = parseFloat(angle.replace('tan', ''));
        display.value = Math.tan(num * Math.PI / 180); 
    }
    else if (angle.includes('√')){
        let num = parseFloat(angle.replace('√', ''));
        display.value = Math.sqrt(num); 
    }
    else if (angle.includes('log')){
        let num = parseFloat(angle.replace('log', ''));
        display.value = Math.log10(num); 
    }
    else if (angle.includes('^')){
        let [base , power] = angle.split('^').map(Number);
        display.value = Math.pow(base,power); 
    }
    else if (angle.includes('!')){
        let num = parseFloat(angle.replace('!', ''));
        display.value = factorial(num); 
    }
    else if (angle.includes('log')){
        let num = parseFloat(angle.replace('log', ''));
        display.value = Math.log10(num); 
    }
    else{
        display.value = eval(angle);
    }

}
function factorial(n){
    let display = 1;
    for (let i = 2; i<=n; i++){
        display *= i;
    }
    return display;
}

