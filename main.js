//obtener los elementos de clase . close

let links = document.querySelectorAll(".close")

links.forEach(function (link) {
    //agregar un evento click a cada uno de ellos
    //case sensiteve 
    link.addEveListener("click", function (ev) {
        ev.prevententDefaul();
        let content = document.querySelector('.content');

        //quitarle la ¡s animaciones que ya tiene
        content.classList.remove(animate__zoomInDown);
        content.classList.remove(animate__animated);

        Content.classList.add("animate__fadeUutUp");
        Content.classList.add("animate__animated");

        setTimeout(function () {
            window.history.go(-1);
        }, 600);
        setInterval
    });


});
//agregar la clases de animaciones que ya tienes