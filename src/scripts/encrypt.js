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
   
    
    
    const encrypt = () =>   {
        
        const checkForContent = ()  =>  {
            const getText = states.document.userMainInput.value;
            let textContent;


            if (getText === "" || getText === undefined || getText === null) {
                states.document.userMainInput.setAttribute('placeholder', "");
                textContent = "Por favor, insira algo!";
                
            }
            
            

            main(textContent);
        }

        const checkForInput = () => {
            states.document.cryptBtn.addEventListener("click", () =>    {
                
                checkForContent();
            })
        }
        checkForInput();
      
        const getUserInput = () => {
            const clearAside = () =>    {

            }
        }
    }
    encrypt();
    
}
mainCrypt();