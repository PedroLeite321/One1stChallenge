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

            console.log("alface")
            if (getText === "" || getText === undefined || getText === null) {
                states.document.userMainInput.setAttribute('placeholder', "");
                textContent = "Por favor, insira algo!";
                main(textContent);
                
            }else   {
                getUserInput();
            }
            
            

           
        }

        const checkForInput = () => {
            states.document.cryptBtn.addEventListener("click", () =>    {
                
                checkForContent();
            })
        }
        checkForInput();
      
        const getUserInput = () => {
            const userTxt = states.document.userMainInput.value;
            let str = [];
            const checkCryptoLogic = (char) =>   {
                
                
                const addToStr = (newChar) =>  {
                    str.push(newChar);
                    console.log(str);
                }
               
                switch(char)    {
                    case 'a':
                        char = 'ai';
                        addToStr(char);
                        break;
                    case 'i':
                        char = 'imes';
                        addToStr(char);
                        break;
                    case 'e':
                        char = 'enter';
                        addToStr(char);
                        break;
                    case 'o':
                        char = 'ober';
                        addToStr(char);
                        break;
                    case 'u':
                        char = 'ufat';
                        addToStr(char);
                        break;
                    default:    
                         addToStr(char);
                         break;
                }
                
                //get the modified string and add to the aside and write it in the placeholder aswell
                return str;
                
            }
            
            const defineCryptograph = () => {
                let encryptedStr;
                for(let i = 0; i < userTxt.length; i++) {
                    
                    encryptedStr = checkCryptoLogic(userTxt[i]);
                }
                console.log(encryptedStr)
        
            }
            defineCryptograph();
            
            
            const clearAside = () =>    {

            }
        }
    }
    encrypt();
    
}
mainCrypt();