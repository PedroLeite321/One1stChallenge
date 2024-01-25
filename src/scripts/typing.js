const typeAnimation = ()    =>  {
    //
    let i = 0;
    let placeholder = "";
    const txt = "Digite seu texto";
    const typingSpeed = 60;


    const type = () =>  {
        placeholder += txt.charAt(i);
        document.getElementById('animated__input').setAttribute('placeholder', placeholder);
        i++;
        setTimeout(type,typingSpeed);
    }
    type();
}
typeAnimation();