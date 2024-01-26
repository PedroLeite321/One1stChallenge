/*
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"



*/


const mainCrypt = () =>  {
    const states = {
        document: {
            userMainInput: document.getElementById("animated__input"),
            output__area:document.querySelector(".output__area"),
            cryptBtn: document.querySelector(".btn__encrypt"),

        }
    }
   
    const checkForInput = () => {
        states.document.cryptBtn.addEventListener("click", () =>    {
            
            encrypt();
        })
    }
    checkForInput();
    const encrypt = () =>   {
        const getText = states.document.userMainInput.value;
        let textContent = "alface";


        if (getText === "" || getText === undefined || getText === null) {
            document.getElementById('animated__input').setAttribute('placeholder', "");
            textContent = "Por favor, insira algo!";
            main(textContent);
        }
    }
    
}
mainCrypt();