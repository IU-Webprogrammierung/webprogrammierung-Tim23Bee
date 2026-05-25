document.addEventListener('DOMContentLoaded',() => {
    const options = {
        strings: ['Ciao!','Hello!','Hola!','Bonjour!'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    };
    const typed = new Typed('#greeting-typewriter', options);
});
