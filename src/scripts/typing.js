// const typeAnimation = ()    =>  {
//     //
//     let i = 0;
//     let placeholder = "";
//     const txt = "Digite seu texto";
//     const typingSpeed = 60;


//     const type = () =>  {
//         placeholder += txt.charAt(i);
//         document.getElementById('animated__input').setAttribute('placeholder', placeholder);
//         i++;
//         setTimeout(type,typingSpeed);
//     }
//     type();
// }
// typeAnimation();

const main = ((txt) =>  {
    // encapsulation concept. Helps to prevent changes in variables as the lenght of the input will likely be static.
    
    
    
    const typeAnimation = (newTxt) => {
        let typingTimeout;
        if(typingTimeout)   {
            alert("alface");
            clearTimeout(typingTimeout);
        }
        let i = 0;
        let placeholder = "";
        const txt = newTxt;
        const typingSpeed = 80;
        console.log(i);
        const typing = ()   =>  {
        
            placeholder += txt.charAt(i) //will receive the string character by character

            document.getElementById('animated__input').setAttribute('placeholder', placeholder)//add a placeholder with you current placeholder value to the target.
            i++; //Makes sure that the index is always the next.
            // executes the function typing at our defined speed
            typingTimeout = setTimeout(typing, typingSpeed);
        }
        typing();
    }


    typeAnimation(txt);
    
    
});
main('Digite seu texto aqui');