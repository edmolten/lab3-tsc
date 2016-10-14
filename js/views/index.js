var indexView = {
    init: function(){
        $('#start-button').click(function(){

            /*redireccionar a ventana de login cuando no se esté logueado*/

            alert("A continuación se abrirá la vista contribuyentes.html, una vez implementado el login, este botón debe redireccionar a la vista login.html cuando no se esté logueado en el sistema");
            window.location.href = "contribuyentes.html";


        });
    }
}
