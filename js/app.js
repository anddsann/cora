$(window).scroll(function(){
    //calcular el scroll que hace el usuario
    let pixel = $(window).scrollTop();
    //mostrar por consola ese scroll
    console.log({pixel});

    //asociar el scroll que hace el usaurio con el tiempo rela del video
    cora.currentTime = pixel / 245;
});