function getPin(){
    const random = Math.random()*10000;
    const pin = (random + '').split('.')[0];
    if (pin.length == 4) {
        return pin;
    }
    else{
        return getPin();
    }
}

// display pin
function generatePin(){
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}

// handle digitButton
const buttonContainer = document.getElementById('digit-body');
buttonContainer.addEventListener('click', function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        // handle backspace
        if (digit === "B" ) {
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = typedInput.value.substring(0, typedInput.value.length - 1)
        }
        // handle clear
        if (digit === "C") {
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = "" ;
        }
    }
    else {
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})

// verify pin
function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
if (pin === typedPin) {
    matchResult('block' , 'none')
    }
else{
     matchResult('none', 'block')
    }
} 
function matchResult(correctStatus, incorrectStatus){
    const correct = document.getElementById('correct-pin');
    correct.style.display = correctStatus;
    const inCorrect = document.getElementById('incorrect-pin');
    inCorrect.style.display = incorrectStatus;
}